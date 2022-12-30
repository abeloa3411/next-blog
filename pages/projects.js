import React from "react";
import Projects from "../components/Projects";
import projectsData from "../data/projects/projects";

const projects = () => {
  return (
    <>
      <Projects projectsData={projectsData} />
    </>
  );
};

export default projects;
