import styles from "../styles/MediaModal.module.css";
import {
  BsWhatsapp,
  BsTwitter,
  BsGithub,
  BsLinkedin,
  BsFacebook,
} from "react-icons/bs";
import { GiCancel } from "react-icons/gi";

const myGithubLink = "https://www.github.com/hembee";

const MediaModal = ({ closeModal }) => {
  return (
    <div className={styles.blur} onClick={closeModal}>
      <div
        className={styles.modal}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <button className={styles.close} onClick={closeModal}>
          <GiCancel />
        </button>
        <div className={styles.icons}>
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
    </div>
  );
};

export default MediaModal;
