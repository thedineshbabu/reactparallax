import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";

const Page2BG = () => {
  return (
    <ParallaxLayer
      offset={1}
      speed={1}
      style={{ backgroundColor: "#805E73" }}
    />
  );
};

export default Page2BG;
