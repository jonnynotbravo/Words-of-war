const PostCard = ({ content, stance }) => {
  return (
    <div id={stance === "for" ? "stanceFor" : "stanceAgainst"}>
        {/* <p id='divider'></p> */}
      <div id='cardBar'>
        <li>{content}</li>
      </div>
    </div>
  );
};

export default PostCard;
