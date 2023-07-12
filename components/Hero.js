import React from "react";
import styles from "../styles/hero.module.css";
import ListItems from "./ListItems";

function Hero({ posts }) {
  return (
    <>
      <div className={styles.hero__container}>
        <div className={styles.hero__center}>
          <div className={styles.work__container}>
            <div className={styles.main__text}>
              <h2>Let's talk about Tech.</h2>
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
