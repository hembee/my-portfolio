import styles from "../styles/MediaModal.module.css";
import {
  BsFacebook,
  BsWhatsapp,
  BsTwitter,
  BsGithub,
  BsLinkedin,
} from "react-icons/bs";
const MediaModal = ({ closeModal }) => {
  return (
    <div className={styles.blur} onClick={closeModal}>
      <div>
        <div className={styles.modal}>
          <button className={styles.close} onClick={closeModal}>
            ❌
          </button>
          <a className={styles.icon} href="www.google.com">
            <i className="bi bi-facebook"></i>
          </a>
          <a className={styles.icon} href="www.google.com">
            {BsWhatsapp}
          </a>
          <a className={styles.icon} href="www.google.com">
            {BsTwitter}
          </a>
          <a className={styles.icon} href="www.google.com">
            {BsGithub}
          </a>
          <a className={styles.icon} href="www.google.com">
            {BsLinkedin}
          </a>
        </div>
      </div>
    </div>
  );
};

export default MediaModal;
