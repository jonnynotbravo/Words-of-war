import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const TopicSelection = ({ topics, setSelectedTopic }) => {
  const history = useHistory();

  const topicsArray = topics.map((topic) => {
    return (
      <li
        id="topics"
        key={topic.id}
        onClick={() => {
          setSelectedTopic(topic);
          history.push("/topic");
        }}
      >
        {topic.title}
      </li>
    );
  });

  return <div id="topicsContainer">{topicsArray}</div>;
};

export default TopicSelection;
