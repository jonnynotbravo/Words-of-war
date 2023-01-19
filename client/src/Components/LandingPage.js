import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import PostsContainer from "./PostsContainer";

const LandingPage = ({ setUser, topic }) => {
  return (
    <div>
      <h1 id="topic">{topic.title}</h1>
      <PostsContainer users={topic.users} />
    </div>
  );
};

export default LandingPage;
