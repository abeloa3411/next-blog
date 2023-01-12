import img1 from "../../public/liqour.webp";
import img5 from "../../public/ai.webp";
import img6 from "../../public/api.webp";
import img2 from "../../public/img0.png";
import img3 from "../../public/ssg.png";

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
    title: "AI image generator",
    description:
      "This is a simple web app that is powered by a node back-end to do all the heavy stuff, It is made with vanillar javascript and uses the open ai image generation model",
    link: "https://ai-img-gen-srdf.onrender.com",
    imgLink: img5,
  },
  {
    id: 2,
    title: "Sustainable Development Goals API",
    description:
      "This API is made with node js. The goal is to convey sustainability message to as many people as possible. This api gives you all sustainable development goals and the targets to be achieved",
    link: "https://www.github.com/abeloa3411/ssg-api",
    imgLink: img3,
  },
  {
    id: 3,
    title: "twitter bot",
    description:
      "This is a twitter  bot made using node js, it can be used to tweet directly from the command line interface",
    link: "https://www.github.com/abeloa3411/twitter-bot",
    imgLink: img2,
  },
  {
    id: 5,
    title: "liqour-mart",
    description:
      "This project is made using react on the front-end and uses google firebase for authentication, It also uses react useContext for the complex state management that it requires",
    link: "https://www.liqour-mart.web.app",
    imgLink: img1,
  },
];

export default projects;
