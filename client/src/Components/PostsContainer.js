import { useEffect, useState } from "react";

import PostCard from "./PostCard";

const PostsContainer = ({ posts }) => {
  const array = posts?.map((post) => {
    return (
      <PostCard key={post.id} content={post.content} stance={post.stance} />
    );
  });

  return <div>{array}</div>;
};

export default PostsContainer;
