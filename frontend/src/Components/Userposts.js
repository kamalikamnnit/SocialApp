



// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import NavbarDash from './NavbarDash';
// import { useToast } from "@chakra-ui/react";
// function UserPosts() {
//   const [userPosts, setUserPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const userInfo = JSON.parse(localStorage.getItem("userInfo"));
//   const [postEmails, setPostEmails] = useState({});
//   const toast= useToast();
//   useEffect(() => {
//     const fetchUserPosts = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/getUserPosts/${userInfo._id}`);

//         setUserPosts(response.data || []);
//         setLoading(false);
//       } catch (err) {
//         setError(err.message);
//         setLoading(false);
//       }
//     };

//     fetchUserPosts();
//   }, [userInfo._id]);

//   const handleDeletePost = async (postId) => {
//     try {
//       await axios.delete(`http://localhost:5000/posts/${postId}`); // DELETE request to the backend
//       setUserPosts(userPosts.filter((post) => post._id !== postId)); // Update state to remove the deleted post

//       toast({
//         title: "Post deleted successfully",
//         status: "success",
//         duration: 3000,
//         isClosable: true,
//       });
//     } catch (error) {
//       console.error("Error deleting post:", error);
//       toast({
//         title: "Error deleting post",
//         description: error.response?.data?.message || "An error occurred while deleting the post",
//         status: "error",
//         duration: 3000,
//         isClosable: true,
//       });
//     }
//   };

//   return (
//     <>
//       <NavbarDash />
//       {loading && <p>Loading...</p>} {/* Display a loading message */}
//       {error && <p>Error: {error}</p>} {/* Display an error message */}
//       {!loading && !error && ( /* Ensure it's not loading and no error */
//         userPosts.length > 0 ? (
//           userPosts.map((post) => (
//             <div className="container mx-auto px-20" key={post._id}>
//               <div className="p-3 px-6 min-h-48 flex justify-center items-center">
//                 <div className="rounded-md shadow-md sm:w-96 bg-coolGray-900 text-coolGray-100">
//                   <div className="flex items-center justify-between p-3">
//                     <div className="flex items-center space-x-2">
//                       <img
//                         src={userInfo.post}
//                         alt=""
//                         className="object-cover object-center w-8 h-8 rounded-full shadow-sm bg-coolGray-500 border-coolGray-700"
//                       />
//                       <div className="-space-y-1">
//                         <h2 className="text-sm font-semibold leading-none">
//                           {postEmails[post.PostedBy]}
//                         </h2>
//                       </div>
//                     </div>
//                     <button
//                       className="bg-red-600 text-white px-2 py-1 rounded"
//                       onClick={() => handleDeletePost(post._id)} // Delete post by its ID
//                     >
//                       Delete
//                     </button>
//                   </div>
//                   <div className="p-3">
//                     <img
//                       alt=""
//                       src={`data:${post.PhotoType};base64,${post.Photo}`}
//                     />
//                   </div>
//                   <div className="space-y-3">
//                     <p className="text-sm">
//                       {post.Body}
//                     </p>
//                     <input
//                       type="text"
//                       placeholder="Add a comment..."
//                       className="w-full py-0.5 bg-transparent border-none rounded text-sm text-coolGray-100"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>No posts available.</p> 
//         )
//       )}
//     </>
//   );
// }

// export default UserPosts;
import React, { useState, useEffect } from "react";
import axios from "axios";
import NavbarDash from './NavbarDash';
import { useToast } from "@chakra-ui/react"; // Using Chakra UI for notifications

function UserPosts() {
  const [userPosts, setUserPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const [postEmails, setPostEmails] = useState({});
  const toast = useToast();

  useEffect(() => {
    const fetchUserPosts = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/getUserPosts/${userInfo._id}`);
        setUserPosts(response.data || []);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchUserPosts();
  }, [userInfo._id]);

  const handleDeletePost = async (postId) => {
    try {
      await axios.delete(`http://localhost:5000/deleteUserPost/${postId}`); // DELETE request to the backend
      setUserPosts(userPosts.filter((post) => post._id !== postId)); // Update state to remove the deleted post

      toast({
        title: "Post deleted successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.error("Error deleting post:", error);
      toast({
        title: "Error deleting post",
        description: error.response?.data?.message || "An error occurred while deleting the post",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <NavbarDash />
      {loading && <p>Loading...</p>} {/* Display a loading message */}
      {error && <p>Error: {error}</p>} {/* Display an error message */}
      {!loading && !error && ( /* Ensure it's not loading and no error */
        userPosts.length > 0 ? (
          userPosts.map((post) => (
            <div className="container mx-auto px-20" key={post._id}>
              <div className="p-3 px-6 min-h-48 flex justify-center items-center">
                <div className="rounded-md shadow-md sm:w-96 bg-coolGray-900 text-coolGray-100">
                  <div className="flex items-center justify-between p-3">
                    <div className="flex items-center space-x-2">
                      <img
                        src={userInfo.post}
                        alt=""
                        className="object-cover object-center w-8 h-8 rounded-full shadow-sm bg-coolGray-500 border-coolGray-700"
                      />
                      <div className="-space-y-1">
                        <h2 className="text-sm font-semibold leading-none">
                          {postEmails[post.PostedBy]}
                        </h2>
                      </div>
                    </div>
                    {/* Add a delete button */}
                    <button
                      className="bg-red-600 text-white px-2 py-1 rounded"
                      onClick={() => handleDeletePost(post._id)} // Delete post by its ID
                    >
                      Delete
                    </button>
                  </div>
                  <div className="p-3">
                    <img
                      alt=""
                      src={`data:${post.PhotoType};base64,${post.Photo}`}
                    />
                  </div>
                  <div className="space-y-3">
                    <p className="text-sm">
                      {post.Body}
                    </p>
                    <input
                      type="text"
                      placeholder="Add a comment..."
                      className="w-full py-0.5 bg-transparent border-none rounded text-sm text-coolGray-100"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No posts available.</p>
        )
      )}
    </>
  );
}

export default UserPosts;
