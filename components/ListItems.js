import React from "react";
import styles from "../styles/hero.module.css";
import { AiOutlineArrowRight } from "react-icons/ai";

const ListItems = ({ posts }) => {
  return (
    <div>
      {posts.map((post, i) => {
        return (
          <div key={i} className={styles.card}>
            <div className={styles.card__content}>
              <div className={styles.card__content__title}>
                <h1>{post.frontmatter.title}</h1>
              </div>
              <div className={styles.card__content__rtime}>5 min read</div>
              <div className={styles.card__content__description}>
                {post.frontmatter.exerpt}
              </div>
              <div>{post.frontmatter.tags.map((item) => `#${item}`)}</div>
              <div className={styles.card__link}>
                <a
                  href={post.link}
                  referrerPolicy="no-referrer"
                  target="_blank"
                  rel="noopener"
                >
                  Read more
                </a>
                <AiOutlineArrowRight />
              </div>
            </div>
            <div className={styles.card__img__container}>
              <img
                className={styles.img}
                src={post.frontmatter.cover_image}
                alt="Blog content"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListItems;
