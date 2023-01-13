import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";

import Signup from "./Components/Signup";
import Login from "./Components/Login";
import GenericNotFound from "./Components/GenericNotFound";
import Profile from "./Components/Profile";
import LandingPage from "./Components/LandingPage";

function App() {
  const history = useHistory();
  const [user, setUser] = useState(null);

  // console.log(user);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then(setUser);
      }
    });
  }, []);

  return (
    <div className="App">
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

        <Route exact path="/">
          <LandingPage setUser={setUser} />
        </Route>

        <Route path="/404" component={GenericNotFound} />
        <Redirect to="/404" />
      </Switch>
    </div>
  );
}

export default App;
