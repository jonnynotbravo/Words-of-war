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
        history.push("/");
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

  console.log(loginErrors);
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
      <h2 id="signup-title">Words Of War</h2>
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
            {signupErrors ? (
              <div className="error-box">
                <p className="error-list">
                  {signupErrors.errors.map((e, index) => (
                    <li key={index}>{e}</li>
                  ))}
                </p>
              </div>
            ) : null}
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form onSubmit={handleLoginSubmit}>
            <h1 id="signIn-h">Sign in</h1>
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
            {loginErrors ? (
              <div className="error-box">
                <p className="error-list">
                  <li>{loginErrors.error}</li>
                </p>
              </div>
            ) : null}
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left" id="welcome-back">
              <h1>Welcome Back!</h1>
              <p>Please login with your personal info to continue</p>
              <button className="ghost" id="signIn" onClick={signInButton}>
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right" id="signup_btn">
              <h1 className="typing">Hello, There!</h1>
              <p>Welcome to Words of war</p>
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
