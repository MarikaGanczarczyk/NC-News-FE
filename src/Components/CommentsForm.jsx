import React, { useState } from "react";

function CommentsForm() {
  const [newComment, setNewComment] = useState("");
  const [name, setName] = useState("");
const [comments, setComments] = useState([])

  const handleSubmit = (event) => {
   event.preventDefault()
   setComments((prevComments)=>[...prevComments, {name, comment: newComment}])
   setNewComment("")
   setName("")
  };

//   const onClickHandler = ()=>{
//     setComments((newComment) => [...comments, newComment] )
//   }

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
