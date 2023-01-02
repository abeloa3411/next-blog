import Image from "next/image";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import styles from "../styles/projects.module.css";

const Projects = ({ projectsData }) => {
  return (
    <div className={styles.project__inner__container}>
      <div className={styles.project__container}>
        <div className={styles.project__title}>
          <h1 className={styles.project__title__h2}>Projects</h1>
          <p>
            Welcom to the catalogue, Here are the top projects, If you want to
            see more projects got to my{" "}
            <span>
              <a
                href="https://github.com/abeloa3411"
                rel="noopener"
                target="_blank"
              >
                github
              </a>
            </span>
          </p>
        </div>
        <div className={styles.projects__card__container}>
          {projectsData.map((project) => {
            return (
              <div
                key={project.id}
                className={styles.projects__card__innercontainer}
              >
                <div className={styles.project__card}>
                  <div>
                    <Image
                      src={project.imgLink}
                      className={styles.project__card__img}
                      alt={project.title}
                    />
                  </div>
                  <div className={styles.project__card__content}>
                    <div className={styles.project__card__title}>
                      <h1>{project.title}</h1>
                    </div>
                    <div className={styles.project__card__description}>
                      <p>{project.description}</p>
                    </div>
                    <div className={styles.project__card__link}>
                      <a
                        href={project.link}
                        referrerPolicy="no-referrer"
                        target="_blank"
                        rel="noopener"
                      >
                        Read more
                      </a>
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
