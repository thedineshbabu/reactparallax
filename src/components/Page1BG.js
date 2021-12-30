import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";

const Page1BG = () => {
  return (
    <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: "#FFF" }} />
  );
};

export default Page1BG;