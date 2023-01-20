import { useHistory } from "react-router-dom";
import { useEffect } from "react";

import PostCard from "./PostCard";

const PostsContainer = ({ posts, setLatestPost }) => {


  const postsArray = posts?.map((post) => {
    return <PostCard key={post.id} post={post} setLatestPost={setLatestPost} />;
  });

  return <div id="postsContainer">{postsArray}</div>;
};

export default PostsContainer;
