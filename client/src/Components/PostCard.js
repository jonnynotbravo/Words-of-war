const PostCard = ({ posts }) => {
  const array = posts.map((elem) => {
    return <li>{elem}</li>;
  });
  return <div>{array}</div>;
};

export default PostCard;
