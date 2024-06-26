

const asyncHandler = require("express-async-handler");
const fs=require("fs");
const User = require("../schemas/userModel");
const Admin = require("../schemas/adminModel")
const path = require('path');
//register the user(role)
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, phone, password} = req.body;
    if (!name || !email || !password || !phone ) {
        res.status(400)
        throw new Error("Please enter all the fields")
    }

    const existinUser = await User.findOne({ email });
    const existinAdmin = await Admin.findOne({ email });
    if (existinAdmin) {
        res.status(400);
        throw new Error("User already exists ");
    }
    if (existinUser) {
        res.status(400);
        throw new Error("User already exists ");
    }
    const user = await User.create({
        name,
        phone,
        password,
        email,
    });
    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            phone: user.phone,
        });
    }
    else {
        res.status(400);
        throw new Error("User not created");
    }
});

//get user profile

const getUserProfile = asyncHandler(async (req, res) => {
    const userId = req.params.id; // Assuming the ID is provided in the URL parameter
    const user = await User.findById(userId).populate('followers'); // Populate followers array

    if (!user) {
        res.status(404).json({ message: "User not found" });
    } else {
        // Get the number of followers
        const followersCount = user.followers.length;
         const followingCount = user.followingList.length;
        
        // Construct the response object
        const userProfile = {
            _id: user._id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            followers: followersCount,
            following: followingCount,           // Include the number of followers
            // Add more details as needed
        };

        res.json(userProfile);
    }
});

// server.js
// const uploadProfileImage = async (req, res) => {
//     try {
//       const { userId } = req.body; 
//       const profileImage = req.file.path;
      
//       await User.findByIdAndUpdate(userId, { profileImage });
      
//       res.json({ message: 'Profile image uploaded successfully' });
//     } catch (error) {
//       console.error('Error uploading profile image:', error);
//       res.status(500).json({ error: 'Internal server error' });
//     }
//   };
  

const uploadProfileImage = async (req,res) => {
     try{
       const { userId, photoEncode, phototype} = req.body;

       if(!photoEncode || phototype) {
         return res.status(400).json({error: 'Invalid image data'});
       }

       const photoBuffer = Buffer.from(photoEncode, 'base64');
       const photoPath = path.join(__dirname,'..','uploads',`${userId}.${phototype}`);
       fs.writeFileSync(photoPath,photoBuffer);

       await User.findByIdAndUpdate(userId, {profileImage:photoPath});

       res.json({message: 'Profile image uploaded successfully'});
     } catch(error){
       console.error('Error uploading profile image');
       res.status(500).json({error:'Internal server error'});
     }
}
  // Function to get profile image
  const getProfileImage = async (req, res) => {
    try {
      const { userId } = req.params;
      const user = await User.findById(userId);
      
      if (!user || !user.profileImage) {
        return res.status(404).json({ error: 'Profile image not found' });
      }
      
      res.sendFile(user.profileImage);
    } catch (error) {
      console.error('Error getting profile image:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
 

  // Follow a user
const followUser = asyncHandler(async (req, res) => {
  
  // const currentUser = req.user;

  try {
    const { userIdToFollow , userwhowantsttofollow} = req.body;
      console.log("hi")
      const userToFollow = await User.findOne({ _id: userIdToFollow});
      const currentUser = await User.findOne({ _id: userwhowantsttofollow});
      console.log(currentUser)
            if (!currentUser) {
        res.status(404).json({ message: 'Userwhowants not found' });
      //  return;
    }
      if (!userToFollow ) {
          res.status(404).json({ message: `User not foundhyuyfueu ${currentUser._id}` });
          // return;
      }
     
      
      userToFollow.requests.push(userwhowantsttofollow);
      currentUser.pendings.push(userIdToFollow)
      await currentUser.save();
      await userToFollow.save();

  
      // userToFollow.followers.push(currentUser._id);
      // await userToFollow.save();

      res.json({ msg: 'User requested successfully' });
  } catch (error) {
      console.error('Error following user:', error);
      res.status(500).send('Server Error');
  }
});


const editProfile = async (req, res) => {
  const { email, name, phone, id } = req.body;
  console.log("hiiii") // Get parameters from request body
  try {
    let user;
    let admin;
    user = await User.findOne({ _id: id });
    if (user) {
      user.email = email;
      user.name = name;
      user.phone = phone;
  
      await user.save();
      return res.status(200).json({ message: "User profile updated successfully" });
    }
    admin = await Admin.findOne({ _id: id });
    if (admin) {
      admin.email = email;
      admin.name = name;
      admin.phone = phone;
      await admin.save();
      return res.status(200).json({ message: "Admin profile updated successfully" });
    }

    return res.status(404).json({ message: "User or Admin not found" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};


module.exports = {registerUser ,getUserProfile, uploadProfileImage, getProfileImage,followUser,editProfile};
