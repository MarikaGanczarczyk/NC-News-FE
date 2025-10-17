import React from "react";
import { useNavigate } from "react-router-dom";
import './Articles.css'

function ArticleCard({ article }) {
  const navigate = useNavigate();

  return (
    <>
      <section
        className="article-card"
        onClick={() => navigate(`/articles/${article.article_id}`)}
      >
        <img
          className="article-card-img"
          src={article.article_img_url}
          alt={article.title}
        />
    
        <h1 className="article-card-title">{article.title}</h1>
     <div className="read-button-container">
    <div>
        <p className="article-card-topic">{article.topic}</p>
        <p className="article-card-author">{article.author}</p>
        </div>
          <button
            className="read-button"
            onClick={() => navigate(`/articles/${article.article_id}`)}
          >
            Read
          </button>
        </div>
      </section>
    </>
  );
}

export default ArticleCard;
