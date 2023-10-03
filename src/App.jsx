import Header from "./Header";
import About from "./About";
import Skills from "./Skills";
import MarqueeComponent from "./MarqueeComponent";
import Background from "./Background";
import Works from "./Works";
import Worker from "./Worker";
import Contacts from "./Contacts";
import { useState, useEffect } from "react";
import React from "react";

const getStorageTheme = () => {
  let theme = "light-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};

function App() {
  const [theme, setTheme] = useState(getStorageTheme());

  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const loader = document.querySelector(".loader");
    loader.style.opacity = 0;
    loader.style.position = "absolute";
    // loader.remove();

    const root = document.getElementById("root");
    // console.log(root);
    root.style.opacity = 1;
  }, []);

  return (
    <>
      <Background theme={theme} position={"fixed"} />
      <Header
        toggleTheme={toggleTheme}
        getStorageTheme={getStorageTheme}
        theme={theme}
      />

      <About />
      <MarqueeComponent />

      <Skills />

      <Works theme={theme} />

      <Worker theme={theme} />
      <Contacts />
    </>
  );
}

export default App;
