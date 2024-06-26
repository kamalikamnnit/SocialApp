const express=require('express');

const jwt=require('jsonwebtoken')

const {registerUser ,getUserProfile,uploadProfileImage,getProfileImage ,followUser,editProfile}=require("../controllers/userControllers");
const {registerAdmin, getadminProfile}=require("../controllers/adminControllers");
const {getAllUsers, getAllAdmins,getName}=require("../controllers/getAllUsersControllers");
const router=express.Router();
const {authUserFunction,logout}=require("../controllers/authUserControllers");
router.post("/authUser",authUserFunction);
router.get("/logout",logout);
router.post("/registerUser",registerUser);
router.post("/registerAdmin",registerAdmin);
router.get("/registerUser",getAllUsers);  
router.post("/profile/upload",uploadProfileImage);

router.get("/profileimage/:userId",getProfileImage);
router.get("/registerAdmin",getAllAdmins);  
router.get("/profile/:id" ,getUserProfile);
router.get("/adminprofile/:id",getadminProfile);
router.put("/editProfile",editProfile)
router.get("/getName",getName);
router.post("/follow",followUser)
router.get("/refetch", (req,res)=>{
    const token=req.cookies.token
    jwt.verify(token,process.env.SECRET,{},async (err,data)=>{
        if(err){
            return res.status(404).json(err)
        }
        res.status(200).json(data)
    })
})

module.exports = router;

