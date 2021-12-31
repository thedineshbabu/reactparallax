import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const RecentWorks = () => {
  return (
    <ParallaxLayer offset={3} speed={1}>
      <Wrapper>
        <h1>Recent Works</h1>
      </Wrapper>
    </ParallaxLayer>
  );
};

export default RecentWorks;
