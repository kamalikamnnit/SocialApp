
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

// Function to convert buffer array to base64 string
const arrayBufferToBase64 = (buffer) => {
  let binary = '';
  let bytes = new Uint8Array(buffer);
  let len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
};

const Utility = () => {
  const [posts, setPosts] = useState([]);
  const [postEmails, setPostEmails] = useState({});
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };
const navigate = useNavigate();
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

  useEffect(() => {
    axios.get('http://localhost:5000/showAllPosts', config)
      .then((res) => {
        if (Array.isArray(res.data.posts)) {
          const limitedPosts = res.data.posts.slice(0, 3); // Get only the first three posts
          setPosts(limitedPosts);
          limitedPosts.forEach(post => {
            getName(post.PostedBy);
          });
        } else {
          console.error('Posts data is not an array', res.data.posts);
          setPosts([]); // Handle non-array data appropriately
        }
      }).catch(error => {
        console.log("Error fetching posts:", error);
        setPosts([]); // Handle fetch error appropriately
      });
  }, []);

  useEffect(() => {
    console.log(posts); // Log posts to check data
  }, [posts]);

  if (!Array.isArray(posts) || posts.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <Container className="my-4" id="ourservices">
      <Row>
        {posts.map((item) => {
          const photoBuffer = item.Photo?.data;
          const photoSrc = photoBuffer ? `data:image/jpeg;base64,${arrayBufferToBase64(photoBuffer)}` : 'placeholder-image-url'; // Provide a placeholder URL
          return (
            <Col md={4} key={item._id}>
              <Card className="mx-auto my-4" style={{ width: '100%' }}>
                <Card.Img variant="top" src={photoSrc} className="custom-card" />
                <Card.Body>
                  <Card.Title>{postEmails[item.PostedBy]}</Card.Title>
                  <Card.Text>{item.Body}</Card.Text>
                  <Button variant="primary" onClick={ () => navigate('/login')} style={{ background: "#111" }}>
                    See More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Utility;
