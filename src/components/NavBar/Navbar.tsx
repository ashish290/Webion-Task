import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <div className="nav-bar">
        <div className="menu-bar">
          <Link to="/"><h2 className="h2">LearnHub</h2></Link>
          <Link to="/Form"><p>Admin</p></Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
