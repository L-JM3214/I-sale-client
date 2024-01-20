import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; 
import '../App.css';

const LatestNewsSection = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Fetch articles from your backend API
    axios.get('your_backend_api/articles')
      .then(response => {
        setArticles(response.data);
      })
      .catch(error => {
        console.error('Error fetching articles:', error);
      });
  }, []);

  return (
    <section className="section-news section-t8">
      <div className="container">
        {articles.map(article => (
          <div key={article.id} className="card-box-b card-shadow news-box">
            <h2>{article.title}</h2>
            <p>{article.content}</p>
            <Link to={`/articles/${article.id}`}>Read more</Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestNewsSection;
