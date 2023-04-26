import { nanoid } from "nanoid";

export const links = ["about", "skills", "works", "contacts"];

export const works = [
  {
    name: "COMFYSHOP",
    technologies: ["react", "css"],
    description:
      "Furniture shop, builded with react and it's futures like react-redux, react-router e.t.c. It has login component, adaptive cart, which is maintaned to save items between sessions, filters for products and payment proccesor. ",
    id: nanoid(),
    type: "E-commerce shop",
    pageLink: "https://comfysloth-eshop.netlify.app/",
    codeLink: "https://github.com/Oryatory/ComfySloth",
  },
  {
    name: "JOBSTER",
    technologies: ["react", "css"],
    description:
      "Job tracking application, builded with react and it's futures like react-redux, react-router e.t.c. The function it serves is maintaining your inteviews. It has login/logout section(with an option to login as test user), some charts and categories to track your job interviews.",
    id: nanoid(),
    type: "Job-tracking app",
    pageLink: "https://jobsternew.netlify.app/",
    codeLink: "https://github.com/Oryatory/Jobster/",
  },
  {
    name: "MOVIES DB",
    technologies: ["react", "css"],
    description:
      "That's a pet project, that was build for searching movies from OMDBApi. Basic design, but usefull functionality.",
    id: nanoid(),
    type: "Movie search",
    pageLink: "https://main--movies-dbpet.netlify.app/",
    codeLink: "https://github.com/Oryatory/MoviesDB",
  },

  {
    name: "FIT LINE",
    technologies: ["js", "scss"],
    description:
      "That's a pet project I build to train my skills with native-js, BEM and adaptive-layout. It has some basic futures such as sliders(which is adaptive to some screen), modal-windows and timers.  ",
    id: nanoid(),
    type: "Landing page",
    pageLink: "https://oryatory.github.io/Fit-Line/",
    codeLink: "https://github.com/Oryatory/Fit-Line",
  },
];
