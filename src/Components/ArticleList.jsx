import React, { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import { getArticles } from "../../api";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState("");
  const [order, setOrder] = useState("asc");

  useEffect(() => {
    setIsLoading(true);
    getArticles({ sortBy: sortBy || undefined, order })
      .then((fetchedArticles) => {
        setArticles(fetchedArticles);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [sortBy, order]);

  if (isLoading) {
    return <p className="loading">Loading...</p>;
  }

  return (
    <>
    <div className="article-container">
      <h1 className="articles-header-title">Articles</h1>

      <div className="sorting-controls">
        <label>Sort by: </label>
        <select  value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="date">Date</option>
          <option value="likes">Likes</option>
          <option value="comment_count">Comments</option>
        </select>
        <label>Order: </label>
        <select
          value={order}
          onChange={(e) => setOrder(e.target.value)}
        
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>

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
