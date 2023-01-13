import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const LandingPage = ({ setUser }) => {
  const history = useHistory();

  const [data, setData] = useState([]);

  const handleLogin = () => {
    fetch("/logout", {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        setUser(null);
        history.push("/login");
      }
    });
  };

  useEffect(() => {
    fetch("/topics")
      .then((r) => r.json())
      .then(setData);
  }, []);

  const title = data.map((elem) => elem.title);
  return (
    <div>
      <h1 id="topic">{title}</h1>
      <button id="logoutBtn" onClick={handleLogin}>
        Logout
      </button>
    </div>
  );
};

export default LandingPage;
