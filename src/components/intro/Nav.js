import React from "react";
import styled from "styled-components";
import { ParallaxLayer } from "@react-spring/parallax";

const IntroButton = styled.button`
  background: transparent;
  border: none;
  color: #000;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0.5rem 1rem;
  cursor: pointer;
`;

const Nav = ({ parallax }) => {
  return (
    <ParallaxLayer
      offset={0}
      speed={4}
      onClick={() => parallax.current.scrollTo(1)}
      style={{
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
      }}
    ></ParallaxLayer>
  );
};

export default Nav;
