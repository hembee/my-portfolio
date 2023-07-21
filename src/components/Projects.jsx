import styles from "../styles/Projects.module.css";
import pic1 from "../images/portfolio.png";
import pic2 from "../images/udemy.png";
import pic3 from "../images/airbnb.png";
import pic4 from "../images/athletic.png";
import pic5 from "../images/cash2go.png";
import pic6 from "../images/drummersville.png";
import pic7 from "../images/api1.jpg";
import pic8 from "../images/api2.png";
import pic9 from "../images/api3.avif";
import { Element } from "react-scroll";

const Projects = () => {
  const projects = [
    {
      title: "Airbnb",
      description: "Airbnb clone",
      imgUrl: pic3,
      url: "https://air-bnb-pearl.vercel.app/",
      github: "https://github.com/hembee/airBnb",
      tech: "React  Bootstrap",
    },
    {
      title: "Cash2go",
      description: "Loan prediction app",
      imgUrl: pic5,
      url: "https://cash2go.netlify.app",
      github: "https://github.com/Cash2go-backend-org/cash2go-backend/",
      tech: "Node  Express  MongoDB  Mongoose",
    },
    {
      title: "DrummersVille",
      description: "Music",
      imgUrl: pic6,
      url: "https://drummersville-murex.vercel.app/",
      github: "https://github.com/hembee/Drummersville",
      tech: "NextJS",
    },
    {
      title: "Athletics",
      description: "Progress tracker",
      imgUrl: pic4,
      url: "https://athletic-react-8y8ciz329-hembee.vercel.app/",
      github: "https://github.com/hembee/Athletic-react",
      tech: "React",
    },
    {
      title: "Portfolio",
      description: "Personal portfolio",
      imgUrl: pic1,
      url: "https://my-portfolio-sigma-nine-47.vercel.app/",
      github: "https://github.com/hembee/my-portfolio",
      tech: "React",
    },
    {
      title: "Udemy",
      description: "Udemy clone",
      imgUrl: pic2,
      url: "https://hembee.github.io/udemy-landing-page",
      github: "https://github.com/hembee/udemy-landing-page",
      tech: "Html  CSS  Javascript",
    },
    {
      title: "Cash2go-API",
      description: "Loan prediction backend",
      imgUrl: pic7,
      url: "https://cash2go-backendd.onrender.com/api/v1/user",
      github: "https://github.com/Cash2go-backend-org/cash2go-backend/",
      tech: "Node  Express  MongoDB  Mongoose",
    },
    {
      title: "To-do-API",
      description: "To-do app backend",
      imgUrl: pic8,
      url: "https://github.com/hembee/todo-api",
      github: "https://github.com/hembee/todo-api",
      tech: "Node  Express  MongoDB  Mongoose",
    },
    {
      title: "Store-API",
      description: "A store API",
      imgUrl: pic9,
      url: "https://github.com/hembee/store-api",
      github: "https://github.com/hembee/store-api",
      tech: "Node  Express  MongoDB  Mongoose",
    },
  ];
  return (
    <Element name="projects">
      <section className={styles.projects} id="projects">
        <h1>Projects</h1>
        <p className={styles.projectsp}>
          I have undertaken various projects that showcase my expertise in both
          front-end and back-end technologies. Below are some of the key
          projects I've worked on:
        </p>
        <div className={styles.project}>
          {projects.map((project, index) => {
            return (
              <div key={index} className={styles.projectCard}>
                <div>
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                </div>
                <img src={project.imgUrl} alt="image1" />
                <div className={styles.tech}>
                  <i>{project.tech}</i>
                </div>
                <div className={styles.links}>
                  <a
                    href={project.url}
                    className={styles.link}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <strong>Project Link</strong>
                  </a>
                  <a
                    href={project.github}
                    className={styles.link}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <strong>Github link</strong>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </Element>
  );
};

export default Projects;
