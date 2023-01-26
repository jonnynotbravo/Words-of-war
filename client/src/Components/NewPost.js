import { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
const NewPost = ({ selectedTopicId, addPostToTopic, selectedData }) => {
  const history = useHistory();

  const [newPost, setNewPost] = useState({
    content: "",
    stance: "",
    topic_id: selectedTopicId,
  });

  const handleChange = (e) => {
    setNewPost({
      ...newPost,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`/posts/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPost),
    }).then((r) => {
      if (r.ok) {
        r.json().then(addPostToTopic);
        history.push("/topic");
      }
    });
  };

  return (
    <div className="mainscreen">
      <div className="card">
        <div className="leftside">
          <img src={selectedData.image} className="product" />
        </div>
        <div className="rightside">
          <h1>{selectedData.title}</h1>
          <br />
          <form onSubmit={handleSubmit}>
            <label htmlFor="for">For </label>
            <input
              type="radio"
              id="for"
              name="stance"
              value="for"
              onChange={handleChange}
              required
            />
              <br />
            <label htmlFor="against">Against </label>
            <input
              type="radio"
              id="against"
              name="stance"
              value="against"
              onChange={handleChange}
              required
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
              required
            />
            <br />
            <br />
            <input type="submit" id="post" />
          </form>

          <p></p>
        </div>
      </div>
    </div>
  );
};

export default NewPost;
