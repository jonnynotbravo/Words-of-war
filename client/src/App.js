import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";

import Signup from "./Components/Signup";
import Login from "./Components/Login";
import GenericNotFound from "./Components/GenericNotFound";
import Profile from "./Components/Profile";
import LandingPage from "./Components/LandingPage";
import NewPost from "./Components/NewPost";
import NavBar from "./Components/NavBar";

function App() {
  const history = useHistory();

  const [user, setUser] = useState(null);
  const [topic, setTopic] = useState([]);
  const [latestPost, setLatestPost] = useState(null);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then(setUser);
      }
    });
  }, []);

  useEffect(() => {
    fetch("/topics")
      .then((r) => r.json())
      .then(setTopic);
  }, []);

  return (
    <div className="App">
      <NavBar setUser={setUser} />
      <Switch>
        <Route path="/login">
          <Login setUser={setUser} />
        </Route>

        <Route path="/signup">
          <Signup setUser={setUser} />
        </Route>

        <Route path="/profile">
          {user ? (
            <Profile user={user} setUser={setUser} />
          ) : (
            <Login user={user} />
          )}
        </Route>

        <Route path="/newpost">
          <NewPost topic={topic} setLatestPost={setLatestPost} />
        </Route>

        <Route exact path="/">
          <LandingPage setUser={setUser} topic={topic} />
        </Route>

        <Route path="/404" component={GenericNotFound} />
        <Redirect to="/404" />
      </Switch>
    </div>
  );
}

export default App;
