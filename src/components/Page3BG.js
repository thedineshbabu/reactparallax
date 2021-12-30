import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import JavaScript from "./images/javascript.svg";
import Babel from "./images/babel.svg";
import AzFunc from "./images/azfunc.svg";

const Page3BG = () => {
  return (
    <div>
      <ParallaxLayer
        offset={2}
        speed={1}
        style={{
          backgroundColor: "#777",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      ></ParallaxLayer>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          width: "100%",
          margin: "20% 20% 20% 20%",
          alignItems: "stretch",
        }}
      >
        <div style={{ width: "100%", height: "100%", flex: "1" }}>
          <ParallaxLayer offset={2} speed={5}>
            <img src={JavaScript} alt="javascript" style={{ width: "5%" }} />
          </ParallaxLayer>
        </div>

        <div style={{ width: "100%", height: "100%", flex: "1" }}>
          <ParallaxLayer offset={2} speed={3}>
            <img src={Babel} alt="babel" style={{ width: "5%" }} />
          </ParallaxLayer>
        </div>

        <div style={{ width: "100%", height: "100%", flex: "1" }}>
          <ParallaxLayer offset={2} speed={8}>
            <img src={AzFunc} alt="azfunc" style={{ width: "5%" }} />
          </ParallaxLayer>
        </div>
      </div>
    </div>
  );
};

export default Page3BG;
