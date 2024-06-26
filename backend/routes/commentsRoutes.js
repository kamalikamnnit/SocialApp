const express = require("express");
const router = express.Router();

const { createcomment ,updatecomment ,deletecomment,getcomments ,updateReaction , getReactions} = require("../controllers/commentController");

router.post("/createcomment", createcomment);
router.post("/deletecomment/:id" , deletecomment);
router.post("/updatereaction" , updateReaction); 
router.get("/posts/:id/comments" , getcomments);
router.put("/updatecomment/:id" , updatecomment);
router.get("/:postId/reactions" ,getReactions);
module.exports = router;