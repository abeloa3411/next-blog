import React from "react";
import styles from "../styles/hero.module.css";
import { posts } from "../data/blog/blogs";
import ListItems from "./ListItems";

function Hero() {
  return (
    <>
      <div className={styles.hero__container}>
        <div className={styles.hero__center}>
          <div>
            <h2 className={styles.hero__title}>
              Hey there, I'm abel wanyonyi, a web developer, technical writter
              and a big fan of the tech community
            </h2>
          </div>
          <div className={styles.work__container}>
            <div className={styles.paragraph__container}>
              <p>
                Thank you for visiting my blog where i share my knowledge and
                thoughts on web development, technical writting and other
                related technologies. You can also comment and share your
                experiences and thaughts here, Thanks for stopping by
              </p>
            </div>
          </div>
          <div className={styles.card__container}>
            <ListItems posts={posts} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
