import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import PostsContainer from "./PostsContainer";
import NavBar from "./NavBar";

const LandingPage = ({ setUser }) => {
  const [topic, setTopic] = useState([]);

  useEffect(() => {
    fetch("/topics")
      .then((r) => r.json())
      .then(setTopic);
  }, []);

  return (
    <div>
      <NavBar setUser={setUser} />
      <h1 id="topic">{topic.title}</h1>
      <PostsContainer users={topic.users} />
    </div>
  );
};

export default LandingPage;
