import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticlesByID } from "../../api";

import CommentsList from "../Components/comments/CommentsList";
import Votes from "../Components/comments/Votes";

function SingleArticle(newComment, setNewComment, votes) {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHaserror] = useState(false);
  const { article_id } = useParams();
  const [articleById, setArticleById] = useState({});
 

  useEffect(() => {
    setIsLoading(true);
    setHaserror(false);
    getArticlesByID(article_id)
      .then((article) => {
        setArticleById(article);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);

        setHaserror(true);
        setIsLoading(false);
      });
  }, [article_id]);

  const timestamp = articleById.created_at;
  const date = new Date(timestamp);
  const formatedDate = date.toLocaleDateString();

  if (hasError) return <p>Something went wrong.</p>;
  return (
    <>
      <React.Fragment>
        {isLoading ? (
          <p className="loading ">Loading...</p>
        ) : (
          <section className="article-container" >
             <h1 className="single-article-title">{articleById.title}</h1>
            <div className="single-article">
            <div className="article-header">
           
            <article className="single-article-container">
  
  <div className="article-meta">
    <p className="article-card-author">By {articleById.author}</p>
    <span className="meta-separator">•</span>
    <p className="article-date">{formatedDate}</p>
  </div>

  <img
    className="single-article-card-img"
    src={articleById.article_img_url}
    alt={articleById.title}
  />

  <div className="text-box">
    <p className="text-body">{articleById.body}</p>
  </div>
</article>
           
           
            <Votes votes={votes} article_id={article_id}/>
          </div>
          </div>
            <div className="single-article">
              
             <CommentsList article-id={article_id} newComment={newComment} setNewComment={setNewComment} articleById={articleById.author}/>
            </div>
           
              
          </section>
          
        )}
     
      </React.Fragment>
    </>
  );
}

export default SingleArticle;
