import React, { useEffect, useState } from "react";
import { AiFillDislike, AiFillLike } from "react-icons/ai";

const Votes = () => {
  const [likesCount, setLikesCount] = useState(0);



//   useEffect(()=>{
//     getLikesCount(article_id)
//     .then
//   })
  return (
    <>
      <div>
        <button onClick={() => setLikesCount(likesCount + 1)}>
          Like <AiFillLike />
        </button>
        <button onClick={() => setLikesCount(likesCount - 1)}>
          Dislike <AiFillDislike />
        </button>
        <p>Total likes: {likesCount} </p>
      </div>
    </>
  );
};

export default Votes;
