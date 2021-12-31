import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const SkillItem = () => {
  return (
    <Wrapper>
      <h1>Skill Item</h1>
    </Wrapper>
  );
};

export default SkillItem;
