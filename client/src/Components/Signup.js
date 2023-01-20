import { useState } from "react";
import { useHistory } from "react-router-dom";

const Signup = (setUser) => {
  const history = useHistory();
  const [signupErrors, setSignupErrors] = useState(null);
  const [data, setData] = useState({
    email: "",
    username: "",
    password: "",
    password_confirmation: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((r) => {
      if (r.ok) {
        r.json().then(setUser);
        history.push("/");
      } else {
        r.json().then(setSignupErrors);
      }
    });
  };

  const goToLogin = (e) => {
    history.push("/login");
  };
  return (
    <div id="signup">
      <form onSubmit={handleSubmit}>
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
        <input type="submit" value="Signup" />
      </form>
      <p onClick={goToLogin}>Already have an account? Login in</p>
    </div>
  );
};

export default Signup;
