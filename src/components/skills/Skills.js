import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";

const Skills = () => {
  return (
    <ParallaxLayer
      offset={2}
      speed={1}
      style={{
        backgroundColor: "#777",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    ></ParallaxLayer>
  );
};

export default Skills;
