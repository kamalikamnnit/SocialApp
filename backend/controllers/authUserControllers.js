const asyncHandler = require("express-async-handler");
const User = require("../schemas/userModel");
const Admin=require("../schemas/adminModel");

const authUserFunction=asyncHandler(async(req,res)=>{
const {email,password}=req.body;

    

 try{
    let user = await User.findOne({ email });
    
    if (user && (await user.matchPassword(password))) {
      return res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        company: user.company,
        position: user.position,
        role: user.role,
        followers: user.followers,
        followingList: user.followingList,
        requests: user.requests,
        profileimg: user.profileimg,
      });
    }

    // Check for user in Admin collection
    let admin = await Admin.findOne({ email }); // Corrected to use an object
    console.log("Admin collection:", admin); // Logging the admin

    if (admin && (await admin.matchPassword(password))) {
      return res.json({
        _id: admin._id,
        name: admin.name,
        email: admin.email,
        phone: admin.phone,
        company: admin.company,
        position: admin.position,
        role: admin.role,
        followers: admin.followers,
        followingList: admin.followingList,
        requests: admin.requests,
        profileimg: admin.profileimg,
      });
    }
   
          res.status(401).json({message:"Invalid Email or Password"});
    }  catch(err){
       res.status(500).json({message:err.message})
    }
})

const logout = async (req, res) => {
  try {
    // Clear the token cookie
    res.clearCookie("token", { sameSite: "none", secure: true }).status(200).send("User logged out successfully!");
  } catch (err) {
    // Handle errors
    res.status(500).json(err);
  }
};


module.exports={authUserFunction,logout}
