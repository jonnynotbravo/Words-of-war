import { Switch, Route } from "react-router-dom";

import Signup from "./Components/Signup";
import Login from './Components/Login'

function App() {
  return <div className="App">
    <Switch>
      <Route exact path='/signup'>
        <Signup />
      </Route>
      
      <Route exact path='/login'>
        <Login />
      </Route>
    </Switch>
  </div>;
}

export default App;
