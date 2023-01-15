import React from "react";
import styles from "../styles/hero.module.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";

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
              <div className={styles.card__content__rtime}>
                {post.frontmatter.rTime} read
              </div>
              <div className={styles.card__content__description}>
                {post.frontmatter.exerpt}
              </div>
              <div>{post.frontmatter.tags.map((item) => `#${item}`)}</div>
              <div className={styles.card__link}>
                <Link href={`/blogpage/${post.slug}`}>Read More</Link>
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
