import React, { useRef } from "react";
import styled from "styled-components";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import About from "./components/About";
import Profile from "./components/Profile";
import Page2BG from "./components/Page2BG";
import Page3BG from "./components/Page3BG";
import Title from "./components/intro/Title";
import Name from "./components/intro/Name";
import Stack from "./components/intro/Stack";
import Arrow from "./components/images/arrow.png";
import { useSpring, animated } from "react-spring";

const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

// Little helpers ...
const url = (name, wrap = false) =>
  `${
    wrap ? "url(" : ""
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ")" : ""
  }`;

export default function App() {
  const arrowStyle = useSpring({
    loop: true,
    from: { transform: "translate3d(0,0,0)" },
    to: [
      { transform: "translate3d(0, 10px, 0)" },
      { transform: "translate3d(0, 0, 0)" },
    ],
  });

  const parallax = useRef(null);
  return (
    <div style={{ width: "100%", height: "100%", background: "#253237" }}>
      <Parallax ref={parallax} pages={4}>
        <ParallaxLayer
          offset={0}
          speed={1}
          onClick={() => parallax.current.scrollTo(1)}
        />

        <Title />

        <Name />

        <Profile />

        <Stack />

        <Page2BG />

        <Page3BG />

        <ParallaxLayer
          offset={0}
          speed={0}
          factor={3}
          style={{
            backgroundImage: url("stars", true),
            backgroundSize: "cover",
          }}
        />

        <ParallaxLayer
          offset={1.3}
          speed={-0.3}
          style={{ pointerEvents: "none" }}
        >
          <img
            src={url("satellite4")}
            alt="cloud"
            style={{ width: "15%", marginLeft: "70%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <img
            src={url("cloud")}
            alt="cloud"
            style={{ display: "block", width: "20%", marginLeft: "55%" }}
          />
          <img
            src={url("cloud")}
            alt="cloud"
            style={{ display: "block", width: "10%", marginLeft: "15%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img
            src={url("cloud")}
            alt="cloud"
            style={{ display: "block", width: "20%", marginLeft: "70%" }}
          />
          <img
            src={url("cloud")}
            alt="cloud"
            style={{ display: "block", width: "20%", marginLeft: "40%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <img
            src={url("cloud")}
            alt="cloud"
            style={{ display: "block", width: "10%", marginLeft: "10%" }}
          />
          <img
            src={url("cloud")}
            alt="cloud"
            style={{ display: "block", width: "20%", marginLeft: "75%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <img
            src={url("cloud")}
            alt="cloud"
            style={{ display: "block", width: "20%", marginLeft: "60%" }}
          />
          <img
            src={url("cloud")}
            alt="cloud"
            style={{ display: "block", width: "25%", marginLeft: "30%" }}
          />
          <img
            src={url("cloud")}
            alt="cloud"
            style={{ display: "block", width: "10%", marginLeft: "80%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
          <img
            src={url("cloud")}
            alt="cloud"
            style={{ display: "block", width: "20%", marginLeft: "5%" }}
          />
          <img
            src={url("cloud")}
            alt="cloud"
            style={{ display: "block", width: "15%", marginLeft: "75%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2.5}
          speed={-0.4}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
          }}
        >
          <img src={url("earth")} style={{ width: "60%" }} alt="cloud" />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0.3}
          style={{
            backgroundSize: "80%",
            backgroundPosition: "center",
            backgroundImage: url("clients", true),
          }}
        />

        <ParallaxLayer
          offset={0}
          speed={7}
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
            onClick={() => parallax.current.scrollTo(1)}
          ></animated.img>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(2)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AboutWrapper>
            <About />
          </AboutWrapper>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(3)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={url("bash")} style={{ width: "40%" }} alt="bash" />
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={-0}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => parallax.current.scrollTo(0)}
        >
          <img src={url("clients-main")} style={{ width: "40%" }} alt="cmain" />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
