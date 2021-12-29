import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

const IntroWrapper = styled.h1`
  text-align: center;
  font-size: 1.5em;
  font-weight: bold;
  color: #444;
`;

const NameWrapper = styled.h2`
  text-align: center;
  font-size: 2.5em;
  font-weight: bold;
  color: #444;
`;

const StackWrapper = styled.h2`
  text-align: center;
  font-size: 0.85em;
  color: #444;
`;

const Intro = () => {
  const styles = useSpring({
    from: { y: 300 },
    config: { duration: 1000 },
    loop: {
      y: 0,
    },
  });

  return (
    <div>
      <IntroWrapper>Hello, My name is</IntroWrapper>
      <NameWrapper>
        <animated.h2
          style={{
            ...styles,
          }}
        >
          Dinesh Babu Manoharan
        </animated.h2>
      </NameWrapper>
      <StackWrapper>Full Stack Developer</StackWrapper>
    </div>
  );
};

export default Intro;
