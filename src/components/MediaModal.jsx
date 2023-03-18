import styles from "../styles/MediaModal.module.css";
import {
  BsWhatsapp,
  BsTwitter,
  BsGithub,
  BsLinkedin,
  BsFacebook,
} from "react-icons/bs";
import { GiCancel } from "react-icons/gi";
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
          <a className={`${styles.icon} ${styles.fb}`} href="www.google.com">
            <BsFacebook />
          </a>
          <a
            className={`${styles.icon} ${styles.whatsapp}`}
            href="www.google.com"
          >
            <BsWhatsapp />
          </a>
          <a
            className={`${styles.icon} ${styles.twitter}`}
            href="www.google.com"
          >
            <BsTwitter />
          </a>
          <a
            className={`${styles.icon} ${styles.github}`}
            href="www.github.com/hembee"
          >
            <BsGithub />
          </a>
          <a
            className={`${styles.icon} ${styles.linkedin}`}
            href="www.google.com"
          >
            <BsLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MediaModal;
