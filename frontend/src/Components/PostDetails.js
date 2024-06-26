import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { CircularProgress, Alert, AlertIcon } from '@chakra-ui/react';

const PostDetails = () => {
  const { id } = useParams(); // Get the post ID from the route parameters
  const [post, setPost] = useState(null); // State to hold the post data
  const [loading, setLoading] = useState(true); // Loading indicator
  const [error, setError] = useState(null); // Error handling

  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/getpostdetails/${id}`);
        setPost(response.data); // Set the fetched post data
        setLoading(false); // Set loading to false
      } catch (error) {
        setError('Error fetching post details'); // Set the error message
        setLoading(false); // Set loading to false
      }
    };

    fetchPostDetails(); // Fetch the post details when the component mounts
  }, [id]); // Dependency array, fetches data when the 'id' changes

  if (loading) {
    return <CircularProgress isIndeterminate color="teal.500" />; // Show loading indicator
  }

  if (error) {
    return (
      <Alert status="error">
        <AlertIcon />
        {error}
      </Alert>
    ); // Show error alert if there's an error
  }

  return (
    <div className="post-details">
      <h2>{post.Title}</h2> {/* Display the post title */}
      <p>{post.Body}</p> {/* Display the post body */}
      <p>Posted by: {post.PostedBy.name}</p> {/* Display who posted it */}
      {post.Photo ? ( // If there's a photo, display it
        <img
          src={`data:${post.PhotoType};base64,${post.Photo}`}
          alt="Post"
          className="post-photo"
        />
      ) : null}
    </div>
  );
};

export default PostDetails;
