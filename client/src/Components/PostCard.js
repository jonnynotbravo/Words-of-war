import { useEffect } from "react";
import PostsContainer from "./PostsContainer";

const PostCard = ({ post, setLatestPost, latestPost}) => {
  


  return (
    <div id="cardBar">
      <h5>{post.user.username}</h5>
      <p>{post.content}</p>
    </div>
  );
};

export default PostCard;
