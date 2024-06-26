// src/components/FetchNews.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = "1d3a0eefa97b499d8fbc4ee93eeb40b7";
const url = "https://newsapi.org/v2/everything?q=";

const FetchNews = ({ steps }) => {
  const [articles, setArticles] = useState([]);
  const userQuery = steps['user-input'].value;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get(`${url}${userQuery}&apiKey=${API_KEY}`);
        setArticles(res.data.articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };
    fetchNews();
  }, [userQuery]);

  return (
    <div>
      <p>You said: {userQuery}. Let me fetch news updates for you.</p>
      {articles.length > 0 ? (
        articles.map((article, index) => (
          <div key={index}>
            <h4>{article.title}</h4>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
          </div>
        ))
      ) : (
        <p>No news found for "{userQuery}".</p>
      )}
    </div>
  );
};

export default FetchNews;
