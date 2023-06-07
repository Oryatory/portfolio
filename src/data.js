import { nanoid } from "nanoid";

import comfySloth from "../src/assets/images/comfySloth.png";
import jobster from "../src/assets/images/jobster.png";
import gitHubRepo from "../src/assets/images/gitHubRepo.png";
import postsApp from "../src/assets/images/postsApp.png";
import fitLine from "../src/assets/images/fitLine.png";

export const links = ["about", "skills", "works", "contacts"];

export const works = [
  {
    name: "COMFYSHOP",
    technologies: ["react", "css"],
    description:
      "Furniture shop, builded with react and it's futures like react-redux, react-router e.t.c. It has login component, adaptive cart, which is maintaned to save items between sessions, filters for products and payment proccesor. ",
    id: nanoid(),
    image: comfySloth,
    type: "E-commerce shop",
    pageLink: "https://comfysloth-eshop.netlify.app/",
    codeLink: "https://github.com/Oryatory/ComfySloth",
  },
  {
    name: "JOBSTER",
    technologies: ["react", "redux", "css"],
    description:
      "Job tracking application, builded with react and it's futures like react-redux, react-router e.t.c. The function it serves is maintaining your inteviews. It has login/logout section(with an option to login as test user), some charts and categories to track your job interviews.",
    id: nanoid(),
    image: jobster,
    type: "Job-tracking app",
    pageLink: "https://jobsternew.netlify.app/",
    codeLink: "https://github.com/Oryatory/Jobster/",
  },
  {
    name: "GIT-HUB REPO",
    technologies: ["react", "redux", "ts", "scss"],
    description:
      "That's a pet project, that was build for searching repositories using Git-Hub REST Api. This project shows my work with API and asynchronous code. ",
    id: nanoid(),
    image: gitHubRepo,
    type: "Repo search",
    pageLink: "https://github-repo-pet.vercel.app/",
    codeLink: "https://github.com/Oryatory/GitHubRepoSearch",
  },

  {
    name: "POSTS APP",
    technologies: ["react", "ts", "redux", "redux-saga", "react-bootstrap"],
    description:
      "That's a pet project, that was build as test assigment for MitraSoft company. It show's my ability to work with multiple API requests and redux store organizing. It has some features like pagination, sort and search.",
    id: nanoid(),
    image: postsApp,
    type: "Blog-post",
    pageLink: "https://mitra-soft-test-app.vercel.app/",
    codeLink: "https://github.com/Oryatory/MitraSoftTestApp",
  },

  {
    name: "FIT LINE",
    technologies: ["js", "scss"],
    description:
      "That's a pet project I build to train my skills with native-js, BEM and adaptive-layout. It has some basic futures such as sliders(which is adaptive to some screen), modal-windows and timers.  ",
    id: nanoid(),
    image: fitLine,
    type: "Landing page",
    pageLink: "https://oryatory.github.io/Fit-Line/",
    codeLink: "https://github.com/Oryatory/Fit-Line",
  },
];
