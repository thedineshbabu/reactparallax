import React, { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Profile from "./components/Profile";
import Title from "./components/intro/Title";
import Name from "./components/intro/Name";
import Stack from "./components/intro/Stack";
import Arrow from "./components/images/arrow.png";
import { useSpring, animated } from "react-spring";
import P1 from "./components/about/P1";
import Page3BG from "./components/Page3BG";
import Page4BG from "./components/Page4BG";
import ParallaxPage from "./components/ParallaxPage";
import Download from "./components/images/dfiles.svg";

// const AboutWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 100%;
//   justify-content: center;
//   align-items: center;
// `;

// Little helpers ...
// const url = (name, wrap = false) =>
//   `${
//     wrap ? "url(" : ""
//   }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
//     wrap ? ")" : ""
//   }`;

export default function App() {
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
    <div style={{ width: "100%", height: "100%", background: "#253237" }}>
      <Parallax ref={parallax} pages={4}>
        <Title />
        <Name />
        <Profile />
        <Stack />
        {/* <Page2BG /> */}
        <ParallaxPage
          offset={1}
          speed={1}
          style={{ backgroundColor: "#87BCDE" }}
        />
        <P1 />
        <Page3BG />
        <Page4BG />

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
          <animated.img
            src={Download}
            style={{
              cursor: "pointer",
              width: "25px",
              height: "25px",
              marginBottom: "5%",
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
              marginBottom: "5%",
              ...arrowStyle,
            }}
            alt="arrow"
            onClick={() => parallax.current.scrollTo(1)}
          ></animated.img>
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
            src={Arrow}
            style={{
              cursor: "pointer",
              width: "25px",
              height: "25px",
              marginBottom: "5%",
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
  );
}
