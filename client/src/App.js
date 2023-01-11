import { Switch, Route, Redirect } from "react-router-dom";
import { useEffect, useState } from "react";

import Signup from "./Components/Signup";
import Login from "./Components/Login";
import GenericNotFound from "./Components/GenericNotFound";
import Profile from "./Components/Profile";

function App() {
  const [user, setUser] = useState(null);

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
        <Route exact path="/signup">
          <Signup setUser={setUser} />
        </Route>

        <Route exact path="/login">
          <Login setUser={setUser} />
        </Route>

        <Route exact path="/profile">
          <Profile />
        </Route>

        <Route path="/404" component={GenericNotFound} />
        <Redirect to="/404" />
      </Switch>
    </div>
  );
}

export default App;
