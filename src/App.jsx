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

  return (
    <>
      <Background theme={theme} />
      <Header toggleTheme={toggleTheme} getStorageTheme={getStorageTheme} />
      <div data-barba="container" data-barba-namespace="about">
        <About />
        <MarqueeComponent />
      </div>
      <div data-barba="container" data-barba-namespace="skills">
        <Skills />
      </div>
      <div data-barba="container" data-barba-namespace="works">
        <Works theme={theme} />
      </div>
      <Worker theme={theme} />
      <Contacts />
    </>
  );
}

export default App;
