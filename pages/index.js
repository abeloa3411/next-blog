import Hero from "../components/Hero";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("data", "blog"));

  const posts = files.map((fileName) => {
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

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>home</title>
      </Head>
      <Hero posts={posts} />
    </>
  );
}
