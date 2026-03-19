import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const THEME_KEYS = ["default", "dark", "light", "sunset"];

  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "default";
    const saved = window.localStorage.getItem("theme");
    return saved && THEME_KEYS.includes(saved) ? saved : "default";
  });

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") setMenuOpen(false);
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  function closeMenu() {
    setMenuOpen(false);
  }

  function randomizeTheme() {
    const options = THEME_KEYS.filter((t) => t !== theme);
    const next = options.length
      ? options[Math.floor(Math.random() * options.length)]
      : theme;
    setTheme(next);
    setMenuOpen(false);
  }

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

  function showMobileNavigation() {
    const authItems = Auth.loggedIn() ? (
      <>
        <li className="hamburgerItem">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              Auth.logout();
              closeMenu();
            }}
          >
            Logout
          </a>
        </li>
        <li className="hamburgerItem">
          <Link to="/account" onClick={closeMenu}>
            User
          </Link>
        </li>
      </>
    ) : (
      <>
        <li className="hamburgerItem">
          <Link to="/login" onClick={closeMenu}>
            Login
          </Link>
        </li>
        <li className="hamburgerItem">
          <Link to="/signup" onClick={closeMenu}>
            Signup
          </Link>
        </li>
      </>
    );

    return (
      <>
        {authItems}
        <li className="hamburgerItem hamburgerContact">
          <Link to="/contact" onClick={closeMenu}>
            Contact
          </Link>
        </li>
      </>
    );
  }

  return (
    <header>
      <p className="logo" src="" alt="logo">
        <Link to="/" className="Link">TYPING.TEST</Link>
      </p>

      <a className="buttonLink contactButton">
        <button>
          <Link to="/contact" className="Link2">
            Contact
          </Link>
        </button>
      </a>

      <button
        type="button"
        className="themeRandomizer"
        aria-label="Randomize theme"
        onClick={randomizeTheme}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6.5 3.5h11c1.1 0 2 .9 2 2v13c0 1.1-.9 2-2 2h-11c-1.1 0-2-.9-2-2v-13c0-1.1.9-2 2-2zm0 2v13h11v-13h-11z" />
          <circle cx="9" cy="8" r="1.5" />
          <circle cx="15" cy="8" r="1.5" />
          <circle cx="12" cy="12" r="1.5" />
          <circle cx="9" cy="16" r="1.5" />
          <circle cx="15" cy="16" r="1.5" />
        </svg>
      </button>

      <div className="hamburgerWrap">
        <button
          type="button"
          className={`hamburgerButton ${menuOpen ? "open" : ""}`}
          aria-label="Open navigation menu"
          aria-controls="mobileNav"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="hamburgerBar" />
          <span className="hamburgerBar" />
          <span className="hamburgerBar" />
        </button>

        <div id="mobileNav" className={`hamburgerMenu ${menuOpen ? "open" : ""}`}>
          <ul className="hamburgerList">
            {showMobileNavigation()}
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Nav;
