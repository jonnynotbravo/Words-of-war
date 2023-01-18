import { useState } from "react";
import { useHistory } from "react-router-dom";
const NewPost = () => {
  const history = useHistory();
  const [newPost, setNewPost] = useState({
    content: "",
    stance: "",
  });

  const handleChange = (e) => {
    setNewPost({
      ...newPost,
      [e.target.name]: e.target.value,
    });
  };
  console.log(newPost);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="for">For</label>
      <input
        type="radio"
        id="for"
        name="stance"
        value="for"
        onChange={handleChange}
      />
        <br />
      <label htmlFor="against">Against</label>
      <input
        type="radio"
        id="against"
        name="stance"
        value="against"
        onChange={handleChange}
      />
        <br />
      <br />
      <textarea
        rows="10"
        cols="50"
        placeholder="Debate..."
        name="content"
        value={newPost.content}
        onChange={handleChange}
      />
      <br />
      <input type="submit" />
    </form>
  );
};

export default NewPost;
