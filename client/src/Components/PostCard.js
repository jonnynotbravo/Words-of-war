import { useEffect } from "react";
import PostsContainer from "./PostsContainer";

const PostCard = ({ post, user, getData }) => {
  const handleDelete = () => {
    fetch(`/posts/${post.id}`, {
      method: "DELETE",
    }).then(getData);
  };

  return (
    <ul className="timeline">
      <li>
        <div className={post.stance === "for" ? "direction-l" : "direction-r"}>
          <div className="flag-wrapper">
            <span className="flag">{post.user.username}</span>
          </div>
          <div className="desc">
            {post.content}
            <br />
            {user.id === post.user.id ? (
              <button onClick={handleDelete}>Delete</button>
            ) : null}
          </div>
        </div>
      </li>
    </ul>
  );
};

export default PostCard;

{
  /* <div id={post.stance === "for" ? "cardBlue" : "cardRed"}>
<h5>{post.user.username}</h5>
<p>{post.content}</p>
{user.id === post.user.id ? (
  <button onClick={handleDelete}>Delete</button>
) : null}
</div> */
}
