import img5 from "../../public/ai.webp";
import img6 from "../../public/api.webp";
import img2 from "../../public/img0.png";
import img1 from "../../public/bank.webp";

const projects = [
  {
    id: 0,
    title: "Fake E-commerce api API",
    description:
      "This is a free REST api that gives you e commerce data in json format, it has authentication with json web token and a mongodb database",
    link: "https://fake-ecommerce-store-api-documentation.vercel.app",
    imgLink: img6,
  },

  {
    id: 1,
    title: "Bank api",
    description:
      "The bank system api is a REST API implemented with node js, express and mongodb. The api enables a user to do do the following: Create an account, Add funds to their accounts,transfer funds to another user's account,wnithdraw funds from their account",
    link: "https://github.com/abeloa3411/bank-system-api",
    imgLink: img1,
  },
  {
    id: 1,
    title: "AI image generator",
    description:
      "This is a simple web app that is powered by a node back-end to do all the heavy stuff, It is made with vanillar javascript and uses the open ai image generation model",
    link: "https://ai-img-gen-srdf.onrender.com",
    imgLink: img5,
  },
  {
    id: 3,
    title: "twitter bot",
    description:
      "This is a twitter  bot made using node js, it can be used to tweet directly from the command line interface",
    link: "https://www.github.com/abeloa3411/twitter-bot",
    imgLink: img2,
  },
];

export default projects;
