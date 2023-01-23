import { useHistory } from "react-router-dom";
import { useEffect } from "react";

import PostCard from "./PostCard";

const PostsContainer = ({ posts, user, getTopic, getData }) => {
  const postsArray = posts?.map((post) => {
    return (
      <PostCard
        key={post.id}
        post={post}
        user={user}
        getTopic={getTopic}
        getData={getData}
      />
    );
  });

  return (
    <div id="postsContainer">
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600,600italic,700,700italic"
        rel="stylesheet"
        type="text/css"
      ></link>
      {postsArray}
    </div>
  );
};

export default PostsContainer;
