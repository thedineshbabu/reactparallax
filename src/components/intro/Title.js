import React from "react";
import styled from "styled-components";
import { ParallaxLayer } from "@react-spring/parallax";

const IntroWrapper = styled.h1`
  text-align: center;
  font-size: 15px;
  font-weight: bold;
`;

const Title = () => {
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
      <IntroWrapper>Hello, My name is</IntroWrapper>
    </ParallaxLayer>
  );
};

export default Title;
