import img1 from "../../public/liqour.webp";
import img2 from "../../public/nganya.webp";
import img3 from "../../public/liqour.webp";
import img4 from "../../public/liqour.webp";
import img5 from "../../public/ai.webp";

const projects = [
  {
    id: 2,
    title: "Nganya",
    description:
      "All the lovers of roadtrips are able to pick a van of their choice for a road trip it is made using react and tailwind css",
    link: "https://nganya.netlify.app",
    imgLink: img2,
  },
  {
    id: 1,
    title: "liqour-mart",
    description:
      "This project is made using react on the front-end and uses google firebase for authentication, It also uses react useContext for the complex state management that it requires",
    link: "liqour-mart.web.app",
    imgLink: img1,
  },
  {
    id: 3,
    title: "Store API",
    description: "web app which allows designers to showcase the",
    link: "https://exercise-tracker-simple.herokuapp.com",
    imgLink: img3,
  },

  {
    id: 4,
    title: "exercise tracker mern",
    description: "website for keeping track of your workouts",
    link: "https://exercise-tracker-simple.herokuapp.com",
    imgLink: img4,
  },
  {
    id: 5,
    title: "AI image generator",
    description:
      "This is a simple web app that is powered by a node back-end to do all the heavy stuff, It is made with vanillar javascript and uses the open ai image generation model",
    link: "https://uradi-nation.netlify.app",
    imgLink: img5,
  },
  {
    id: 6,
    title: "Store API",
    description:
      "This is a free REST api that gives you e commerce data in json format, it has authentication with json web token and a mongodb database",
    link: "https://github.com/abeloa3411",
    imgLink: img5,
  },
];

export default projects;
