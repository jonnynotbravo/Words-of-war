import { useHistory } from "react-router-dom";
import { useState } from "react";

const Login = ({ setUser }) => {
  const [toTheRight, setToTheRight] = useState(false);
  const history = useHistory();

  console.log(toTheRight);

  //Sign up
  const [signupErrors, setSignupErrors] = useState(null);
  const [signupData, setSignupData] = useState({
    email: "",
    username: "",
    password: "",
    password_confirmation: "",
  });

  const handleSignupChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    fetch("/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(signupData),
    }).then((r) => {
      if (r.ok) {
        r.json().then(setUser);
        // history.push("/");
      } else {
        r.json().then(setSignupErrors);
      }
    });
  };

  //Login
  const [loginErrors, setloginErrors] = useState(null);
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginData),
    }).then((r) => {
      if (r.ok) {
        r.json().then(setUser);
        history.push("/");
      } else {
        r.json().then(setloginErrors);
      }
    });
  };

  const signInButton = () => {
    setToTheRight(false);
  };

  const signUpButton = () => {
    setToTheRight(true);
  };

  return (
    <div id="loginSignup">
      <h2>Words Of War</h2>
      <div
        className={toTheRight ? "container right-panel-active" : "container"}
        id="container"
      >
        <div className="form-container sign-up-container">
          <form onSubmit={handleSignupSubmit}>
            <h1>Create Account</h1>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={signupData.email}
              onChange={handleSignupChange}
              required
            />
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={signupData.username}
              onChange={handleSignupChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={signupData.password}
              onChange={handleSignupChange}
              required
            />
            <input
              type="password"
              name="password_confirmation"
              placeholder="Password Confirmation"
              value={signupData.password_confirmation}
              onChange={handleSignupChange}
              required
            />
            <button>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form onSubmit={handleLoginSubmit}>
            <h1>Sign in</h1>
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={loginData.username}
              onChange={handleLoginChange}
              required
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={loginData.password}
              onChange={handleLoginChange}
              required
            />
            <button>Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button className="ghost" id="signIn" onClick={signInButton}>
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, There!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="ghost" id="signUp" onClick={signUpButton}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
