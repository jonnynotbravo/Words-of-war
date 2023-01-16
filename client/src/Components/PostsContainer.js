import { useEffect, useState } from "react";

import PostCard from "./PostCard";

const PostsContainer = ({ posts }) => {
  const postsArray = [];

  for (let i in posts) {
    postsArray.push(posts[i].content);
  }

  return <PostCard posts={postsArray} />;
};

export default PostsContainer;
