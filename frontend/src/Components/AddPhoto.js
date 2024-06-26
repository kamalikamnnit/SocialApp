import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Addphoto() {
  const navigate = useNavigate();
  const [photoData, setPhotoData] = useState({
    description: "",
    imageUrl: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPhotoData({
      ...photoData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send photo data to the server
      const response = await axios.post("http://localhost:5000/photos", photoData);
      console.log("Photo added successfully:", response.data);
      // Redirect to the profile page after adding the photo
      navigate("/profile");
    } catch (error) {
      console.error("Error adding photo:", error);
    }
  };

  return (
    <div className="container">
      <h2>Add Photo</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <input type="text" className="form-control" id="description" name="description" value={photoData.description} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="imageUrl" className="form-label">Image URL</label>
          <input type="text" className="form-control" id="imageUrl" name="imageUrl" value={photoData.imageUrl} onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default Addphoto;
