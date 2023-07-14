import styles from "../styles/NavBar.module.css";
import Tony from "../images/Tony.png";
import { Link } from "react-scroll";

const NavBar = () => {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={Tony} alt="logo" />
      <nav className={styles.nav}>
        <Link
          to="#home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          activeClass={styles.active}
        >
          Home
        </Link>
        <Link
          to="#skills"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          activeClass={styles.active}
        >
          Skills
        </Link>
        <Link
          to="#projects"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          activeClass={styles.active}
        >
          Projects
        </Link>
      </nav>
    </header>
  );
};

export default NavBar;
