import React from "react";
import styled from "styled-components";
import { ParallaxLayer } from "@react-spring/parallax";

const NameWrapper = styled.h1`
  text-align: center;
  font-weight: bold;
  margin-top: 100px;
`;

const Name = () => {
  return (
    <ParallaxLayer
      offset={0}
      speed={3}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <NameWrapper>Dinesh Babu Manoharan</NameWrapper>
    </ParallaxLayer>
  );
};

export default Name;
