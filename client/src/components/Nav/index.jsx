import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="navLinks">
          <li className = "loginBtn">
            <a href="/" onClick={() => Auth.logout()}></a>
          </li>
          <li className = "userBtn"><Link to="/account">User</Link></li>
        </ul>
      );
    } else {
      return (
        <ul className="navLinks">
            <li className = "loginBtn"><Link to="/login">Login</Link></li>
            <li className = "signUpBtn"><Link to="/signup">Signup</Link></li>
        </ul>
      );
    }
  }

  return (
    <header>
      <p className="logo" src="" alt="logo"><Link to="/">TYPING.TEST</Link></p>
      <nav>
        {showNavigation()}
      </nav>
      <a className="buttonLink"><button><Link to = "/contact">Contact</Link></button></a>
    </header>
  );
}

export default Nav;
