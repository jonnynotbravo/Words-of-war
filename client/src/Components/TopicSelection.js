import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const TopicSelection = ({ topics, setSelectedTopicId }) => {
  const history = useHistory();

  const topicsArray = topics.map((topic) => {
    return (
      <>
        <div className="cards">
          <div className="card card-1">
            <div className="card__icon">
              <i className="fas fa-bolt"></i>
            </div>
            <p className="card__exit">
              <i className="fas fa-times"></i>
            </p>
            <h2 className="card__title">{topic.title}</h2>
            <p className="card__apply">
              <a
                className="card__link"
                onClick={() => {
                  setSelectedTopicId(topic.id);
                  history.push("/topic");
                }}
              >
                Enter Debate <i className="fas fa-arrow-right"></i>
              </a>
            </p>
          </div>
        </div>
      </>
    );
  });

  return (
    <div className="main-container">
      {" "}
      <div className="heading">
        <h1 className="heading__title">Topics of the week</h1>
      </div>
      {topicsArray}
    </div>
  );
};

export default TopicSelection;

{
  /* <li
id="topics"
key={topic.id}
onClick={() => {
  setSelectedTopicId(topic.id);
  history.push("/topic");
}}
>
{topic.title}
</li> */
}
