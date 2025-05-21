import React from "react";

const CommentCard = ({ comment }) => {
  const timestamp = comment.created_at;
  const date = new Date(timestamp);
  const formatedDate = date.toLocaleDateString();

  return (
    <>
      <section className="comment-card">
        <p className="comment-card-author">{comment.author}</p>
        <p className="comment-card-topic">{comment.body}</p>
        <p className="comment-card-date">{formatedDate}</p>
      </section>
    </>
  );
};

export default CommentCard;
