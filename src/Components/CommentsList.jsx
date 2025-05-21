import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


import { getCommentsByArticleId } from "../../api";
import CommentCard from "./CommentCard";

const CommentsList = () => {
    const { article_id } = useParams();

  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCommentsByArticleId(article_id)
      .then((comments) => {
        setComments(comments);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [article_id]);




  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1 className="comment-header-title">Comments</h1>
      <ul className="comment-list">
        {comments.map((comment, index) => (
          
            <CommentCard key={index} comment={comment} />
          
        ))}
      </ul>
    </>
  );
};

export default CommentsList;
