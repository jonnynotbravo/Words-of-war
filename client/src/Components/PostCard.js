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
          <div id="postCard">
            <div className="flag-wrapper">
              <span className="flag">{post.user.username}</span>
            </div>
            <div className="desc">{post.content}</div>
            {user.id === post.user.id ? (
              <button className="noselect" onClick={handleDelete}>
                <span className="text">Delete</span>
                <span className="icon">
                  <svg
                    xmlnsXlink="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
                  </svg>
                </span>
              </button>
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
