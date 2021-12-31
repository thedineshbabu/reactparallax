import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import SkillItem from "./SkillItem";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Skills = () => {
  return (
    <ParallaxLayer offset={2} speed={1}>
      <Wrapper>
        <SkillItem />
      </Wrapper>
    </ParallaxLayer>
  );
};

export default Skills;
