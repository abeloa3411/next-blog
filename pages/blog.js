import React from "react";
import Blog from "../components/Blog";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("data", "blog"));

  const posts = files.map((fileName) => {
    //get slug
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(
      path.join("data", "blog", fileName),
      "utf-8"
    );

    const { data: frontmatter } = matter(readFile);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}

export default function blog({ posts }) {
  return (
    <>
      <Head>
        <title>blog</title>
      </Head>
      <Blog data={posts} />
    </>
  );
}
