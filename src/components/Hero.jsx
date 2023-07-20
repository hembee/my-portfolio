import { useState, useEffect } from "react";
import styles from "../styles/Hero.module.css";
import { TbPlugConnected } from "react-icons/tb";
import pic1 from "../images/pic1.jpg";
import MediaModal from "./MediaModal";

const Hero = ({ openModal, closeModal, modal }) => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [
    "Front-end Engineer",
    "Backend Developer",
    "Full-Stack Developer",
  ];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  });

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);
    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className={styles.hero} id="home">
      {modal && <MediaModal closeModal={closeModal} showModal={openModal} />}
      <div className={styles.col1}>
        <span className={styles.tagline}>Welcome to my Portfolio</span>
        <h1>
          Hi 👋. I'm Tony, a <br />  <span className={styles.wrap}>{text}</span>
        </h1>
        <p>
          Experienced in a wide range of programming languages and frameworks,
          from front-end to back-end.
        </p>
        <button onClick={openModal} className={styles.connectBtn}>
          Let's connect <TbPlugConnected/>
        </button>
      </div>
      <div className={styles.col2}>
        <img className={styles.heroImg} src={pic1} alt="hero" />
      </div>
    </section>
  );
};

export default Hero;
