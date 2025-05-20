import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticlesID } from "../../api";

function SingleArticle() {
  const {article_id} = useParams()
  const [articleById, setArticleById] = useState({});

  useEffect(() => {
    getArticlesID(article_id)
      .then((article) => {
        setArticleById(article);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  return (
    <>
      <section className="single-article">
        <h1 className="single-article-card-title">{articleById.title}</h1>
        <img
          className="article-card-img"
          src={articleById.article_img_url}
          alt={articleById.title}
        />
        <p className="article-card-author">{articleById.author}</p>
        <p className="article-card-topic">{articleById.topic}</p>
      </section>
    </>
  );
}

export default SingleArticle;
