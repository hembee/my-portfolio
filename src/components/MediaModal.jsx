import styles from "../styles/MediaModal.module.css";
// import { BsWhatsapp, BsTwitter, BsGithub, BsLinkedin } from "react-icons/bs";
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
          ❌
        </button>
        {/* <div>
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
        </div> */}
      </div>
    </div>
  );
};

export default MediaModal;
