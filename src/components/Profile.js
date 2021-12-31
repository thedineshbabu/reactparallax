import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import Avatar from "./images/me.png";

const Profile = () => {
  return (
    <ParallaxLayer
      offset={0}
      speed={1}
      style={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        paddingTop: "5%",
      }}
    >
      <img
        src={Avatar}
        alt="profile"
        width={250}
        style={{
          borderRadius: "25%",
        }}
      />
    </ParallaxLayer>
  );
};

export default Profile;
