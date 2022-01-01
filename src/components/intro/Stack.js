import React from "react";
import styled from "styled-components";
import { ParallaxLayer } from "@react-spring/parallax";

const H2Wrapper = styled.h2`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: #00cba9;
  padding-top: 9%;
  @media (max-width: 1024px) {
    padding-top: 10%;
  }
  @media (max-width: 400px) {
    padding-top: 20%;
  }
`;

const Stack = () => {
  return (
    <ParallaxLayer offset={3} speed={1}>
      <H2Wrapper>Full Stack Developer</H2Wrapper>
    </ParallaxLayer>
  );
};

export default Stack;
