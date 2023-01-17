import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import PostsContainer from "./PostsContainer";

const LandingPage = ({ setUser }) => {
  const history = useHistory();

  const [topic, setTopic] = useState([]);

  const handleLogin = () => {
    fetch("/logout", {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        setUser(null);
        history.push("/login");
      }
    });
  };

  useEffect(() => {
    fetch("/topics")
      .then((r) => r.json())
      .then(setTopic);
  }, []);

  return (
    <div>
      <h1 id="topic">{topic.title}</h1>
      <PostsContainer users={topic.users} />
      <button id="logoutBtn" onClick={handleLogin}>
        Logout
      </button>
    </div>
  );
};

export default LandingPage;
