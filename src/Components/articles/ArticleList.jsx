import React, { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard"; 
import { getArticles } from "../../../api";
import './Articles.css'


const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    setIsLoading(true);
    getArticles()
      .then((response) => {
        setArticles(response);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p className="loading">Loading...</p>;
  }

  return (
    <>
    <div className="article-container">
      <h1 className="articles-header-title">Articles</h1>
      <ul className="article-list">
        {articles.map((article) => (
          <li key={article.article_id}>
            <ArticleCard article={article} />
          </li>
        ))}
      </ul>
      </div>
    </>
  );
};

export default ArticleList;
