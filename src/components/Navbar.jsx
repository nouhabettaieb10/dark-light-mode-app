import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../themeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="nav">
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/blog"}>Blog</Link>
      <button onClick={toggleTheme}>
        <label htmlFor="theme">
          {theme === "light" ? "Toggle Dark theme" : "Toggle Light theme"}
        </label>
      </button>
    </nav>
  );
};

export default Navbar;
