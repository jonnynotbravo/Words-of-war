import { Switch, Route } from "react-router-dom";

import Signup from "./Components/Signup";

function App() {
  return <div className="App">
    <Switch>
      <Route exact path='/signup'>
        <Signup />
      </Route>
    </Switch>
  </div>;
}

export default App;
