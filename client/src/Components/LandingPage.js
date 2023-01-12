import { useHistory } from "react-router-dom";

const LandingPage = ({ setUser }) => {
  const history = useHistory();
  const handleClick = () => {
    fetch("/logout", {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        setUser(null);
        history.push("/login");
      }
    });
  };
  return (
    <div>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
};

export default LandingPage;
