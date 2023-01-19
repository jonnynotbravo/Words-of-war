import { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
const NewPost = ({ topic, setLatestPost }) => {
  const [id, setId] = useState('');
  const history = useHistory();

  const handleChange = (e) => {
    setNewPost({
      ...newPost,
      [e.target.name]: e.target.value,
    });
    setId(topic.id);
  };
  const [newPost, setNewPost] = useState({
    content: "",
    stance: "",
    topic_id: id,
  });

  console.log(newPost);
  console.log(id);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPost),
    }).then((r) => {
      if (r.ok) {
        r.json().then(setLatestPost);
        history.push("/");
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} id='newPost'>
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
      {/* <input type="text" name="topic_id" value={id} /> */}
      <input type="submit" />
    </form>
  );
};

export default NewPost;


/*

*/