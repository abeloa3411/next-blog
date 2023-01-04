import React from "react";
import styles from "../styles/hero.module.css";
import ListItems from "./ListItems";

const Blog = ({ data }) => {
  return (
    <>
      <div className={styles.hero__container} style={{ paddingBottom: "3rem" }}>
        <div className={styles.hero__center}>
          <div>
            <header>
              <h1>Blogs</h1>
            </header>
          </div>
          <div className={styles.card__container}>
            <ListItems posts={data} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
