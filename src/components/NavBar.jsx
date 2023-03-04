import styles from "../styles/NavBar.module.css";
import Tony from "../images/Tony.png";
import { useState } from "react";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={Tony} alt="logo" />
      <nav className={styles.nav}>
        <a
          href="#home"
          className={activeLink === "home" ? styles.active : ""}
          onClick={() => {
            setActiveLink("home");
          }}
        >
          Home
        </a>
        <a
          href="#skills"
          className={activeLink === "skills" ? styles.active : ""}
          onClick={() => {
            setActiveLink("skills");
          }}
        >
          Skills
        </a>
        <a
          href="#projects"
          className={activeLink === "projects" ? styles.active : ""}
          onClick={() => {
            setActiveLink("projects");
          }}
        >
          Projects
        </a>
      </nav>
    </header>
  );
};

export default NavBar;
