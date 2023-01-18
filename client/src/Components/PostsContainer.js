import { useHistory } from "react-router-dom";

import PostCard from "./PostCard";

const PostsContainer = ({ users }) => {
  const array = users?.map((elem) => {
    return <PostCard key={elem.id} user={elem} posts={elem.posts} />;
  });

  return <div id="postsContainer">{array}</div>;
};

export default PostsContainer;
