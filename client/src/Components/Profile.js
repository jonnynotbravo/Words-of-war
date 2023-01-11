import { useEffect, useState } from "react";

const Profile = () => {
  const [data, setData] = useState({
    email: "",
    username: "",
    password: "",
    password_confirmation: "",
  });

  const handleUpdate = (e) => {};
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={data.email}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={data.username}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={data.password}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="password"
          name="password_confirmation"
          placeholder="Password Confirmation"
          value={data.password_confirmation}
          onChange={handleChange}
          required
        />
        <br />
        <input type="submit" value="Update" />
      </form>
    </div>
  );
};

export default Profile;
