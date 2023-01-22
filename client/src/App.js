import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";

import Signup from "./Components/Signup";
import Login from "./Components/Login";
import GenericNotFound from "./Components/GenericNotFound";
import Profile from "./Components/Profile";
import LandingPage from "./Components/LandingPage";
import NewPost from "./Components/NewPost";
import NavBar from "./Components/NavBar";
import TopicSelection from "./Components/TopicSelection";

function App() {
  const [user, setUser] = useState(null);
  const [topics, setTopics] = useState([]);
  const [selectedTopicId, setSelectedTopicId] = useState(null);
  const [selectedData, setSelectedData] = useState([]);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then(setUser);
      }
    });
  }, []);
  console.log(user);
  console.log(user);
  const history = useHistory();
  const addPostTotopics = (newPost) => {
    const newtopics = [...topics];

    newtopics.posts = [...newtopics.posts, newPost];
    setTopics(newtopics);
  };

  const getTopics = () => {
    fetch("/topics")
      .then((r) => r.json())
      .then(setTopics);
  };

  const getData = () => {
    fetch(`/topics/${selectedTopicId}`)
      .then((r) => r.json())
      .then(setSelectedData);
  };

  useEffect(() => {
    getTopics();
  }, []);

  return (
    <div className="App">
      {!user ? (
        <>
          <Login setUser={setUser} />
          {/* <Signup setUser={setUser} /> */}
        </>
      ) : (
        <>
          <NavBar setUser={setUser} />

          <Switch>
            <Route path="/profile">
              <Profile user={user} setUser={setUser} />
            </Route>

            <Route path="/newpost">
              <NewPost
                selectedTopicId={selectedTopicId}
                addPostTotopics={addPostTotopics}
              />
            </Route>

            <Route path="/topic">
              <LandingPage
                setUser={setUser}
                selectedTopicId={selectedTopicId}
                user={user}
                getTopics={getTopics}
                getData={getData}
                selectedData={selectedData}
              />
            </Route>

            <Route exact path="/">
              <TopicSelection
                topics={topics}
                setSelectedTopicId={setSelectedTopicId}
              />
            </Route>
            <Route path="/404" component={GenericNotFound} />
            <Redirect to="/404" />
          </Switch>
        </>
      )}
    </div>
  );
}

export default App;
