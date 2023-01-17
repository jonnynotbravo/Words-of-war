import { useHistory } from "react-router-dom";

import PostCard from "./PostCard";

const PostsContainer = ({ users }) => {
  const history = useHistory();

  const array = users?.map((elem) => {
    return <PostCard key={elem.id} user={elem} posts={elem.posts} />;
  });

  const handleClick = () => {
    history.push("/newpost");
  };

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
