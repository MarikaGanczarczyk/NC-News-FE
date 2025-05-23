import React from "react";
import { useState, useEffect } from "react";
import { getTopics } from "../../api";
import TopicCard from "./TopicCard";

function TopicList() {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getTopics()
      .then((response) => {
       
        
        setTopics(response);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1 className="topics-header-title">Topics</h1>
      <ul className="topics-list">
        {topics.map((topic) => (
          <li key={topic.slug}>
            <TopicCard topic={topic} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default TopicList;
