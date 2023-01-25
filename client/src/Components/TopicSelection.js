import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const TopicSelection = ({ topics, setSelectedTopicId }) => {
  const history = useHistory();

  let num = null;

  const topicsArray = topics.map((topic) => {
    num = topic.active_users;
    return (
      <div className="a-box" key={topic.id}>
        <div className="img-container">
          <div className="img-inner">
            <div className="inner-skew">
              <img src={topic.image} id="topicsImg" />
            </div>
          </div>
        </div>
        <div className="text-container">
          <h3>{topic.title}</h3>

          <div>
            <p className="card__apply kreep">
              <a
                className="card__link button"
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
      </div>
    );
  });

  return (
    <div id="topicContainer">
      <h1>Topics of the week</h1>

      <div id='pop'>
        <h4>Total active users: {num}</h4>
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
