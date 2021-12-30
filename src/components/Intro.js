import React from "react";
import styled from "styled-components";

// const IntroWrapper = styled.h1`
//   text-align: center;
//   font-size: 1.5em;
//   font-weight: bold;
//   color: #444;
// `;

// const NameWrapper = styled.h2`
//   text-align: center;
//   font-size: 2.5em;
//   font-weight: bold;
//   color: #444;
// `;

const StackWrapper = styled.h2`
  text-align: center;
  font-size: 0.85em;
  color: #444;
`;

const Intro = () => {
  return (
    <div>
      <StackWrapper>Full Stack Developer</StackWrapper>
      <button type="button" onClick={() => alert("clicked")}>
        Click Me
      </button>
    </div>
  );
};

export default Intro;
