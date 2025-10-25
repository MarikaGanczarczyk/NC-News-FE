import React, { useEffect, useState } from "react";
import { AiFillDislike, AiFillLike } from "react-icons/ai";

import "./Comments.css";
import { updateArticlesVotes } from "../../../api";

const Votes = ({ votes, article_id }) => {
  const [likesCount, setLikesCount] = useState(votes ?? 0);

  const handleVote = async (voteType) => {
    const increment = voteType === "like" ? 1 : -1;
    const newCount = likesCount + increment;

    setLikesCount((prevCount) => prevCount + increment);
    setLikesCount(newCount);
    try {
      await updateArticlesVotes(article_id, increment);
    } catch (error) {
      console.error("Error updating votes:", error);
      setLikesCount((prevCount) => prevCount - increment);
    }
  };

  return (
    <>
      <div className="likes-container">
        <div className="button-group">
          <button className="like-button" onClick={() => handleVote("like")}>
            Like <AiFillLike />
          </button>
          <button
            className="dislike-button"
            onClick={() => handleVote("dislike")}
          >
            Dislike <AiFillDislike />
          </button>
        </div>
        <p className="likes-count">Total likes: {likesCount}</p>
      </div>
    </>
  );
};

export default Votes;
