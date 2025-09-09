import { useState } from "react";
import styles from "../styles/header.module.css";
import { FiMenu, FiX } from "react-icons/fi";
import { FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header({ theme, setTheme }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={`${styles.header} ${isOpen ? styles.open : ""}`}>
      <div className={styles["header-content"]}>
        {/* ✅ Logo */}
        <h2 className={styles.logo}>Clariza</h2>

        {/* ✅ Navigation Links */}
        <nav className={styles["nav-links"]}>
          <Link to="/pricing">Pricing</Link>
          <Link to="/careers">Careers</Link>
          <Link to="/enterprise">Enterprise</Link>
          <Link to="/help-centre">Help Center</Link>
        </nav>

        {/* ✅ Action Buttons */}
        <div className={styles["header-actions"]}>
          <button className={styles.btn}>Download the app</button>
          <button className={styles.btn}>Talk to an expert</button>
        </div>

        {/* ✅ Theme + Menu Icons */}
        <div className={styles["header-icons"]}>
          {/* Theme Toggle */}
          <button
            className={styles["theme-toggle"]}
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            aria-label="Toggle Theme"
          >
            {theme === "light" ? <FaMoon size={20} /> : <FaSun size={20} />}
          </button>

          {/* Menu Toggle */}
          <button
            className={styles["toggle-btn"]}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* ✅ Mobile Dropdown */}
      {isOpen && (
        <nav className={styles["mobile-nav"]}>
          <Link to="#">Pricing</Link>
          <Link to="#">Careers</Link>
          <Link to="#">Enterprise</Link>
          <Link to="#">Help Center</Link>
          <button className={styles.btn}>Download the app</button>
          <button className={styles.btn}>Talk to an expert</button>
        </nav>
      )}
    </header>
  );
}
