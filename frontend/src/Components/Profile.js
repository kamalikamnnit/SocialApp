
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Spinner } from "react-bootstrap"; // For loading spinner
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported for Bootstrap classes
import { useToast } from "@chakra-ui/react";

function Profile() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [profileImage, setProfileImage] = useState(null);
  const [userPosts, setUserPosts] = useState([]);
  const [error, setError] = useState(null);
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const [postEmails, setPostEmails] = useState({});
  const toast = useToast();
  // Fetch the user posts upon component mount
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
        console.log(userInfo);
    fetchUserPosts();
  }, [userInfo._id]);

  const handleFollow = async () => {
    try {
      await axios.post("http://localhost:5000/follow");
    } catch (error) {
      console.error("Error following user:", error);
    }
  };

  const updateUserProfile = async (userDataToUpdate) => {
    try {
      await axios.put(`http://localhost:5000/profile/${userInfo._id}`, userDataToUpdate);
      console.log("User profile updated successfully");
    } catch (error) {
      console.error("Error updating user profile:", error);
      throw error;
    }
  };

  const handleAddPhoto = async (event) => {
    const selectedPhoto = event.target.files[0];
    const formData = new FormData();
    formData.append("profileImage", selectedPhoto);

    try {
      const response = await axios.post("http://localhost:5000/upload-profile-image", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      const { imageUrl } = response.data;
      setProfileImage(imageUrl);

      await updateUserProfile({ profileImageUrl: imageUrl });
    } catch (error) {
      console.error("Error uploading profile image:", error);
    }
  };

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

  // const renderFollowButton = () => {
  //   const isFollowing = false; // Placeholder for logic, replace with actual logic

  //   return (
  //     <button
  //       className={`btn ${isFollowing ? "btn-secondary" : "btn-primary"}`}
  //       onClick={isFollowing ? null : handleFollow}
  //       disabled={isFollowing}
  //     >
  //       {isFollowing ? "Following" : "Follow"}
  //     </button>
  //   );
  // };

  const renderPhotos = () => (
    <div className="row g-2">
      {userPosts.length > 0 ? (
          userPosts. map((post) => (
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
                    <div class="-space-y-5">
                        <h2 class="text-sm font-semibold leading-none">{userInfo.email}</h2>
                      </div>
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
                   
                     
                  </div>
                  
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No posts available.</p> 
        )
      }
    </div>
  );

  return (
    <section className="py-5">
      <div className="container">
        <div className="card">
          <div className="card-header d-flex align-items-center" style={{ backgroundColor: "#333", color: "#fff" }}>
            <div className="d-flex flex-row align-items-center">
             
            {profileImage && <img src={userInfo.profileimg} alt="Profile"  
                  className="img-fluid rounded-circle"
                  style={{ width: "100px", height: "100px", objectFit: "cover", border: "2px solid #fff" }}
                />}
               
         
             
              <div className="ms-4">
                <h4>{userInfo.name}</h4>
                <button
                  className="btn btn-outline-light"
                  onClick={() => navigate("/editprofile")}
                >
                  Edit Profile
                </button>
              </div>
            </div>
            {/* <div className="ms-auto">{renderFollowButton()}</div> */}
          </div>
          <div className="card-body" style={{ backgroundColor: "#f8f9fa" }}>
            <div className="d-flex justify-content-around text-center py-1">
              <div>
                <p className="mb-1 h5">{userInfo.followers?.length || 0}</p>
                <p className="small text-muted">Followers</p>
              </div>
              <div>
                <p className="mb-1 h5">{userInfo.following?.length || 0}</p>
                <p className="small text-muted">Following</p>
              </div>
              <div>
                <p className="mb-1 h5">{userPosts ?userPosts.length : 0}</p>
                <p className="small text-muted">Posts</p>
              </div>
            </div>
            {loading ? (
              <div className="text-center mt-4">
                <Spinner animation="border" />
                <p>Loading...</p>
              </div>
            ) : error ? (
              <div className="text-center text-danger mt-4">
                <p>Error: {error}</p>
              </div>
            ) : (
              renderPhotos()
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
