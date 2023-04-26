// import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { TbTopologyStar3 } from "react-icons/tb";

const MarqueeComponent = () => {
  return (
    <div className="marquee__wrapper">
      <Marquee
        className="marquee-span"
        style={{
          transform: "rotate(-5deg)",
        }}
        gradient={false}
        direction="left"
        speed={100}
      >
        <div className="marquee__text">
          <span>YOUR IDEAS</span>
          <TbTopologyStar3
            className="marquee-icon"
            style={{ fontWeight: "400" }}
          />
        </div>

        <div className="marquee__text">
          <span>YOUR IDEAS</span>
          <TbTopologyStar3
            className="marquee-icon"
            style={{ fontWeight: "400" }}
          />
        </div>

        <div className="marquee__text">
          <span>YOUR IDEAS</span>
          <TbTopologyStar3
            className="marquee-icon"
            style={{ fontWeight: "400" }}
          />
        </div>
      </Marquee>
      <Marquee
        className="marquee-span"
        gradient={false}
        direction="right"
        speed={100}
      >
        <div className="marquee__text">
          <span>MY SOLUTION</span>
          <TbTopologyStar3
            className="marquee-icon"
            style={{ fontWeight: "400" }}
          />
        </div>
        <div className="marquee__text">
          <span>MY SOLUTION</span>
          <TbTopologyStar3
            className="marquee-icon"
            style={{ fontWeight: "400" }}
          />
        </div>
        <div className="marquee__text">
          <span>MY SOLUTION</span>
          <TbTopologyStar3
            className="marquee-icon"
            style={{ fontWeight: "400" }}
          />
        </div>
      </Marquee>
    </div>
  );
};
export default MarqueeComponent;
