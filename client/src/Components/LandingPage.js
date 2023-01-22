import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import PostsContainer from "./PostsContainer";

const LandingPage = ({ user, getTopics, getData, selectedData }) => {
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h1 id="topic">{selectedData.title}</h1>
      <PostsContainer
        posts={selectedData.posts}
        user={user}
        getTopics={getTopics}
        getData={getData}
      />
    </div>
  );
};

export default LandingPage;
