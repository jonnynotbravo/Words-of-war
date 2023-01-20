import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import PostsContainer from "./PostsContainer";

const LandingPage = ({ topic, latestPost }) => {
  // console.log(latestPost);

  return (
    <div>
      <h1 id="topic">{topic.title}</h1>
      <PostsContainer posts={topic.posts}  />
    </div>
  );
};

export default LandingPage;
