import { useState } from "react";
import { works } from "./data";
import useWindowWidth from "./hooks/useWindowWidth";
import SingleProject from "./SingleProject";

const Works = ({ theme }) => {
  const [activeId, setActiveId] = useState(null);

  const width = useWindowWidth();

  const toggleWork = (id) => {
    let newActiveId = null;
    if (id === activeId) {
      newActiveId = null;
    } else {
      newActiveId = id;
    }
    setActiveId(newActiveId);
    return;
  };

  return (
    <div className="works">
      <div className="container">
        <div className="works__wrapper">
          <div className="works__header">
            <h1>Works</h1>
            <p>Latest projects</p>
          </div>
          <div className="works__items">
            {works.map((work) => {
              return (
                <SingleProject
                  key={work.id}
                  {...work}
                  activeId={activeId}
                  toggleWork={toggleWork}
                  width={width}
                  theme={theme}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Works;
