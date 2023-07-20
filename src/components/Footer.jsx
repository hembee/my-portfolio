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
const myFacebookLink = "https://www.facebook.com/hem.bee1999";
const myTwitterLink = "https://twitter.com/humble_hembee";
const myWhatsappLink = "https://wa.me/message.RHIX7CCQLGLVP1";
const myLinkedinLink =
  "https://www.linkedin.com/in/asagba-mubarak-anthony-67102a278";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.row}>
        <div className={styles.experience}>
          <h2>Experience</h2>
          <p>Stutern, Lagos, Nigeria.</p>
          <h5>Backend Developer, February 2023 - Present</h5>
          <ul>
            <li>
              Designed and Developed a RESTful API: Created a robust and
              scalable RESTful API using Node.js and Express.js, enabling
              seamless communication between the front-end and back-end of the
              application.
            </li>
            <li>
              Implemented User Authentication and Authorization: Developed a
              secure authentication system using technologies like JSON Web
              Tokens (JWT) and bcrypt to authenticate and authorize users,
              ensuring data privacy and access control.
            </li>
            <li>
              Designed and developed a microservices-based architecture using
              Node.js, Express.js, and MongoDB, leading to better
              maintainability and scalability of the application.
            </li>
          </ul>
        </div>
        <div className={styles.education}>
          <h2>Education</h2>
          <p className={styles.school}>Stutern Graduate Accelerator</p>
          <li className={styles.course}>Backend Development, 2022 - 2023</li>

          <p className={styles.school2}>
            Complete Front-end Bootcamp
          </p>
          <li className={styles.course}>Front-end Engineering, 2020 - 2022</li>

          <p className={styles.school2}>Yaba College Of Technology</p>
          <li className={styles.course}>Civil Engineering, 2019 - 2022</li>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.footerContent}>
          <h3>Asagba Mubarak Anthony</h3>
          <p>Full Stack Web Developer</p>
        </div>
        <div className={styles.footerLinks}>
          <a
            className={`${styles.icon} ${styles.fb}`}
            href={myFacebookLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsFacebook />
          </a>
          <a
            className={`${styles.icon} ${styles.whatsapp}`}
            href={myWhatsappLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsWhatsapp />
          </a>
          <a
            className={`${styles.icon} ${styles.twitter}`}
            href={myTwitterLink}
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
            href={myLinkedinLink}
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
