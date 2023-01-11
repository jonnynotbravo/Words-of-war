import { Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Signup from "./Components/Signup";
import Login from "./Components/Login";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then(setUser);
      }
    });
  });
  return (
    <div className="App">
      <Switch>
        <Route exact path="/signup">
          <Signup />
        </Route>

        <Route exact path="/login">
          <Login setUser={setUser} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
