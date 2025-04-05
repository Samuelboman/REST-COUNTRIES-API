import React from "react";
import { Link } from "react-router-dom";

const Header = ({ theme, setTheme }) => (
  <header className="header">
    <Link to="/" className="logo">REST Countries API</Link>
    <nav>
      <Link to="/favorites">Favorites</Link>
    </nav>
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="theme-toggle"
    >
      {theme === "light" ? "🌞 Light Theme" : "🌙 Dark Theme"}
    </button>
  </header>
);

export default Header;
