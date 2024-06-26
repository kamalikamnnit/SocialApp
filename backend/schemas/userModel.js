const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const {ObjectId} = mongoose.Schema.Types;
const validate = require("mongoose-validator");

// const passwordValidator = [
//     validate({
//       validator: "isLength",
//       arguments: [8, 50], 
//       message: "Password should be between {ARGS[0]} and {ARGS[1]} characters",
//     }),
    
//     validate({
//       validator: "matches",
//       arguments: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/,
//       message:
//         "Password should contain at least one digit, one lowercase letter, one uppercase letter, one special character, and must be at least 8 characters long.",
//     }),
//   ];
  
  const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },

    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        // validate: passwordValidator
    },
    status: {
        type: String,
    },
    role: {
        type: String,
        default: "user"
    },
    notifications: [{
        type: ObjectId,
        ref: 'Notification'
    }],
    posts: [{
        type: ObjectId,
        ref: 'Post'
    }],

    followers: [{
        type: ObjectId,
        ref: "User"
    }],
    followings: [{
        type: ObjectId,
        ref: "User"
    }],
    requests: {
        type: Array
    },
  
    profileimg: {
        type: Buffer,
      }
      

});


userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
  };
  
  userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
      return next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  });
  
  const User = mongoose.model("User", userSchema);
  
  module.exports = User;