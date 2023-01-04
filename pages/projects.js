import Head from "next/head";
import React from "react";
import Projects from "../components/Projects";
import projectsData from "../data/projects/projects";

const projects = () => {
  return (
    <>
      <Head>
        <title>projects</title>
      </Head>
      <Projects projectsData={projectsData} />
    </>
  );
};

export default projects;
