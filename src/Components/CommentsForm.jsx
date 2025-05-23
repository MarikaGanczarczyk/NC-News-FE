import React, { useState } from "react";
import { postComment } from "../../api";


function CommentsForm({ articleId, onCommentAdded }) {
  const [newComment, setNewComment] = useState("");
  const [name, setName] = useState("");
  const [comments, setComments] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    postComment(articleId, name, newComment).then((response) => {
      alert("Thanks! Your comment has been posted");
      if (onCommentAdded) {
        onCommentAdded(response.data.comment);
      }

      setNewComment("");
      setName("");
    })
    .catch((err)=>{
      alert("Something went wrong while posting your comment.")
      console.log(err);
      
    })
  };

  return (
    <>
      <section className="comment-card">
        <form onSubmit={handleSubmit}>
          <label className="name-input">
            <h4>Name</h4>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </label>
          <label className="comment-input">
            <h4>Add comment</h4>

            <textarea
              className="textarea-box"
              value={newComment}
              onChange={(event) => setNewComment(event.target.value)}
            />
          </label>
          <button
            className="comment-button"
            type="submit"
            disabled={name.length === 0 && newComment.length === 0}
          >
            Submit
          </button>
        </form>
      </section>
    </>
  );
}

export default CommentsForm;
