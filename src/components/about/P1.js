import React from "react";
import styled from "styled-components";
import { ParallaxLayer } from "@react-spring/parallax";

const P1Wrapper = styled.p`
  margin: 0.5em 0;
  font-style: italic;
  font-weight: bold;
  max-width: 95%;
`;

const Wrapper = styled.div`
  text-align: justify;
  max-width: 95%;
  align-items: center;
  align-content: center;
  justify-content: center;
  align-self: center;
  display: flex;
  flex-direction: column;
  margin-top: 2%;
`;

const P1 = () => {
  return (
    <ParallaxLayer
      offset={1}
      speed={3}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Wrapper>
        <P1Wrapper>
          Dinesh is a full stack .NET Developer with over a decade years of
          experience working with insurance, banking, and gaming companies. He
          specializes in using .NET Core, Docker, and Kubernetes in building
          APIs, and in using React and Vue for creating UI applications.
        </P1Wrapper>
        <P1Wrapper>
          Dinesh is a Microsoft certified Azure Developer Associate. He has
          experience in various Azure Resources, like Azure Functions, AKS,
          Azure Service Bus, Azure Application Gateway, CosmosDB, App Services,
          Application Insights, etc. As part of his job, he interacts with
          various clients and teams to understand their requirements and build
          solutions for them. He actively participates in various agile
          ceremonies and has been a member of various agile teams. He involves
          himself in all phases of the development life cycle, and is a very
          good communicator. He is a very good team player and is always ready
          to learn new technologies. Dinesh works on CI/CD pipelines and has
          experience in various CI/CD tools like Azure DevOps, GitLab, Urban
          Code Deploy, etc.
        </P1Wrapper>
        <P1Wrapper>
          In his free time, Dinesh works on various projects, and enjoys
          learning new technologies and solving problems. His latest crush is on
          javascript frameworks: he is a fan of React and Vue, and he enjoys
          working with Node and Express. He plays cricket and racquetball, and
          loves to watch movies and TV shows.
        </P1Wrapper>
      </Wrapper>
    </ParallaxLayer>
  );
};

export default P1;
