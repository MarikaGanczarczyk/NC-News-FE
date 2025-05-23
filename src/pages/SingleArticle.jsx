import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticlesByID } from "../../api";
import CommentCard from "../Components/CommentCard";
import CommentsList from "../Components/CommentsList";
import Votes from "../Components/Votes";

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
          <p>Loading...</p>
        ) : (
          <section className="single-article">
            <div className="article-header">
            <h1 className="single-article-title">{articleById.title}</h1>

            <p className="article-card-author">Author: {articleById.author}</p>
            <p className="article-card-topic">Topic: {articleById.topic}</p>
            <p>Date: {formatedDate}</p>
            <img
              className="article-card-img"
              src={articleById.article_img_url}
              alt={articleById.title}
            />
            <div className="text-box">
              <p className="text-body">{articleById.body}</p>
            </div>
          </div>
            <div>
              <Votes />
            
            </div>
            <CommentsList article-id={article_id} newComment={newComment} setNewComment={setNewComment}/>
              
          </section>
          
        )}
     
      </React.Fragment>
    </>
  );
}

export default SingleArticle;
