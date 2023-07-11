import styles from "../styles/Projects.module.css";
import pic1 from "../images/portfolio.png"
import pic2 from "../images/udemy.png"
import pic3 from "../images/airbnb.png"
const Projects = () => {
  const projects = [
    {
      title: "Cash2go",
      description: "Loan prediction app",
      imgUrl: pic1,
      url: "https://google.com",
    },
    {
      title: "DrummersVille",
      description: "Music",
      imgUrl: pic1,
      url: "https://google.com",
    },
    {
      title: "Portfolio",
      description: "Personal portfolio",
      imgUrl: pic1,
      url: "https://google.com",
    },
    {
      title: "Udemy",
      description: "Udemy clone",
      imgUrl: pic2,
      url: "https://hembee.github.io/udemy-landing-page",
    },
    {
      title: "Airbnb",
      description: "Airbnb clone",
      imgUrl: pic3,
      url: "https://google.com",
    },
    {
      title: "Mealy",
      description: "A food order app",
      imgUrl: pic1,
      url: "https://google.com",
    },
  ];
  return (
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
              target= "_blank"
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
  );
};

export default Projects;
