import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Profile from "./components/Profile";
import Title from "./components/intro/Title";
import Name from "./components/intro/Name";
import Stack from "./components/intro/Stack";
import Arrow from "./components/images/arrow.png";
import { useSpring, animated } from "react-spring";
import About from "./components/about/About";
import DColor from "./components/images/dfl.svg";
import IG from "./components/ig.svg";
import GIT from "./components/git.svg";
import LNKIN from "./components/linkedin.svg";
import EMAIL from "./components/email.svg";
import Skills from "./components/skills/Skills";
import RecentWorks from "./components/RecentWorks/RecentWorks";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import "./App.css";
const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.bgColor};
    color: ${({ theme }) => theme.textColor};
    font-family: 'Poppins', sans-serif;
    font-size: 22px;
    margin: 0;
    @media (max-width: 1024px) {
      font-size: 15px;
    }
    @media (max-width: 400px) {
      font-size: 10px;
    }
  }
`;

const { useState, useRef } = React;

export default function App() {
  const [theme, setTheme] = useState("light");
  const isDark = theme === "dark";

  const toggleTheme = () => setTheme(isDark ? "light" : "dark");

  const lightTheme = {
    bgColor: "#fff",
    textColor: "#444",
  };

  const darkTheme = {
    bgColor: "#444",
    textColor: "#fff",
  };

  const arrowStyle = useSpring({
    loop: true,
    from: { transform: "translate3d(0,0,0)" },
    to: [
      { transform: "translate3d(0, 10px, 0)" },
      { transform: "translate3d(0, 0, 0)" },
    ],
  });

  const lastArrow = useSpring({
    from: { rotateZ: 0 },
    to: { rotateZ: 180 },
  });

  const downloadFile = () => {
    window.open(
      "https://drive.google.com/file/d/17MQjUdgUbwX7VOTaJOMwxdTlO2L3d3IU/view?usp=sharing"
    );
  };

  const parallax = useRef(null);
  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme} setTheme={setTheme}>
      <GlobalStyle />
      <div style={{ width: "100%", height: "100%", background: "#253237" }}>
        <Parallax ref={parallax} pages={4}>
          <Title />
          <Name />
          <Profile />
          <Stack />
          <About />
          <RecentWorks />

          <ParallaxLayer
            offset={0}
            speed={7}
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
            }}
          ></ParallaxLayer>

          <ParallaxLayer
            offset={0}
            speed={7}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              flexDirection: "column",
            }}
          >
            <animated.div
              style={{
                display: "flex",
                flexDirection: "row",
                cursor: "pointer",
                justifyContent: "space-evenly",
                alignItems: "space-evenly",
                position: "absolute",
                bottom: "20%",
              }}
            >
              <animated.img
                src={EMAIL}
                style={{
                  width: "25px",
                  height: "25px",
                  cursor: "pointer",
                }}
              />

              <animated.img
                src={IG}
                style={{
                  width: "25px",
                  height: "25px",
                  cursor: "pointer",
                  paddingLeft: "25%",
                }}
              />

              <animated.img
                src={GIT}
                style={{
                  width: "25px",
                  height: "25px",
                  cursor: "pointer",
                  paddingLeft: "25%",
                }}
              />

              <animated.img
                src={LNKIN}
                style={{
                  width: "25px",
                  height: "25px",
                  cursor: "pointer",
                  paddingLeft: "25%",
                }}
              />
            </animated.div>
            <animated.img
              src={Arrow}
              style={{
                cursor: "pointer",
                width: "25px",
                height: "25px",
                marginBottom: "5%",
                ...arrowStyle,
              }}
              alt="arrow"
              onClick={() => parallax.current.scrollTo(1)}
            ></animated.img>
            <animated.h1
              style={{
                fontSize: "20px",
                color: "#59b256",
                top: "10px",
                right: "30px",
                position: "absolute",
                cursor: "pointer",
              }}
            >
              <animated.span onClick={toggleTheme}>
                {isDark ? (
                  <animated.h3> ☀️ </animated.h3>
                ) : (
                  <animated.h3> 🌙 </animated.h3>
                )}
              </animated.span>
            </animated.h1>
          </ParallaxLayer>

          <ParallaxLayer
            offset={1}
            speed={3}
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
            }}
          >
            <animated.img
              src={DColor}
              style={{
                cursor: "pointer",
                width: "25px",
                height: "25px",
                top: "5%",
                right: "50%",
                position: "absolute",
              }}
              alt="Download"
              onClick={downloadFile}
              title="Download Resume"
            ></animated.img>
            <animated.img
              src={Arrow}
              style={{
                cursor: "pointer",
                width: "25px",
                height: "25px",
                position: "absolute",
                right: "30px",
                bottom: "10%",
                ...arrowStyle,
              }}
              alt="arrow"
              onClick={() => parallax.current.scrollTo(2)}
            ></animated.img>
          </ParallaxLayer>

          <ParallaxLayer
            offset={2}
            speed={3}
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
            }}
          >
            <Skills />

            <animated.img
              src={Arrow}
              style={{
                cursor: "pointer",
                width: "25px",
                height: "25px",
                position: "absolute",
                right: "30px",
                bottom: "10%",
                ...arrowStyle,
              }}
              alt="arrow"
              onClick={() => parallax.current.scrollTo(3)}
            ></animated.img>
          </ParallaxLayer>

          <ParallaxLayer
            offset={3}
            speed={3}
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <animated.img
              src={Arrow}
              style={{
                cursor: "pointer",
                width: "25px",
                height: "25px",
                marginTop: "2%",
                ...arrowStyle,
                ...lastArrow,
              }}
              alt="arrow"
              onClick={() => parallax.current.scrollTo(0)}
            ></animated.img>
          </ParallaxLayer>
        </Parallax>
      </div>
    </ThemeProvider>
  );
}
