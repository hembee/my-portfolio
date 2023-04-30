import styles from "../styles/Projects.module.css";

const Projects = () => {
  const projects = [
    {
      title: "Business Startup",
      description: "Design and Development",
      imgUrl: "img1",
    },
    {
      title: "Business Startup",
      description: "Design and Development",
      imgUrl: "img1",
    },
    {
      title: "Business Startup",
      description: "Design and Development",
      imgUrl: "img1",
    },
    {
      title: "Business Startup",
      description: "Design and Development",
      imgUrl: "img1",
    },
    {
      title: "Business Startup",
      description: "Design and Development",
      imgUrl: "img1",
    },
    {
      title: "Business Startup",
      description: "Design and Development",
      imgUrl: "img1",
    },
  ];
  return (
    <section className={styles.projects}>
      <h1>Projects</h1>
      <p>
        Constantly learning and expanding my skill set to stay on top of the
        latest trends and technologies in full stack development.
      </p>
      <div className={styles.project}>
        {projects.map((project, index) => {
          return (
            <div key={index} className={styles.projectCard}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <img src={project.imgUrl} alt="image1" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
