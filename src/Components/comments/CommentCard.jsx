import React, { useState } from "react";
import Votes from "./Votes";
import { deleteComment } from "../../../api";
import './Comments.css'

const CommentCard = ({ comment, commentId, setIsDeleting}) => {
  const [isLoading, setIsLoading] = useState(false)
  
  const timestamp = comment.created_at;
  const date = new Date(timestamp);
  const formatedDate = date.toLocaleDateString();

  const handleClick = () => {
    setIsDeleting(true)
    setIsLoading(true)
    deleteComment(commentId).then(()=>{

      setIsDeleting(false)
      setIsLoading(false)
      alert("Success ! Your comment has been deleted ")
    });

  };
if(isLoading){
  return <p>Your comment is deleting..</p>
}

  return (
    <>
      <section className="comment-display-card">
  <p className="comment-card-author">{comment.author}</p>
  <p className="comment-card-topic">{comment.body}</p>
  <p className="comment-card-date">{formatedDate}</p>
  <button className="delete-button" onClick={handleClick}>
    Delete
  </button>
  <Votes votes={comment.votes} />
</section>
    </>
  );
};

export default CommentCard;
