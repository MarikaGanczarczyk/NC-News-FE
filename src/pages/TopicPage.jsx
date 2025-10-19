import React, { useEffect, useState } from "react";
import { getArticlesByTopicSlug } from "../../api";
import { useParams } from "react-router-dom";
import ArticleCard from "../Components/articles/ArticleCard";
import './TopicPage.css'

function TopicPage() {
    const {slug} = useParams()
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getArticlesByTopicSlug(slug)
      .then((articles) => {
        setArticles(articles);
        setLoading(false)
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [slug]);

   function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  if (loading) return <p className="loading">Loading..</p>;
  return (
    <section >
      <div className="article-container">
        <h1 className="articles-header-title">{capitalizeFirstLetter(slug)}</h1>
    <ul className="article-list">
      {articles.map((article) => (
        <li key={article.article_id}>
         <ArticleCard article={article}/>
        </li>
      ))}
    </ul>
    </div>
    </section>
  );
}

export default TopicPage;
