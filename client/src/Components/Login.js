import { useHistory } from "react-router-dom";
import { useState } from "react";

const Login = (setUser) => {
  const history = useHistory();
  const [loginErrors, setloginErrors] = useState(null);

  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((r) => {
      if (r.ok) {
        r.json().then(setUser);
        history.push("/");
      } else {
        r.json().then(setloginErrors);
      }
    });
  };

  const goToSignup = (e) => {
    history.push("/signup");
  };
  return (
    <div id="login">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={data.username}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={data.password}
          onChange={handleChange}
          required
        />
        <br />
        <input type="submit" value="Login" />
      </form>
      <p onClick={goToSignup}>Create an account</p>
    </div>
  );
};

export default Login;
