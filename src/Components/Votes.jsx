import React, {  useState } from "react";
import { AiFillDislike, AiFillLike } from "react-icons/ai";




const Votes = ({votes}) => {
  const [likesCount, setLikesCount] = useState(votes ?? 0);
  



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
