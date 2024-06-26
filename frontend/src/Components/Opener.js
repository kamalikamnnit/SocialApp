// src/Components/Chatbot.js
import React, { useState } from 'react';
import img1 from "../images/news.jpg"
import "../Chatbot.css"
import { useNavigate } from 'react-router-dom';

const Opener = () => {
  const navigate = useNavigate();
  
  return (
    <div className="chatbot-container">
      <button className="chatbot-toggle" onClick={() => navigate('/newsbot')}>
        <img src={img1} alt="Chatbot" />
      </button>
    </div>
  );
};

export default Opener;
