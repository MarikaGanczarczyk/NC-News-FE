import React, { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import { getArticles } from "../../api";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getArticles()
      .then((articles) => {
        setArticles(articles);
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false)
      });
  }, []);


  if(isLoading) {return <p>Loading...</p>}

  return (
    <>
      <h1 className="articles-header-title">Articles</h1>
      <ul className="article-list">
        {articles.map((article) => (
          <li key={article.article_id}><ArticleCard  article={article} /></li>
        ))}
      </ul>
    </>
  );
};

export default ArticleList;
