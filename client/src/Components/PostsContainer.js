import { useEffect, useState } from "react";

import PostCard from "./PostCard";

const PostsContainer = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/posts")
      .then((r) => r.json())
      .then(setPosts);
  }, []);

  const array = posts.map((elem) => {
    return <PostCard key={elem.id} post={elem} />;
  });

  console.log(posts)
  return <div>{array}</div>;
};

export default PostsContainer;
