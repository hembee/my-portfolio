import styles from "../styles/Projects.module.css";
import pic1 from "../images/portfolio.png";
import pic2 from "../images/udemy.png";
import pic3 from "../images/airbnb.png";
import pic4 from "../images/athletic.png";
import pic5 from "../images/cash2go.png";
import pic6 from "../images/drummersville.png";
import pic7 from "../images/api1.png";
import pic8 from "../images/api2.png";
import pic9 from "../images/api3.png";
import { Element } from "react-scroll";

const Projects = () => {
  const projects = [
    {
      title: "Airbnb",
      description: "Airbnb clone",
      imgUrl: pic3,
      url: "https://air-bnb-pearl.vercel.app/",
    },
    {
      title: "Cash2go",
      description: "Loan prediction app",
      imgUrl: pic5,
      url: "https://cash2go.netlify.app",
    },
    {
      title: "DrummersVille",
      description: "Music",
      imgUrl: pic6,
      url: "https://drummersville-murex.vercel.app/",
    },
    {
      title: "Athletics",
      description: "Progress tracker",
      imgUrl: pic4,
      url: "https://athletic-react-8y8ciz329-hembee.vercel.app/",
    },
    {
      title: "Portfolio",
      description: "Personal portfolio",
      imgUrl: pic1,
      url: "https://my-portfolio-sigma-nine-47.vercel.app/",
    },
    {
      title: "Udemy",
      description: "Udemy clone",
      imgUrl: pic2,
      url: "https://hembee.github.io/udemy-landing-page",
    },
    {
      title: "Cash2go-API",
      description: "Loan prediction backend",
      imgUrl: pic7,
      url: "https://github.com/Cash2go-backend-org/cash2go-backend",
    },
    {
      title: "To-do-API",
      description: "To-do app backend",
      imgUrl: pic8,
      url: "https://github.com/hembee/todo-api",
    },
    {
      title: "Store-API",
      description: "A store API",
      imgUrl: pic9,
      url: "https://github.com/hembee/store-api",
    },
  ];
  return (
    <Element name="projects">
      <section className={styles.projects} id="projects">
        <h1>Projects</h1>
        <p className={styles.projectsp}>
          Constantly learning and expanding my skill set to stay on top of the
          latest trends and technologies in full stack development.
        </p>
        <div className={styles.project}>
          {projects.map((project, index) => {
            return (
              <a
                key={index}
                className={`${styles.projectCard} ${styles.link}`}
                href={project.url}
                rel="noreferrer noopener"
                target="_blank"
              >
                <div>
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                </div>
                <img src={project.imgUrl} alt="image1" />
              </a>
            );
          })}
        </div>
      </section>
    </Element>
  );
};

export default Projects;
