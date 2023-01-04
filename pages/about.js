import Head from "next/head";
import React from "react";
import About from "../components/About";

const about = () => {
  return (
    <>
      <Head>
        <title>about</title>
      </Head>
      <About />
    </>
  );
};

export default about;
