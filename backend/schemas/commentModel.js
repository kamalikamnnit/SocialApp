// const mongoose=require('mongoose')

// const CommentSchema=new mongoose.Schema({
//     comment:{
//         type:String,
//         required:true,
//     },
//     author:{
//         id:{
//              type: String,
//              required: true,
//         },
//         name:{
//              type : String,
//              required: true
//         },
//     },
//     postId:{
//         type:String,
//         required:true,
//     },
//     userId:{
//         type:String,
//         required:true
//     },
   
// },{timestamps:true})

// module.exports=mongoose.model("Comment",CommentSchema)

const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    comment: {
        type: String,
        required: true,
    },
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User', // Assuming author is a User
          },
          name: {
            type: String,
            required: true,
          },
    },
    postId: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true
    },
}, { timestamps: true });

module.exports = mongoose.model("Comment", CommentSchema);
