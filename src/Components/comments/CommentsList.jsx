import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getCommentsByArticleId } from "../../../api";
import CommentCard from "./CommentCard";
import CommentsForm from "./CommentsForm";
import './Comments.css'

const CommentsList = ({articleId}) => {
  const { article_id } = useParams();

  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    getCommentsByArticleId(article_id, )
      .then((comments) => {
        setComments(comments);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [article_id, isDeleting]);

  const handleAddComments = (newComment) => {
    setComments((prevComments) => [newComment, ...prevComments]);
  };
  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1 className="comment-header-title">Comments</h1>

      <ul className="comment-list">
        <CommentsForm
          articleId={article_id}
          onCommentAdded={handleAddComments}
        />
        {comments.map((comment, index) => (
          <CommentCard
            key={index}
            comment={comment}
            commentId={comment.comment_id}
            setIsDeleting={setIsDeleting}
          />
        ))}
      </ul>
    </>
  );
};

export default CommentsList;
