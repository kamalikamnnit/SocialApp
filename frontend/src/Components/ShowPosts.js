

// // import React, { useState, useEffect } from "react";
// // import axios from "axios";
// // import NavbarDash from './NavbarDash';
// // import { useToast } from "@chakra-ui/react";

// // function ShowPosts() {
// //   const toast = useToast();
// //   const userInfo = JSON.parse(localStorage.getItem("userInfo"));
// //   const [userPosts, setUserPosts] = useState([]);
// //   const [data, setData] = useState([]);
// //   const [postEmails, setPostEmails] = useState({});
// //   const [comment, setComment] = useState("");
// //   const [comments, setComments] = useState({});
// //   const [updatedComment, setUpdatedComment] = useState("");
// //   const config = {
// //     headers: {
// //       "Content-type": "application/json",
// //     },
// //   };

// //   const getName = (id) => {
// //     axios.get('http://localhost:5000/getName', {
// //       params: { id: id },
// //       ...config
// //     }).then((res) => {
// //       setPostEmails(prevState => ({
// //         ...prevState,
// //         [id]: res.data
// //       }));
// //     }).catch(error => {
// //       console.log("Error fetching email:", error);
// //     });
// //   };

// //   const getComments = (postId) => {
// //     axios.get(`http://localhost:5000/posts/${postId}/comments`, config)
// //       .then((res) => {
// //         setComments(prevState => ({
// //           ...prevState,
// //           [postId]: res.data
// //         }));
// //       }).catch(error => {
// //         console.log("Error fetching comments:", error);
// //       });
// //   };

// //   useEffect(() => {
// //     axios.get('http://localhost:5000/showAllPosts', config)
// //       .then((res) => {
// //         setData(res.data.posts);
// //         res.data.posts.forEach(post => {
// //           getName(post.PostedBy);
// //           getComments(post._id);
// //         });
// //       }).catch(error => {
// //         console.log("Error fetching posts:", error);
// //       });
// //   }, []);

// //   const createComment = async (e, postId) => {
// //     e.preventDefault();
// //     try {
// //       const commentData = {
// //         comment: comment,
// //         author: {
// //           name: userInfo.name,
// //           id: userInfo._id
// //         },
// //         postId: postId,
// //         userId: userInfo._id
// //       };
// //       const res = await axios.post("http://localhost:5000/createcomment", commentData, {
// //         withCredentials: true,
// //         headers: {
// //           "Content-Type": "application/json"
// //         }
// //       });
// //       if (res.status === 200) {
// //         toast({
// //           title: "Comment added",
// //           status: "success",
// //           duration: 5000,
// //           isClosable: true,
// //           position: "bottom",
// //         });
// //         getComments(postId);
// //         setComment("");
// //       }
// //     } catch (error) {
// //       console.error("Error adding comment:", error);
// //       toast({
// //         title: "Error",
// //         description: "Failed to add comment",
// //         status: "error",
// //         duration: 5000,
// //         isClosable: true,
// //         position: "bottom",
// //       });
// //     }
// //   };

// //   const deleteComment = async (commentId, postId) => {
// //     try {
// //       const res = await axios.post(
// //         `http://localhost:5000/deletecomment/${commentId}`,
// //         { userId: userInfo._id }, 
// //         {
// //           withCredentials: true,
// //           headers: {
// //             'Content-Type': 'application/json',
// //           },
// //         }
// //       );

// //       if (res.status === 200) {
// //         toast({
// //           title: 'Comment deleted',
// //           status: 'success',
// //           duration: 5000,
// //           isClosable: true,
// //           position: 'bottom',
// //         });
// //         getComments(postId);
// //       }
// //     } catch (error) {
// //       console.error('Error deleting comment:', error.message);
// //       toast({
// //         title: 'Error',
// //         description: 'Failed to delete comment',
// //         status: 'error',
// //         duration: 5000,
// //         isClosable: true,
// //         position: 'bottom',
// //       });
// //     }
// //   };

// //   const updateComment = async (commentId, updatedComment) => {
// //     try {
// //       const res = await axios.put(
// //         `http://localhost:5000/updatecomment/${commentId}`,
// //         updatedComment,
// //         {
// //           withCredentials: true,
// //           headers: {
// //             'Content-Type': 'application/json',
// //           },
// //         }
// //       );
// //       if (res.status === 200) {
// //         toast({
// //           title: 'Comment updated',
// //           status: 'success',
// //           duration: 5000,
// //           isClosable: true,
// //           position: 'bottom',
// //         });
// //       }  
// //     } catch(error) {
// //       console.error('Error updating comments:' ,error.message);
// //       toast({
// //         title:'error',
// //         description:"failed to update reaction",
// //         status:"error",
// //         duration:'5000',
// //         isClosable:'true',
// //         position:'bottom'
// //       });
// //     }
// //   };

// //   const toggleReaction = async (postId, reaction) => {
// //     try {
// //       const res = await axios.post("http://localhost:5000/updatereaction", {
// //         postId: postId,
// //         userId: userInfo._id,
// //         reaction: reaction
// //       }, {
// //         withCredentials: true,
// //         headers: {
// //           "Content-Type": "application/json"
// //         }
// //       });

// //       if (res.status === 200) {
// //         const updatedPost = res.data.post;
// //         setData(prevData =>
// //           prevData.map(post => post._id === updatedPost._id ? updatedPost : post)
// //         );
// //         toast({
// //           title: "Reaction updated",
// //           status: "success",
// //           duration: 5000,
// //           isClosable: true,
// //           position: "bottom",
// //         });
// //       }
// //     } catch (error) {
// //       console.error("Error updating reaction:", error);
// //       toast({
// //         title: "Error",
// //         description: "Failed to update reaction",
// //         status: "error",
// //         duration: 5000,
// //         isClosable: true,
// //         position: "bottom",
// //       });
// //     }
// //   };

// //   return (
    
// //     <>
// //       <NavbarDash />
// //       {data.map((item) => (
// //         <div className="container mx-auto px-20" key={item._id}>
// //           <div className="p-3 px-6 min-h-48 flex justify-center items-center">
// //             <div className="rounded-md shadow-md sm:w-full bg-coolGray-900 text-coolGray-100">
// //               <div className="flex items-center justify-between p-3">
// //                 <div className="flex items-center space-x-2">
// //                   <img src={userInfo.post} alt="" className="object-cover object-center w-8 h-8 rounded-full shadow-sm bg-coolGray-500 border-coolGray-700" />
// //                   <div className="-space-y-1">
// //                     <h2 className="text-sm font-semibold leading-none">{postEmails[item.PostedBy]}</h2>
// //                   </div>
// //                 </div>
// //               </div>
// //               <div className="p-3">
// //                 <img alt="" src={`data:${item.PhotoType};base64,${item.Photo}`} />
// //               </div>
// //               <div className="space-y-3">
// //                 <p className="text-sm">
// //                   <span className="text-base font-semibold"></span> {item.Body}
// //                 </p>
// //                 <div className="w-full flex flex-col mt-4 md:flex-row">
// //                   <input
// //                     value={comment}
// //                     onChange={(e) => setComment(e.target.value)}
// //                     type="text"
// //                     placeholder="Write a comment"
// //                     className="md:w-[80%] outline-none py-2 px-4 mt-4 md:mt-0"
// //                   />
// //                   <button
// //                     onClick={(e) => createComment(e, item._id)}
// //                     className="bg-black text-sm text-white px-2 py-2 md:w-[20%] mt-4 md:mt-0"
// //                   >
// //                     Add Comment
// //                   </button>
// //                 </div>
// //                 <div className="mt-4">
// //                   {comments[item._id] && comments[item._id].map((comment) => (
// //                     <div key={comment._id} className="flex items-start justify-between p-2 bg-gray-200 rounded-lg mb-2">
// //                       <div>
// //                         <p className="font-semibold">
// //        {comment.userId === userInfo._id ? 'you' : comment.author}:
// //    {comment.comment}
// //              </p>
             
// //                       </div>
// //                       {comment.userId === userInfo._id && (
// //                         <div className="flex items-center space-x-2">
// //                           <button
// //                             onClick={() => deleteComment(comment._id, item._id)}
// //                             className="text-red-500 font-semibold hover:text-red-700"
// //                           >
// //                             Delete
// //                           </button>
// //                           <input
// //                             type="text"
// //                             value={updatedComment}
// //                             onChange={(e) => setUpdatedComment(e.target.value)}
// //                             className="outline-none py-1 px-2 w-40 bg-gray-100 rounded-md"
// //                           />
// //                           <button
// //                             onClick={() => updateComment(comment._id, { comment: updatedComment })}
// //                             className="bg-blue-500 text-white text-sm px-2 py-1 rounded-md hover:bg-blue-600"
// //                           >
// //                             Update
// //                           </button>
// //                         </div>
// //                       )}
// //                     </div>
// //                   ))}
// //                 </div>
// //                 <div className="flex flex-wrap items-center pt-3 pb-1">
// //                   <button
// //                     onClick={() => toggleReaction(item._id, '👍')}
// //                     className="bg-blue-500 text-sm text-white px-2 py-2"
// //                   >
// //                     👍 {item.reactions && item.reactions['👍'] ? item.reactions['👍'].length : 0}
// //                   </button>
// //                   <button
// //                     onClick={() => toggleReaction(item._id, '❤️')}
// //                     className="bg-red-500 text-sm text-white px-2 py-2"
// //                   >
// //                     ❤️ {item.reactions && item.reactions['❤️'] ? item.reactions['❤️'].length : 0}
// //                   </button>
// //                   <button
// //                     onClick={() => toggleReaction(item._id, '😮')}
// //                     className="bg-yellow-500 text-sm text-white px-2 py-2"
// //                   >
// //                     😮 {item.reactions && item.reactions['😮'] ? item.reactions['😮'].length : 0}
// //                   </button>
// //                   <button
// //                     onClick={() => toggleReaction(item._id, '😢')}
// //                     className="bg-blue-500 text-sm text-white px-2 py-2"
// //                   >
// //                     😢 {item.reactions && item.reactions['😢'] ? item.reactions['😢'].length : 0}
// //                   </button>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       ))}
// //     </>
// //   );
// // }

// // export default ShowPosts;


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import NavbarDash from './NavbarDash';
// import { useToast } from "@chakra-ui/react";


// const arrayBufferToBase64 = (buffer) => {
//   let binary = '';
//   let bytes = new Uint8Array(buffer);
//   let len = bytes.byteLength;
//   for (let i = 0; i < len; i++) {
//     binary += String.fromCharCode(bytes[i]);
//   }
//   return window.btoa(binary);
// };

// function ShowPosts() {
//   const toast = useToast();
//   const userInfo = JSON.parse(localStorage.getItem("userInfo"));
//   const [userPosts, setUserPosts] = useState([]);
//   const [data, setData] = useState([]);
//   const [postEmails, setPostEmails] = useState({});
//   const [comment, setComment] = useState("");
//   const [comments, setComments] = useState({});
//   const [updatedComment, setUpdatedComment] = useState("");
//   const config = {
//     headers: {
//       "Content-type": "application/json",
//     },
//   };

//   const getName = (id) => {
//     axios.get('http://localhost:5000/getName', {
//       params: { id: id },
//       ...config
//     }).then((res) => {
//       setPostEmails(prevState => ({
//         ...prevState,
//         [id]: res.data
//       }));
//     }).catch(error => {
//       console.log("Error fetching email:", error);
//     });
//   };

//   const getComments = (postId) => {
//     axios.get(`http://localhost:5000/posts/${postId}/comments`, config)
//       .then((res) => {
//         setComments(prevState => ({
//           ...prevState,
//           [postId]: res.data
//         }));
//       }).catch(error => {
//         console.log("Error fetching comments:", error);
//       });
//   };

//   useEffect(() => {
//     axios.get('http://localhost:5000/showAllPosts', config)
//       .then((res) => {
//         setData(res.data.posts);
//         res.data.posts.forEach(post => {
//           getName(post.PostedBy);
//           getComments(post._id);
//         });
//       }).catch(error => {
//         console.log("Error fetching posts:", error);
//       });
//   }, []);

//   const createComment = async (e, postId) => {
//     e.preventDefault();
//     try {
//       const commentData = {
//         comment: comment,
//         author: {
//           name: userInfo.name,
//           id: userInfo._id
//         },
//         postId: postId,
//         userId: userInfo._id
//       };
//       const res = await axios.post("http://localhost:5000/createcomment", commentData, {
//         withCredentials: true,
//         headers: {
//           "Content-Type": "application/json"
//         }
//       });
//       if (res.status === 200) {
//         toast({
//           title: "Comment added",
//           status: "success",
//           duration: 5000,
//           isClosable: true,
//           position: "bottom",
//         });
//         getComments(postId);
//         setComment("");
//       }
//     } catch (error) {
//       console.error("Error adding comment:", error);
//       toast({
//         title: "Error",
//         description: "Failed to add comment",
//         status: "error",
//         duration: 5000,
//         isClosable: true,
//         position: "bottom",
//       });
//     }
//   };

//   const deleteComment = async (commentId, postId) => {
//     try {
//       const res = await axios.post(
//         `http://localhost:5000/deletecomment/${commentId}`,
//         { userId: userInfo._id }, 
//         {
//           withCredentials: true,
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         }
//       );

//       if (res.status === 200) {
//         toast({
//           title: 'Comment deleted',
//           status: 'success',
//           duration: 5000,
//           isClosable: true,
//           position: 'bottom',
//         });
//         getComments(postId);
//       }
//     } catch (error) {
//       console.error('Error deleting comment:', error.message);
//       toast({
//         title: 'Error',
//         description: 'Failed to delete comment',
//         status: 'error',
//         duration: 5000,
//         isClosable: true,
//         position: 'bottom',
//       });
//     }
//   };

//   const updateComment = async (commentId, updatedComment) => {
//     try {
//       const res = await axios.put(
//         `http://localhost:5000/updatecomment/${commentId}`,
//         updatedComment,
//         {
//           withCredentials: true,
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         }
        
//       );
//       if (res.status === 200) {
//         toast({
//           title: 'Comment updated',
//           status: 'success',
//           duration: 5000,
//           isClosable: true,
//           position: 'bottom',
//         });
//       }  
//     } catch(error) {
//       console.error('Error updating comments:' ,error.message);
//       toast({
//         title:'error',
//         description:"failed to update reaction",
//         status:"error",
//         duration:'5000',
//         isClosable:'true',
//         position:'bottom'
//       });
//     }
//   };

//   const toggleReaction = async (postId, reaction) => {
//     try {
//       const res = await axios.post("http://localhost:5000/updatereaction", {
//         postId: postId,
//         userId: userInfo._id,
//         reaction: reaction
//       }, {
//         withCredentials: true,
//         headers: {
//           "Content-Type": "application/json"
//         }
//       });

//       if (res.status === 200) {
//         const updatedPost = res.data.post;
//         setData(prevData =>
//           prevData.map(post => post._id === updatedPost._id ? updatedPost : post)
//         );
//         toast({
//           title: "Reaction updated",
//           status: "success",
//           duration: 5000,
//           isClosable: true,
//           position: "bottom",
//         });
//       }
//     } catch (error) {
//       console.error("Error updating reaction:", error);
//       toast({
//         title: "Error",
//         description: "Failed to update reaction",
//         status: "error",
//         duration: 5000,
//         isClosable: true,
//         position: "bottom",
//       });
//     }
//   };

//   return (
    
//     <>
//       <NavbarDash />
//       {data.map((item) => {
//         const photoBuffer = item.Photo?.data;
//           const photoSrc = photoBuffer ? `data:image/jpeg;base64,${arrayBufferToBase64(photoBuffer)}` : 'placeholder-image-url'; // Provide a placeholder URL
//           return (
//         <div className="container mx-auto px-20" key={item._id}>
//           <div className="p-3 px-6 min-h-48 flex justify-center items-center">
//             <div className="rounded-md shadow-md sm:w-full bg-coolGray-900 text-coolGray-100">
//               <div className="flex items-center justify-between p-3">
//                 <div className="flex items-center space-x-2">
//                   <img src="" alt="" className="object-cover object-center w-8 h-8 rounded-full shadow-sm bg-coolGray-500 border-coolGray-700" />
//                   <div className="-space-y-1">
//                     <h2 className="text-sm font-semibold leading-none">{postEmails[item.PostedBy]}</h2>
//                   </div>
//                 </div>
//               </div>
//               <div className="mx-5 my-4"  style={{ width: '40%' }}>
//                 <img alt="" src = {photoSrc} />
//               </div>
//               <div className="space-y-3">
//                 <p className="text-sm">
//                   <span className="text-base font-semibold"></span> {item.Body}
//                 </p>
//                 <div className="w-full flex flex-col mt-4 md:flex-row">
//                   <input
//                     value={comment}
//                     onChange={(e) => setComment(e.target.value)}
//                     type="text"
//                     placeholder="Write a comment"
//                     className="md:w-[80%] outline-none py-2 px-4 mt-4 md:mt-0"
//                   />
//                   <button
//                     onClick={(e) => createComment(e, item._id)}
//                     className="bg-black text-sm text-white px-2 py-2 md:w-[20%] mt-4 md:mt-0"
//                   >
//                     Add Comment
//                   </button>
//                 </div>
//                 <div className="mt-4">
//                   {comments[item._id] && comments[item._id].map((comment) => (
//                     <div key={comment._id} className="flex items-start justify-between p-2 bg-gray-200 rounded-lg mb-2">
//                       <div>
//                         <p className="font-semibold">
//        {comment.userId === userInfo._id ? 'you' : comment.author}:
//    {comment.comment}
//              </p>
             
//                       </div>
//                       {comment.userId === userInfo._id && (
//                         <div className="flex items-center space-x-2">
//                           <button
//                             onClick={() => deleteComment(comment._id, item._id)}
//                             className="text-red-500 font-semibold hover:text-red-700"
//                           >
//                             Delete
//                           </button>
//                           <input
//                             type="text"
//                             value={updatedComment}
//                             onChange={(e) => setUpdatedComment(e.target.value)}
//                             className="outline-none py-1 px-2 w-40 bg-gray-100 rounded-md"
//                           />
//                           <button
//                             onClick={() => {updateComment(comment._id, { comment: updatedComment })
//                             setUpdatedComment("") }}
                            
//                             className="bg-blue-500 text-white text-sm px-2 py-1 rounded-md hover:bg-blue-600"
//                           >
//                             Update
//                           </button>
//                         </div>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//                 <div className="flex flex-wrap items-center pt-3 pb-1">
//                   <button
//                     onClick={() => toggleReaction(item._id, '👍')}
//                     className="bg-blue-500 text-sm text-white px-2 py-2"
//                   >
//                     👍 {item.reactions && item.reactions['👍'] ? item.reactions['👍'].length : 0}
//                   </button>
//                   <button
//                     onClick={() => toggleReaction(item._id, '❤️')}
//                     className="bg-red-500 text-sm text-white px-2 py-2"
//                   >
//                     ❤️ {item.reactions && item.reactions['❤️'] ? item.reactions['❤️'].length : 0}
//                   </button>
//                   <button
//                     onClick={() => toggleReaction(item._id, '😮')}
//                     className="bg-yellow-500 text-sm text-white px-2 py-2"
//                   >
//                     😮 {item.reactions && item.reactions['😮'] ? item.reactions['😮'].length : 0}
//                   </button>
//                   <button
//                     onClick={() => toggleReaction(item._id, '😢')}
//                     className="bg-blue-500 text-sm text-white px-2 py-2"
//                   >
//                     😢 {item.reactions && item.reactions['😢'] ? item.reactions['😢'].length : 0}
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//           )
//       }
//       )}
//     </>
//   );
// }

// export default ShowPosts;




import React, { useState, useEffect } from "react";
import axios from "axios";
import NavbarDash from './NavbarDash';
import { useToast } from "@chakra-ui/react";


const arrayBufferToBase64 = (buffer) => {
  let binary = '';
  let bytes = new Uint8Array(buffer);
  let len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
};

function ShowPosts() {
  const toast = useToast();
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const [userPosts, setUserPosts] = useState([]);
  const [data, setData] = useState([]);
  const [postEmails, setPostEmails] = useState({});
  const [comments, setComments] = useState({});
  const [updatedComments, setUpdatedComments] = useState({});
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  const getName = (id) => {
    axios.get('http://localhost:5000/getName', {
      params: { id: id },
      ...config
    }).then((res) => {
      setPostEmails(prevState => ({
        ...prevState,
        [id]: res.data
      }));
    }).catch(error => {
      console.log("Error fetching email:", error);
    });
  };

  const getComments = (postId) => {
    axios.get(`http://localhost:5000/posts/${postId}/comments`, config)
      .then((res) => {
        setComments(prevState => ({
          ...prevState,
          [postId]: res.data
        }));
        setUpdatedComments(prevState => ({
          ...prevState,
          [postId]: "",
        }));
      }).catch(error => {
        console.log("Error fetching comments:", error);
      });
  };

  useEffect(() => {
    axios.get('http://localhost:5000/showAllPosts', config)
      .then((res) => {
        setData(res.data.posts);
        res.data.posts.forEach(post => {
          getName(post.PostedBy);
          getComments(post._id);
        });
      }).catch(error => {
        console.log("Error fetching posts:", error);
      });
  }, []);

  const createComment = async (e, postId) => {
    e.preventDefault();
    try {
      const commentData = {
        comment: comments[postId],
        author: {
          name: userInfo.name,
          id: userInfo._id
        },
        postId: postId,
        userId: userInfo._id
      };
      const res = await axios.post("http://localhost:5000/createcomment", commentData, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json"
        }
      });
      if (res.status === 200) {
        toast({
          title: "Comment added",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
        getComments(postId);
      }
    } catch (error) {
      console.error("Error adding comment:", error);
      toast({
        title: "Error",
        description: "Failed to add comment",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    }
  };

  const deleteComment = async (commentId, postId) => {
    try {
      const res = await axios.post(
        `http://localhost:5000/deletecomment/${commentId}`,
        { userId: userInfo._id }, 
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (res.status === 200) {
        toast({
          title: 'Comment deleted',
          status: 'success',
          duration: 5000,
          isClosable: true,
          position: 'bottom',
        });
        getComments(postId);
      }
    } catch (error) {
      console.error('Error deleting comment:', error.message);
      toast({
        title: 'Error',
        description: 'Failed to delete comment',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'bottom',
      });
    }
  };

  const updateComment = async (commentId, postId) => {
    try {
      const res = await axios.put(
        `http://localhost:5000/updatecomment/${commentId}`,
        { comment: updatedComments[postId] },
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          },
        }
        
      );
      if (res.status === 200) {
        toast({
          title: 'Comment updated',
          status: 'success',
          duration: 5000,
          isClosable: true,
          position: 'bottom',
        });
      }  
    } catch(error) {
      console.error('Error updating comments:' ,error.message);
      toast({
        title:'error',
        description:"failed to update reaction",
        status:"error",
        duration:'5000',
        isClosable:'true',
        position:'bottom'
      });
    }
  };

  const toggleReaction = async (postId, reaction) => {
    try {
      const res = await axios.post("http://localhost:5000/updatereaction", {
        postId: postId,
        userId: userInfo._id,
        reaction: reaction
      }, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (res.status === 200) {
        const updatedPost = res.data.post;
        setData(prevData =>
          prevData.map(post => post._id === updatedPost._id ? updatedPost : post)
        );
        toast({
          title: "Reaction updated",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
      }
    } catch (error) {
      console.error("Error updating reaction:", error);
      toast({
        title: "Error",
        description: "Failed to update reaction",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    }
  };

  return (
    
    <>
      <NavbarDash />
      {data.map((item) => {
        const photoBuffer = item.Photo?.data;
          const photoSrc = photoBuffer ? `data:image/jpeg;base64,${arrayBufferToBase64(photoBuffer)}` : 'placeholder-image-url'; // Provide a placeholder URL
          return (
        <div className="container mx-auto px-20" key={item._id}>
          <div className="p-3 px-6 min-h-48 flex justify-center items-center">
          <div className="rounded-md shadow-md sm:w-full bg-coolGray-900 text-coolGray-100">
              <div className="flex items-center justify-between p-3">
                <div className="flex items-center space-x-2">
                  <img src="" alt="" className="object-cover object-center w-8 h-8 rounded-full shadow-sm bg-coolGray-500 border-coolGray-700" />
                  <div className="-space-y-1">
                    <h2 className="text-sm font-semibold leading-none">{postEmails[item.PostedBy]}</h2>
                  </div>
                </div>
              </div>
              <div className="mx-5 my-4"  style={{ width: '40%' }}>
                <img alt="" src={photoSrc} />
              </div>
              <div className="space-y-3">
                <p className="text-sm">
                  <span className="text-base font-semibold"></span> {item.Body}
                </p>
                <div className="w-full flex flex-col mt-4 md:flex-row">
                  <input
                    value={comments[item._id] || ""}
                    onChange={(e) => setComments(prevState => ({ ...prevState, [item._id]: e.target.value }))}
                    type="text"
                    placeholder="Write a comment"
                    className="md:w-[80%] outline-none py-2 px-4 mt-4 md:mt-0"
                  />
                  <button
                    onClick={(e) => createComment(e, item._id)}
                    className="bg-black text-sm text-white px-2 py-2 md:w-[20%] mt-4 md:mt-0"
                  >
                    Add Comment
                  </button>
                </div>
                <div className="mt-4">
                {comments[item._id] && Array.isArray(comments[item._id]) && comments[item._id].map((comment) => (
  <div key={comment._id} className="flex items-start justify-between p-2 bg-gray-200 rounded-lg mb-2">
    <div>
      <p className="font-semibold">
        {comment.userId === userInfo._id ? 'you' : comment.author}:
        {comment.comment}
      </p>
    </div>
    {comment.userId === userInfo._id && (
      <div className="flex items-center space-x-2">
        <button
          onClick={() => deleteComment(comment._id, item._id)}
          className="text-red-500 font-semibold hover:text-red-700"
        >
          Delete
        </button>
        <input
          type="text"
          value={updatedComments[item._id] || ""}
          onChange={(e) => setUpdatedComments(prevState => ({ ...prevState, [item._id]: e.target.value }))}
          className="outline-none py-1 px-2 w-40 bg-gray-100 rounded-md"
        />
        
        <button
          onClick={() => {
            updateComment(comment._id, item._id);
            setUpdatedComments(prevState => ({ ...prevState, [item._id]: "" }));
          }}
          className="bg-blue-500 text-white text-sm px-2 py-1 rounded-md hover:bg-blue-600"
        >
          Update
        </button>
      </div>
    )}
  </div>
))}

                </div>
                <div className="flex flex-wrap items-center pt-3 pb-1">
                  <button
                    onClick={() => toggleReaction(item._id, '👍')}
                    className="bg-blue-500 text-sm text-white px-2 py-2"
                  >
                    👍 {item.reactions && item.reactions['👍'] ? item.reactions['👍'].length : 0}
                  </button>
                  <button
                    onClick={() => toggleReaction(item._id, '❤️')}
                    className="bg-red-500 text-sm text-white px-2 py-2"
                  >
                    ❤️ {item.reactions && item.reactions['❤️'] ? item.reactions['❤️'].length : 0}
                  </button>
                  <button
                    onClick={() => toggleReaction(item._id, '😮')}
                    className="bg-yellow-500 text-sm text-white px-2 py-2"
                  >
                    😮 {item.reactions && item.reactions['😮'] ? item.reactions['😮'].length : 0}
                  </button>
                  <button
                    onClick={() => toggleReaction(item._id, '😢')}
                    className="bg-blue-500 text-sm text-white px-2 py-2"
                  >
                    😢 {item.reactions && item.reactions['😢'] ? item.reactions['😢'].length : 0}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
          )
      })}
    </>
  );
}

export default ShowPosts;
