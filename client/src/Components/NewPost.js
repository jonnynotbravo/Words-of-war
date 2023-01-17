const NewPost = () => {
    const handleSubmit = () => {
     
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="for">For</label>
      <input type="radio" id="for" name="stance" value="for" />  <br />
      <label htmlFor="against">Against</label>
      <input type="radio" id="for" name="stance" value="against" />  <br />
      <br />
      <textarea placeholder="Debate..." />
      <br />
      <input type="submit" />
    </form>
  );
};

export default NewPost;
