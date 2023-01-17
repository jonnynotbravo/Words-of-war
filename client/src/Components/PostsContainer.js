import { useHistory } from "react-router-dom";

import PostCard from "./PostCard";

const PostsContainer = ({ posts }) => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/newpost");
  };

  const array = posts?.map((post) => {
    return (
      <PostCard key={post.id} content={post.content} stance={post.stance} />
    );
  });

  return (
    <div id="postsContainer">
      {array}
      <button id="newPost" onClick={handleClick}>
        Create a Post
      </button>
    </div>
  );
};

export default PostsContainer;
