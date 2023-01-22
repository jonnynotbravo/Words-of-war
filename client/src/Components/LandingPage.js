import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import PostsContainer from "./PostsContainer";

const LandingPage = ({ topic, user, getTopic, selectedTopic }) => {

  console.log(selectedTopic)
  return (
    <div>
      <h1 id="topic">{selectedTopic.title}</h1>
      <PostsContainer posts={selectedTopic.posts} user={user} getTopic={getTopic} />
    </div>
  );
};

export default LandingPage;
