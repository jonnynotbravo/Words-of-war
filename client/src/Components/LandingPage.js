import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import PostsContainer from "./PostsContainer";

const LandingPage = ({ topic, user, getTopic }) => {
  return (
    <div>
      <h1 id="topic">{topic.title}</h1>
      <PostsContainer posts={topic.posts} user={user} getTopic={getTopic} />
    </div>
  );
};

export default LandingPage;
