// // const asyncHandler = require("express-async-handler");
// // const User = require("../schemas/userModel");
// // const jwt = require("jsonwebtoken");
// // const Admin=require("../schemas/adminModel")


// // const nodemailer=require("nodemailer"); 


// // const forgetPassword = asyncHandler(async(req, res) => {
// //   const { email } = req.body;
// //     try {
// //       const user = await User.findOne({ email });
// //       const admin = await Admin.find({email});
// //       if (!user && !admin) {
// //         return res.status(404).send({ message: "User not found" });
// //       }
  
// //       if(user) {
// //         const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, {expiresIn: "10m",});
// //         const transporter = nodemailer.createTransport({
// //           service: "gmail",
// //           auth: {
// //             user: process.env.SMTP_MAIL,
// //             pass: process.env.SMTP_PASSWORD,
// //           },
// //         });
    
// //         const mailOptions = {
// //           from: process.env.SMTP_MAIL,
// //           to: email,
// //           subject: "Reset Password",
// //           html: `<h1>Reset Your Password</h1>
// //         <p>Click on the following link to reset your password:</p>
// //         <a href="http://localhost:5173/reset-password/${token}">http://localhost:5173/reset-password/${token}</a>
// //         <p>The link will expire in 10 minutes.</p>
// //         <p>If you didn't request a password reset, please ignore this email.</p>`,
// //         };
// //         transporter.sendMail(mailOptions, (err, info) => {
// //           if (err) {
// //             return res.status(500).send({ message: err.message });
// //           }
// //           res.status(200).send({ message: "Email sent" });
// //         });
// //       } catch (err) {
// //         res.status(500).send({ message: err.message });
// //       }
// //     });

  

// //       if(admin)
// //         {
// //            const token = jwt.sign({ adminId:admin._id} , process.env.JWT_SECRET_KEY, {expiresIn: "10m",});
// //            const transporter = nodemailer.createTransport({
// //             service: "gmail",
// //             auth: {
// //               user: process.env.SMTP_MAIL,
// //               pass: process.env.SMTP_PASSWORD,
// //             },
// //           });
      
// //           const mailOptions = {
// //             from: process.env.SMTP_MAIL,
// //             to: email,
// //             subject: "Reset Password",
// //             html: `<h1>Reset Your Password</h1>
// //           <p>Click on the following link to reset your password:</p>
// //           <a href="http://localhost:5173/reset-password/${token}">http://localhost:5173/reset-password/${token}</a>
// //           <p>The link will expire in 10 minutes.</p>
// //           <p>If you didn't request a password reset, please ignore this email.</p>`,
// //           };
// //           transporter.sendMail(mailOptions, (err, info) => {
// //             if (err) {
// //               return res.status(500).send({ message: err.message });
// //             }
// //             res.status(200).send({ message: "Email sent" });
// //           });
// //         } catch (err) {
// //           res.status(500).send({ message: err.message });
// //         }
// //       });
        

      
// //     }
// //   module.exports = { forgetPassword };
// const asyncHandler = require("express-async-handler");
// const User = require("../schemas/userModel");
// const Admin = require("../schemas/adminModel");
// const jwt = require("jsonwebtoken");
// const nodemailer = require("nodemailer");

// const sendResetEmail = async (email, token) => {
//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: process.env.SMTP_MAIL,
//       pass: process.env.SMTP_PASSWORD,
//     },
//   });

//   const mailOptions = {
//     from: process.env.SMTP_MAIL,
//     to: email,
//     subject: "Reset Password",
//     html: `<h1>Reset Your Password</h1>
//            <p>Click on the following link to reset your password:</p>
//            <a href="http://localhost:3000/resetPassword/${token}">http://localhost:3000/resetPassword/${token}</a>
//            <p>The link will expire in 10 minutes.</p>
//            <p>If you didn't request a password reset, please ignore this email.</p>`,
//   };

//   return new Promise((resolve, reject) => {
//     transporter.sendMail(mailOptions, (err, info) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(info);
//       }
//     });
//   });
// };

// const forgetPassword = asyncHandler(async (req, res) => {
//   const { email } = req.body;

//   try {
//     const user = await User.findOne({ email });
//     const admin = await Admin.findOne({ email });

//     if (!user && !admin) {
//       return res.status(404).send({ message: "User not found" });
//     }

//     const entity = user || admin;
//     const entityId = user ? { userId: user._id } : { adminId: admin._id };
//     const token = jwt.sign(entityId, process.env.JWT_SECRET_KEY, { expiresIn: "10m" });

//     await sendResetEmail(email, token);
//     res.status(200).send({ message: "Email sent" });
//   } catch (err) {
//     res.status(500).send({ message: err.message });
//   }
// });




// const resetPassword = asyncHandler(async (req, res) => {
//   const { token, newPassword } = req.body;

//   try {
//     console.log("Token:", token);
//     const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
//     console.log("Decoded token:", decoded);

//     const userId = decoded.userId || decoded.adminId;
//     if (!userId) {
//       return res.status(400).send({ message: "Invalid token structure" });
//     }

//     const user = await User.findById(userId) || await Admin.findById(userId);
//     console.log("User:", user);

//     if (!user) {
//       console.log("User not found");
//       return res.status(404).send({ message: "User not found" });
//     }

//     const hashedPassword = await bcrypt.hash(newPassword, 10);
//     user.password = hashedPassword;
//     await user.save();
//     return res.send({ message: "Password reset successful" });
//   } catch (err) {
//     console.error("Error:", err);
//     return res.status(500).send({ message: "Invalid or expired token" });
//   }
// });


// module.exports = { forgetPassword , resetPassword};
const asyncHandler = require("express-async-handler");
const User = require("../schemas/userModel");
const Admin = require("../schemas/adminModel");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");

const sendResetEmail = async (email, token) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_MAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.SMTP_MAIL,
    to: email,
    subject: "Reset Password",
    html: `<h1>Reset Your Password</h1>
           <p>Click on the following link to reset your password:</p>
           <a href="http://localhost:3000/resetPassword/${token}">http://localhost:3000/resetPassword/${token}</a>
           <p>The link will expire in 10 minutes.</p>
           <p>If you didn't request a password reset, please ignore this email.</p>`,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        reject(err);
      } else {
        resolve(info);
      }
    });
  });
};

const forgetPassword = asyncHandler(async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    const admin = await Admin.findOne({ email });

    if (!user && !admin) {
      return res.status(404).send({ message: "User not found" });
    }

    const entity = user || admin;
    const entityId = user ? { userId: user._id } : { adminId: admin._id };
    const token = jwt.sign(entityId, process.env.JWT_SECRET_KEY, { expiresIn: "10m" });

    await sendResetEmail(email, token);
    res.status(200).send({ message: "Email sent" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

const resetPassword = asyncHandler(async (req, res) => {
  const { token, newPassword } = req.body;

  try {
    console.log("Token:", token);
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    console.log("Decoded token:", decoded);

    const userId = decoded.userId || decoded.adminId;
    if (!userId) {
      return res.status(400).send({ message: "Invalid token structure" });
    }

    const user = await User.findById(userId) || await Admin.findById(userId);
    console.log("User:", user);

    if (!user) {
      console.log("User not found");
      return res.status(404).send({ message: "User not found" });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    await user.save({ validateBeforeSave: false });
    return res.send({ message: "Password reset successful" });
  } catch (err) {
    console.error("Error:", err);
    return res.status(500).send({ message: "Invalid or expired token" });
  }
});

module.exports = { forgetPassword, resetPassword };
