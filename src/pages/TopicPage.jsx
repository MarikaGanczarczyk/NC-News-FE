import React, { useEffect, useState } from "react";
import { getArticlesByTopicSlug } from "../../api";
import { useParams } from "react-router-dom";
import ArticleCard from "../Components/articles/ArticleCard";

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
  if (loading) return <p>Loading..</p>;
  return (
    <section >
    <ul className="article-list">
      {articles.map((article) => (
        <li key={article.article_id}>
         <ArticleCard article={article}/>
        </li>
      ))}
    </ul>
    </section>
  );
}

export default TopicPage;
