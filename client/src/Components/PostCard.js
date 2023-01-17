const PostCard = ({ user, posts }) => {
  const array = posts.map((post) => {
    return <p key={post.id}>{post.content}</p>;
  });

  
  return (
    <div >
      {/* <p id='divider'></p> */}
      <div id="cardBar">
        <h6>{user.username}</h6>
        {array}
      </div>
    </div>
  );
};

export default PostCard;

// id={stance === "for" ? "stanceFor" : "stanceAgainst"}
