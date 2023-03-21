import styles from "../styles/Projects.module.css"

const Projects = () => {
const projects =[
  {
    title: "Business Startup",
    description: "Design and Development",
    imgUrl: "img1"
  },
  {
    title: "Business Startup",
    description: "Design and Development",
    imgUrl: "img1"
  },
  {
    title: "Business Startup",
    description: "Design and Development",
    imgUrl: "img1"
  },
  {
    title: "Business Startup",
    description: "Design and Development",
    imgUrl: "img1"
  },
  {
    title: "Business Startup",
    description: "Design and Development",
    imgUrl: "img1"
  },
  {
    title: "Business Startup",
    description: "Design and Development",
    imgUrl: "img1"
  },
]
  return (
    <section className={styles.projects}>
      <h2>Projects</h2>
      <p>
        Constantly learning and expanding my skill set to stay on top of the
        latest trends and technologies in full stack development.
      </p>
    </section>
  );
}

export default Projects
