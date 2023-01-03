import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiOutlineMail,
} from "react-icons/ai";
import styles from "../styles/about.module.css";

const About = () => {
  return (
    <>
      <div className={styles.about__container}>
        <div className={styles.about__inner__container}>
          <header className={styles.About__header}>
            <div>
              <h1>About</h1>
            </div>
          </header>
          <div>
            <article className={styles.article}>
              <div>
                <img
                  className={styles.profile__pic}
                  src="https://avatars.githubusercontent.com/u/72107812?v=4"
                  alt="profile pic"
                />
              </div>
              <div>
                <div className={styles.article__name__container}>
                  <h3 style={{ marginBottom: "2rem" }}>Abel wanyonyi</h3>
                  <p>
                    <strong>
                      I love building cool stuffs, Technical writting and a huge
                      fan of the tech communitty
                    </strong>
                  </p>
                </div>
                <div className={styles.social__icons}>
                  <div className={styles.social__icon}>
                    <a
                      href="https://github.com/abeloa3411"
                      target="_blank"
                      rel="noopener"
                    >
                      <AiFillGithub />
                    </a>
                  </div>
                  <div className={styles.social__icon}>
                    <a
                      href="https://twitter.com/abel_wanyonyi_"
                      target="_blank"
                      rel="noopener"
                    >
                      <AiFillTwitterCircle />
                    </a>
                  </div>
                  <div className={styles.social__icon}>
                    <a
                      href="https://www.linkedin.com/in/abel-wanyonyi-4408b8201/"
                      target="_blank"
                      rel="noopener"
                    >
                      <AiFillLinkedin />
                    </a>
                  </div>
                  <div className={styles.social__icon}>
                    <a
                      href="mailto:abelw34@gmail.com"
                      target="_blank"
                      rel="noopener"
                    >
                      <AiOutlineMail />
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <div className={styles.paragraph__container}>
                  <p>
                    Hello, Am abel wanyonyi a software engineer, Technical
                    writter and i love contributing to the tech community
                  </p>
                  <p>
                    I love contributing to the tech community through platforms
                    like GDSC as a co-lead. I'm going to contribute more on open
                    source.
                  </p>
                  <p>
                    Through these few years in programming i'v been able to gain
                    knowledge in programming languages and tools. i am also
                    learning and willing to learn new technologies
                  </p>
                  <div className={styles.skills}>
                    <p>
                      <span>
                        <strong>Languages: </strong>
                      </span>
                      HTML, CSS, JAVASCRIPT, PYTHON, SQL, MARKDOWN
                    </p>
                    <p>
                      <span>
                        <strong>Frameworks: </strong>
                      </span>
                      REACT, NEXT JS, EXPRESS, FLASK, TAILWIND, BOOTSTRAPS,
                      WEBPACK
                    </p>
                    <p>
                      <span>
                        <strong>Tools and Skills: </strong>
                      </span>
                      mongoDB, Postgres, jest, Github, Docker, REST , GraphQL,
                      Git, Technical writting, CircleCI, Github CI/CD
                    </p>
                  </div>
                </div>
              </div>
            </article>
            <div className={styles.experience__container}>
              <div className={styles.experience__header}>
                <h2>Expirience</h2>
              </div>
              <div>
                <div className={styles.experience__card}>
                  <article>
                    <header>
                      <h3> Technical Writting @Hashnode</h3>
                      <p>2022 - Present</p>
                    </header>
                    <div>
                      <p>Writting teaching and programming articles</p>
                      <p>Creating tutorials</p>
                    </div>
                  </article>
                </div>
                <div>
                  <article>
                    <header>
                      <h3> FreeLancing @Upwork</h3>
                      <p>2022 - Present</p>
                    </header>
                    <div>
                      <p>Fixing bugs in web apss</p>
                      <p>
                        Doing projects for clients using javascript and react
                      </p>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
