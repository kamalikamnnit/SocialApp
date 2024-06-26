const express = require("express");
const router = express.Router();
const { forgetPassword , resetPassword} = require("../controllers/forgottenPasswordControllers")
router.post("/forgetPassword", forgetPassword);
router.post("/resetPassword" , resetPassword);
module.exports = router; 