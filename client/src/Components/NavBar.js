import { useHistory, NavLink } from "react-router-dom";
const NavBar = ({ setUser }) => {
  const history = useHistory();
  const handleLogout = () => {
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
      <nav>
        <div className="navicon">
          {" "}
          <div></div>
        </div>
        <NavLink to="/" className="a">
          Home
        </NavLink>
        <NavLink to="/about" className="a">
          About
        </NavLink>
        <NavLink to="/profile" className="a">
          Profile
        </NavLink>
      </nav>
      <a id="logoutBtn" onClick={handleLogout}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Logout
      </a>
    </div>
  );
};

export default NavBar;

{
  /* <ul>
<li>
  
</li>
<li>
  
</li>
<li>
  <a onClick={handleLogout}>Logout</a>
</li>
</ul> */
}
