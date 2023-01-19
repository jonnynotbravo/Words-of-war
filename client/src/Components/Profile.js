import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const Profile = ({ user, setUser }) => {
  const history = useHistory();
  const [errors, setErrors] = useState(null);

  const [data, setData] = useState({
    email: user.email,
    username: user.username,
    password: "",
    password_confirmation: "",
  });

  const handleUpdate = (e) => {
    fetch(`/users/${user.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((r) => {
      if (r.ok) {
        r.json().then(setUser);
        history.push("/");
      } else {
        r.json().then(setErrors);
      }
    });
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <div id='profile'>
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
          placeholder="New Password"
          value={data.password}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="password"
          name="password_confirmation"
          placeholder="Confirm new Password"
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
