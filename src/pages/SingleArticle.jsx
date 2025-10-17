import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticlesByID } from "../../api";

import CommentsList from "../Components/comments/CommentsList";
import Votes from "../Components/comments/Votes";

function SingleArticle(newComment, setNewComment) {
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
           
             <img
              className="single-article-card-img"
              src={articleById.article_img_url}
              alt={articleById.title}
            />

            <p className="article-card-author">Author: {articleById.author}</p>
           
            <p className="article-card-topic">Topic: {articleById.topic}</p>
              <div className="text-box">
              <p className="text-body">{articleById.body}</p>
            </div>
            <p>Date: {formatedDate}</p>
           
           
            <Votes />
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
