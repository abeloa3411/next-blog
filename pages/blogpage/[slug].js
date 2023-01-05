import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import styles from "../../styles/blogpage.module.css";

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("data", "blog"));

  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const readFile = fs.readFileSync(
    path.join("data", "blog", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(readFile);
  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}

export default function BlogPage({
  frontmatter: { title, date, tags },
  slug,
  content,
}) {
  return (
    <div className="container">
      <div className="inner__container">
        <div className="header">
          <header>
            <h1 className="post-title">{title}</h1>
            <p className="post-date">
              <strong>{date}</strong>
            </p>
          </header>
        </div>
        <div>
          <div>
            Tags:
            <strong className="tags">{tags.map((item) => `${item}  `)}</strong>
          </div>
          <div className="post-body">
            <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
