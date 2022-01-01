import React from "react";
import styled from "styled-components";
import { ParallaxLayer } from "@react-spring/parallax";

const H4Wrapper = styled.h4`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Title = () => {
  return (
    <ParallaxLayer offset={0} speed={1}>
      <H4Wrapper>Hello, My name is</H4Wrapper>
    </ParallaxLayer>
  );
};

export default Title;
