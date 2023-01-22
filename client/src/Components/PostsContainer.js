import { useHistory } from "react-router-dom";
import { useEffect } from "react";

import PostCard from "./PostCard";

const PostsContainer = ({ posts, user, getTopic, getData }) => {
  const postsArray = posts?.map((post) => {
    return (
      <PostCard key={post.id} post={post} user={user} getTopic={getTopic} getData={getData} />
    );
  });

  return <div id="postsContainer">{postsArray}</div>;
};

export default PostsContainer;
