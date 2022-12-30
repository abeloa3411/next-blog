import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import styles from "../styles/projects.module.css";

const Projects = ({ projectsData }) => {
  return (
    <div className={styles.project__inner__container}>
      <div className={styles.project__container}>
        <div className={styles.project__title}>
          <h1>Projects</h1>
          <p>Welcom to the catalogue</p>
        </div>
        <div className={styles.projects__card__container}>
          {projectsData.map((project) => {
            return (
              <div className={styles.projects__card__innercontainer}>
                <div className={styles.project__card}>
                  <div>
                    <img
                      src={project.imgLink}
                      className={styles.project__card__img}
                    />
                  </div>
                  <div>
                    <div>
                      <h1>{project.title}</h1>
                    </div>
                    <div>
                      <p>{project.description}</p>
                    </div>
                    <div>
                      <a href="#">Read more</a>
                      <AiOutlineArrowRight />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
