const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const {ObjectId} = mongoose.Schema.Types;
const validate = require("mongoose-validator");


const passwordValidator = [
    validate({
      validator: "isLength",
      arguments: [8, 50], 
      message: "Password should be between {ARGS[0]} and {ARGS[1]} characters",
    }),
    
    validate({
      validator: "matches",
      arguments: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/,
      message:
        "Password should contain at least one digit, one lowercase letter, one uppercase letter, one special character, and must be at least 8 characters long.",
    }),
  ];

const adminSchema=mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        email: { 
            type: String,
             unique: true, 
            required: true 
        },
        phone:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true,
          validate: passwordValidator,
        }
,
         company:{
            type:String,
            required:true,

         },
         position:{
            type:String,
         },
         role:{
            type:String,
            default: "admin"
         },
        notifications:{
          type:mongoose.Schema.Types.ObjectId,ref:'Notification'
        },
        posts:{
          type:mongoose.Schema.Types.ObjectId,ref:'Post'
        },
       

       followers:[
        {
          type:ObjectId,
          ref:"User"
        }
      
     ],
      followingList:[
        {
          type:ObjectId,
          ref:"User"
        }
      ],
       requests:{
        type:Array
      },
      
      profileimg: {
        type: Buffer,
      },
      
    }
)

adminSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
  };
  
  adminSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
      return next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  });
  
const Admin= mongoose.model("Admin", adminSchema);
module.exports=Admin;




