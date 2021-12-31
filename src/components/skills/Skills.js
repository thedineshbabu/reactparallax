import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import SkillItem from "./SkillItem";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
  margin: 2% 2% 2% 2%;
`;

const data = [
  {
    name: "HTML",
    level: "90%",
    src: "https://img.icons8.com/color/48/000000/html-5.png",
  },
  {
    name: "CSS",
    level: "90%",
    src: "https://img.icons8.com/color/48/000000/css3.png",
  },
  {
    name: "JavaScript",
    level: "90%",
    src: "https://img.icons8.com/color/48/000000/javascript.png",
  },
  {
    name: "Redux",
    level: "90%",
    src: "https://img.icons8.com/color/48/000000/redux.png",
  },
  {
    name: "Node.js",
    level: "90%",
    src: "https://img.icons8.com/color/48/000000/nodejs.png",
  },
  {
    name: "Express",
    level: "90%",
    src: "https://img.icons8.com/color/48/000000/express.png",
  },
  {
    name: "MongoDB",
    level: "90%",
    src: "https://img.icons8.com/color/48/000000/mongodb.png",
  },
  {
    name: "MySQL",
    level: "90%",
    src: "https://img.icons8.com/color/48/000000/mysql.png",
  },
  {
    name: "Git",
    level: "90%",
    src: "https://img.icons8.com/color/48/000000/git.png",
  },
  {
    name: "GitHub",
    level: "90%",
    src: "https://img.icons8.com/color/48/000000/github.png",
  },
  {
    name: "GitLab",
    level: "90%",
    src: "https://img.icons8.com/color/48/000000/gitlab.png",
  },
  {
    name: "HTML",
    level: "90%",
    src: "https://img.icons8.com/color/48/000000/html-5.png",
  },
  {
    name: "CSS",
    level: "90%",
    src: "https://img.icons8.com/color/48/000000/css3.png",
  },
  {
    name: "JavaScript",
    level: "90%",
    src: "https://img.icons8.com/color/48/000000/javascript.png",
  },
  {
    name: "Redux",
    level: "90%",
    src: "https://img.icons8.com/color/48/000000/redux.png",
  },
  {
    name: "Node.js",
    level: "90%",
    src: "https://img.icons8.com/color/48/000000/nodejs.png",
  },
  {
    name: "Express",
    level: "90%",
    src: "https://img.icons8.com/color/48/000000/express.png",
  },
  {
    name: "MongoDB",
    level: "90%",
    src: "https://img.icons8.com/color/48/000000/mongodb.png",
  },
  {
    name: "MySQL",
    level: "90%",
    src: "https://img.icons8.com/color/48/000000/mysql.png",
  },
  {
    name: "Git",
    level: "90%",
    src: "https://img.icons8.com/color/48/000000/git.png",
  },
  {
    name: "GitHub",
    level: "90%",
    src: "https://img.icons8.com/color/48/000000/github.png",
  },
  {
    name: "GitLab",
    level: "90%",
    src: "https://img.icons8.com/color/48/000000/gitlab.png",
  },
  {
    name: "HTML",
    level: "90%",
    src: "https://img.icons8.com/color/48/000000/html-5.png",
  },
  {
    name: "CSS",
    level: "90%",
    src: "https://img.icons8.com/color/48/000000/css3.png",
  },
  {
    name: "JavaScript",
    level: "90%",
    src: "https://img.icons8.com/color/48/000000/javascript.png",
  },
  {
    name: "Redux",
    level: "90%",
    src: "https://img.icons8.com/color/48/000000/redux.png",
  },
  {
    name: "Node.js",
    level: "90%",
    src: "https://img.icons8.com/color/48/000000/nodejs.png",
  },
  {
    name: "Express",
    level: "90%",
    src: "https://img.icons8.com/color/48/000000/express.png",
  },
  {
    name: "MongoDB",
    level: "90%",
    src: "https://img.icons8.com/color/48/000000/mongodb.png",
  },
  {
    name: "MySQL",
    level: "90%",
    src: "https://img.icons8.com/color/48/000000/mysql.png",
  },
  {
    name: "Git",
    level: "90%",
    src: "https://img.icons8.com/color/48/000000/git.png",
  },
  {
    name: "GitHub",
    level: "90%",
    src: "https://img.icons8.com/color/48/000000/github.png",
  },
  {
    name: "GitLab",
    level: "90%",
    src: "https://img.icons8.com/color/48/000000/gitlab.png",
  },
  {
    name: "HTML",
    level: "90%",
    src: "https://img.icons8.com/color/48/000000/html-5.png",
  },
  {
    name: "CSS",
    level: "90%",
    src: "https://img.icons8.com/color/48/000000/css3.png",
  },
  {
    name: "JavaScript",
    level: "90%",
    src: "https://img.icons8.com/color/48/000000/javascript.png",
  },
  {
    name: "Redux",
    level: "90%",
    src: "https://img.icons8.com/color/48/000000/redux.png",
  },
  {
    name: "Node.js",
    level: "90%",
    src: "https://img.icons8.com/color/48/000000/nodejs.png",
  },
  {
    name: "Express",
    level: "90%",
    src: "https://img.icons8.com/color/48/000000/express.png",
  },
  {
    name: "MongoDB",
    level: "90%",
    src: "https://img.icons8.com/color/48/000000/mongodb.png",
  },
  {
    name: "MySQL",
    level: "90%",
    src: "https://img.icons8.com/color/48/000000/mysql.png",
  },
  {
    name: "Git",
    level: "90%",
    src: "https://img.icons8.com/color/48/000000/git.png",
  },
  {
    name: "GitHub",
    level: "90%",
    src: "https://img.icons8.com/color/48/000000/github.png",
  },
  {
    name: "GitLab",
    level: "90%",
    src: "https://img.icons8.com/color/48/000000/gitlab.png",
  },
];

const Skills = () => {
  return (
    <Wrapper>
      <SkillItem data={data} />
    </Wrapper>
  );
};

export default Skills;
