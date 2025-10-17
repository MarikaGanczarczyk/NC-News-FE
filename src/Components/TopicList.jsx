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
      <div className="topic-container">
        <div className="topic-title">
          <h1>Topics</h1>
          <h2>Pick a topic that interests you the most!</h2>
        </div>

        <ul className="topics-list">
          {topics.map((topic) => (
            <li key={topic.slug}>
              <TopicCard topic={topic} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default TopicList;
