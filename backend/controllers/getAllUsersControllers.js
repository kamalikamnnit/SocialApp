const asyncHandler = require("express-async-handler");
const User = require("../schemas/userModel");
const Admin=require("../schemas/adminModel");

const getAllUsers = asyncHandler(async (req, res) => {
    const { name } = req.query; 
    console.log(name); 
    const query = { name: { $regex: new RegExp(name, 'i') } };
    console.log(query);

    try {
        const users = await User.find(query);
        const admins = await Admin.find(query);
        let f=0;
        if (users.length > 0 ) {
            res.status(200).json(users);
            f=1;
        }
      
        else  {
                res.status(404).json({ message: "No users found with the provided name" });
        }
        
    } catch (error) {
        console.error(error); 
        res.status(500).json({ message: "Internal Server Error" });
    }
});

const getAllAdmins = asyncHandler(async (req, res) => {
    const { name } = req.query; 
    console.log(name); 
    const query = { name: { $regex: new RegExp(name, 'i') } };
    console.log(query);

    try {
        const admins = await Admin.find(query);
        if (admins.length > 0) {
            res.status(200).json(admins);
        } else {
            res.status(404).json({ message: "No admins found with the provided name" });
        }
    } catch (error) {
        console.error(error); 
        res.status(500).json({ message: "Internal Server Error" });
    }
});
const getName = asyncHandler(async (req, res) => {
    const { id } = req.query; 
    console.log(id); 
    const query = { _id: id };
    console.log(query);

    try {
        const   user = await User.findOne(query)
        const admin=await Admin.findOne(query);
        if (user) {
            res.status(200).json(user.email  );
            return user.email;
            // console.log(user);
        } else if (admin) {
            res.status(200).json(admin.email);
            return admin.email;
        }
        else{
            res.status(404).json({ message: "No user found with the provided id" });
            return "Anonymous";
        }
}
catch (error) {
    console.error(error); 
    res.status(500).json({ message: "Internal Server Error" });
}}
);
module.exports={getAllUsers,getAllAdmins ,getName};