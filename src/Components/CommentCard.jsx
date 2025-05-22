import React from "react";
import Votes from "./Votes";

const CommentCard = ({ comment, }) => {
  const timestamp = comment.created_at;
  const date = new Date(timestamp);
  const formatedDate = date.toLocaleDateString();

  return (
    <>
      <section className="comment-card">
        <p className="comment-card-author">{comment.author}</p>
        <p className="comment-card-topic">{comment.body}</p>
        <p className="comment-card-date">{formatedDate}</p>
        <Votes votes={comment.votes}/>
      </section>
    </>
  );
};

export default CommentCard;
