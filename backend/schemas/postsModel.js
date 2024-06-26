
// const mongoose = require("mongoose");
// const { ObjectId } = mongoose.Schema.Types;

// const postsModel = new mongoose.Schema(
// 	{
// 		Title: {
// 			type: String,
// 			required: true,
// 		},
//         //caption
// 		Body: {
// 			type: String,
// 			required: true,
// 		},
// 		Photo: {
// 			type: Buffer,
// 			default: "no photo",
// 		},
// 		PhotoType: {
// 			type: String,
// 		},
//         //who posted the photo 
// 		PostedBy: {
// 			type: String,
// 			// ref: "User",
// 		},
// 		Likes: [{ type: ObjectId, ref: "User" }],
// 		Comments: [
// 			{
// 				Text: String,
// 				PostedBy: {
// 					type: ObjectId,
// 					ref: "User",
// 				},
// 			},
// 		],
// 		reactions: {
// 			type: Map,
// 			of: [String], // Each reaction type maps to an array of user IDs
// 			default: {}
// 		}
// 	},
	

// 	{ timestamps: true }
// );

// module.exports = mongoose.model("Post", postsModel);
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const postsModel = new mongoose.Schema(
  {
    Title: {
      type: String,
      required: true,
    },
    Body: {
      type: String,
      required: true,
    },
    Photo: {
      type: Buffer,
      default: "no photo",
    },
    PhotoType: {
      type: String,
    },
    PostedBy: {
      type: String,
    },
    Likes: [{ type: ObjectId, ref: "User" }],
    Comments: [
      {
        type: ObjectId,
        ref: "Comment",
      },
    ],
    reactions: {
      type: Map,
      of: [String], // Each reaction type maps to an array of user IDs
      default: {}
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postsModel);
