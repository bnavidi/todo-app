import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import "./ThemeToggle.css";

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="theme-toggle">
      <label className="switch">
        <input type="checkbox" checked={isDark} onChange={toggleTheme} />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default ThemeToggle;
