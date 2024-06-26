const express=require('express')
const asyncHandler = require("express-async-handler");
const Comment=require("../schemas/commentModel")
const Post=require("../schemas/postsModel")

//CREATE
const createcomment = async (req, res) => {
    const { comment, author, postId, userId } = req.body;
  
    try {
      const newComment = new Comment({
        comment,
        author,
        postId,
        userId,
      });
  
      const savedComment = await newComment.save();
  
      // Add the comment to the post's Comments array
      await Post.findByIdAndUpdate(postId, { $push: { Comments: savedComment } });
  
      res.status(200).json(savedComment);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to add comment" });
    }
  };
  
 
  
  

  

// UPDATE
const updatecomment = (async (req,res)=>{
    try{
        
        const updatedComment=await Comment.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updatedComment)

    }
    catch(err){
        res.status(500).json(err)
    }
})


//DELETE
const deletecomment = async (req, res) => {
  try {
      const commentId = req.params.id;
      const userId = req.body.userId; // Get userId from the request body

      const comment = await Comment.findById(commentId);

      if (!comment) {
          return res.status(404).json("Comment not found!");
      }

      if (comment.userId !== userId) {
          return res.status(403).json("Unauthorized to delete this comment!");
      }
          
      await Comment.findByIdAndDelete(commentId);
      res.status(200).json("Comment has been deleted!");
  }  catch (err) {
    console.error("Error deleting comment:", err); // Log the error for debugging
    res.status(500).json({ error: "An error occurred while deleting the comment." , details: err.message });
  }
};







//GET POST COMMENTS
const getcomments = asyncHandler(async (req, res) => {
    const { id: postId } = req.params;
  
    try {
      const comments = await Comment.find({ postId });
      if (!comments) {
        return res.status(404).json({ message: "No comments found for this post" });
      }
      res.status(200).json(comments);
    } catch (error) {
      res.status(500).json({ message: "Failed to get comments", error: error.message });
    }
  });
  


  const updateReaction = asyncHandler(async (req, res) => {
    const { postId, userId, reaction } = req.body;
  
    // Validate input
    if (!postId || !userId || !reaction) {
      return res.status(400).json({ message: "Post ID, User ID, and reaction are required" });
    }
  
    try {
      console.log("Received request:", { postId, userId, reaction });
  
      const post = await Post.findById(postId);
      if (!post) {
        return res.status(404).json({ message: "Post not found" });
      }
  
      console.log("Found post:", post);
  
      // Initialize reactions as a Map if it doesn't exist
      if (!post.reactions) {
        post.reactions = new Map();
      }
  
      // Remove the user's reaction from all reaction types
      for (const [key, users] of post.reactions.entries()) {
        const userIndex = users.indexOf(userId);
        if (userIndex !== -1) {
          users.splice(userIndex, 1);
        }
      }
  
      console.log("Updated reactions after removal:", post.reactions);
  
      // Add the new reaction
      if (!post.reactions.has(reaction)) {
        post.reactions.set(reaction, []);
      }
      post.reactions.get(reaction).push(userId);
  
      console.log("Updated reactions after adding new reaction:", post.reactions);
  
      await post.save();
      res.status(200).json({ message: "Reaction updated successfully", post });
    } catch (error) {
      console.error("Error updating reactions:", error);
      res.status(500).json({ message: "Server error", error: error.message });
    }
  });
  

  

const getReactions = asyncHandler(async(req,res) =>{
      const { postId } = req.params;
      
      try{
         const post = await Post.findById(postId);
         if(!post){
             return res.status(404).json({message:"Post not found"});
         }

         res.status(200).json({reactions:post.reactions});
      } catch(error)
      {
         console.error("Error fetching error" , error);
         res.status(500).json({message: " Server error " , error})
      }
}
     );

     




module.exports = { createcomment ,updatecomment ,deletecomment,getcomments ,updateReaction ,getReactions};