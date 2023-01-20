import { useEffect } from "react";
import PostsContainer from "./PostsContainer";

const PostCard = ({ post, setLatestPost, latestPost, user }) => {
  const handleDelete = () => {
    fetch(`/posts/${post.id}`, {
      method: "DELETE",
    });
  };
  return (
    <div id="cardBar">
      <h5>{post.user.username}</h5>
      <p>{post.content}</p>
      {user.id === post.user.id ? (
        <button onClick={handleDelete}>Delete</button>
      ) : null}
    </div>
  );
};

export default PostCard;
