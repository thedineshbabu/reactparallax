import React from "react";
import styled from "styled-components";
import { ParallaxLayer } from "@react-spring/parallax";

const NameWrapper = styled.h2`
  text-align: center;
  font-size: 28px;
  font-weight: bold;
  color: #444;
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
