import React from "react";
import styled from "styled-components";
import { ParallaxLayer } from "@react-spring/parallax";

const H1Wrapper = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding-top: 5%;
  @media (max-width: 1024px) {
    padding-top: 6%;
  }
  @media (max-width: 400px) {
    padding-top: 10%;
  }
`;

const Name = () => {
  return (
    <ParallaxLayer offset={3} speed={1}>
      <H1Wrapper>Dinesh Babu Manoharan</H1Wrapper>
    </ParallaxLayer>
  );
};

export default Name;
