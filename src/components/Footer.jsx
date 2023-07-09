import React from "react";
import styles from "../styles/Footer.module.css";
import {
  BsWhatsapp,
  BsTwitter,
  BsGithub,
  BsLinkedin,
  BsFacebook,
} from "react-icons/bs";

const myGithubLink = "https://www.github.com/hembee";


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <h3>Asagba Mubarak Anthony</h3>
          <p>Full Stack Web Developer</p>
        </div>
        <div className={styles.footerLinks}>
          <a
            className={`${styles.icon} ${styles.fb}`}
            href="www.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsFacebook />
          </a>
          <a
            className={`${styles.icon} ${styles.whatsapp}`}
            href="www.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsWhatsapp />
          </a>
          <a
            className={`${styles.icon} ${styles.twitter}`}
            href="www.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsTwitter />
          </a>
          <a
            className={`${styles.icon} ${styles.github}`}
            href={myGithubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub />
          </a>
          <a
            className={`${styles.icon} ${styles.linkedin}`}
            href="www.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
