import React from "react";
import styled from "styled-components";
import { ParallaxLayer } from "@react-spring/parallax";

const StackWrapper = styled.h2`
  text-align: center;
  font-size: 1.5rem;
  color: #444;
  padding-top: 10%;
`;

const Stack = () => {
  return (
    <ParallaxLayer
      offset={0}
      speed={2}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <StackWrapper>Full Stack Developer</StackWrapper>
    </ParallaxLayer>
  );
};

export default Stack;
