import React, {  useState } from "react";
import { AiFillDislike, AiFillLike } from "react-icons/ai";

import './Comments.css'


const Votes = ({votes}) => {
  const [likesCount, setLikesCount] = useState(votes ?? 0);
  



  return (
    <>
     <div className="likes-container">
  <div className="button-group">
    <button className="like-button" onClick={() => setLikesCount(likesCount + 1)}>
      Like <AiFillLike />
    </button>
    <button className="dislike-button" onClick={() => setLikesCount(likesCount - 1)}>
      Dislike <AiFillDislike />
    </button>
  </div>
  <p className="likes-count">Total likes: {likesCount}</p>
</div>
    </>
  );
};

export default Votes;
