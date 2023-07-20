import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "../styles/Skills.module.css";
import meter1 from "../images/meter1.svg";
import meter2 from "../images/meter2.svg";
import meter3 from "../images/meter3.svg";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className={styles.skills} id="skills">
      <div className={styles["skills-bx"]}>
        <h2>Skills</h2>
        <p>
          Constantly learning and expanding my skill set to stay on top of the
          latest trends and technologies in full stack development.
        </p>
        <Carousel
          responsive={responsive}
          infinite={true}
          className={styles.skillSlider}
        >
          <div className={styles.item}>
            <img src={meter1} alt="meter" />
            <h5>HTML</h5>
          </div>
          <div className={styles.item}>
            <img src={meter3} alt="meter" />
            <h5>CSS</h5>
          </div>
          <div className={styles.item}>
            <img src={meter2} alt="meter" />
            <h5>JavaScript</h5>
          </div>
          <div className={styles.item}>
            <img src={meter2} alt="meter" />
            <h5>React</h5>
          </div>
          <div className={styles.item}>
            <img src={meter2} alt="meter" />
            <h5>Next</h5>
          </div>
          <div className={styles.item}>
            <img src={meter1} alt="meter" />
            <h5>NodeJS</h5>
          </div>
          <div className={styles.item}>
            <img src={meter1} alt="meter" />
            <h5>Express</h5>
          </div>
          <div className={styles.item}>
            <img src={meter2} alt="meter" />
            <h5>MongoDB</h5>
          </div>
          <div className={styles.item}>
            <img src={meter2} alt="meter" />
            <h5>Mongoose</h5>
          </div>
          <div className={styles.item}>
            <img src={meter1} alt="meter" />
            <h5>Git</h5>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Skills;
