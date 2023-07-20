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
const myFacebookLink = "https://www.facebook.com/hem.bee1999";
const myTwitterLink = "https://twitter.com/humble_hembee";
const myWhatsappLink = "https://wa.me/message/RHIX7CCQLGLVP1";
const myLinkedinLink =
  "https://www.linkedin.com/in/asagba-mubarak-anthony-67102a278";

const MediaModal = ({ closeModal, showModal }) => {
  return (
    <div
      className={`${styles.blur} ${showModal ? styles["show-modal"] : ""}`}
      onClick={closeModal}
    >
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
    </div>
  );
};

export default MediaModal;
