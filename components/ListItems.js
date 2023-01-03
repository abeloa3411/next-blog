import React from "react";
import styles from "../styles/hero.module.css";
import { AiOutlineArrowRight } from "react-icons/ai";

const ListItems = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => {
        return (
          <div key={post.id} className={styles.card}>
            <div className={styles.card__content}>
              <div className={styles.card__content__title}>
                <h1>{post.title}</h1>
              </div>
              <div className={styles.card__content__rtime}>5 min read</div>
              <div className={styles.card__content__description}>
                {post.description}
              </div>
              <div></div>
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
                src={post.imgLink}
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
