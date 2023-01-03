import Hero from "../components/Hero";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

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
    <div>
      <Hero posts={posts} />
    </div>
  );
}
