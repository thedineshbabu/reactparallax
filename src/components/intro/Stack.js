import React from "react";
import styled from "styled-components";
import { ParallaxLayer } from "@react-spring/parallax";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const H2Wrapper = styled.h2`
  text-align: center;
  font-size: 20px;
  color: #59b256;
  padding-top: 210px;
`;

// const ResumeWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   padding-top: 10px;
//   font-size: 10px;
//   cursor: pointer;
// `;

const Stack = () => {
  return (
    <ParallaxLayer
      offset={0}
      speed={2}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pointerEvents: "initial",
      }}
    >
      <Wrapper>
        <H2Wrapper>Full Stack Developer</H2Wrapper>
      </Wrapper>
    </ParallaxLayer>
  );
};

export default Stack;