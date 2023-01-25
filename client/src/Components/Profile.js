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
        // history.push('/')
      } else {
        r.json().then(setErrors);
      }
    });
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleDelete = (e) => {
    fetch(`/users/${user.id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        setUser(null);
        // history.push("/login");
      }
    });
  };
  return (
    <div id="profile">
      <form id="login-form" className="login-form" onSubmit={handleUpdate}>
        <figure aria-hidden="true">
          <div className="person-body"></div>
          <div className="neck skin"></div>
          <div className="head skin">
            <div className="eyes"></div>
            <div className="mouth"></div>
          </div>
          <div className="hair"></div>
          <div className="ears"></div>
          <div className="shirt-1"></div>
          <div className="shirt-2"></div>
        </figure>
        <div>
          <label className="label-email">
            <span className="required">Email</span>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={data.email}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <label className="label-username">
          <span className="required">Username</span>
        </label>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={data.username}
          onChange={handleChange}
          required
        />

        <div>
          <label className="label-password">
            <span className="required"> New Password</span>
            <input
              type="password"
              name="password"
              placeholder="New Password"
              value={data.password}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label className="label-password">
            <span className="required">Confirm new Password</span>
            <input
              type="password"
              name="password_confirmation"
              placeholder="Confirm new Password"
              value={data.password_confirmation}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <input type="submit" value="Update" />
      </form>
    </div>
  );
};

export default Profile;

/*
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
<button onClick={handleDelete}>Delete account</button>
*/
