import img1 from "../../public/liqour.webp";
import img5 from "../../public/ai.webp";
import img6 from "../../public/api.webp";

const projects = [
  {
    id: 0,
    title: "Fake E-commerce api API",
    description:
      "This is a free REST api that gives you e commerce data in json format, it has authentication with json web token and a mongodb database",
    link: "https://github.com/abeloa3411/fake-ecommerce-store-api",
    imgLink: img6,
  },

  {
    id: 1,
    title: "AI image generator",
    description:
      "This is a simple web app that is powered by a node back-end to do all the heavy stuff, It is made with vanillar javascript and uses the open ai image generation model",
    link: "https://uradi-nation.netlify.app",
    imgLink: img5,
  },
  {
    id: 2,
    title: "liqour-mart",
    description:
      "This project is made using react on the front-end and uses google firebase for authentication, It also uses react useContext for the complex state management that it requires",
    link: "liqour-mart.web.app",
    imgLink: img1,
  },
];

export default projects;
