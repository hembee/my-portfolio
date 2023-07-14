import styles from "../styles/NavBar.module.css";
import Tony from "../images/Tony.png";
import { Link, animateScroll as scroll } from "react-scroll";
import { useState } from "react";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");

  const handleLinkClick = (link) => {
    setActiveLink(link);
    scroll.scrollTo(link, {
      duration: 500,
      offset: -70,
      smooth: true,
    });
  };

  return (
    <header className={styles.header}>
      <img className={styles.logo} src={Tony} alt="logo" />
      <nav className={styles.nav}>
        <Link
          to="#home"
          className={activeLink === "home" ? styles.active : ""}
          onClick={() => handleLinkClick("home")}
        >
          Home
        </Link>
        <Link
          to="#skills"
          className={activeLink === "skills" ? styles.active : ""}
          onClick={() => handleLinkClick("skills")}
        >
          Skills
        </Link>
        <Link
          to="#projects"
          className={activeLink === "projects" ? styles.active : ""}
          onClick={() => handleLinkClick("projects")}
        >
          Projects
        </Link>
      </nav>
    </header>
  );
};

export default NavBar;
