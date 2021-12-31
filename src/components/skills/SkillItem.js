import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  margin: 2% 2% 2% 2%;
`;

const ImgWrapper = styled.img`
        width: 75px;
        height: 75px;
        hover={{
                transform: "scale(1.1)",
                transition: "transform 0.5s ease-in-out",
                cursor: "pointer",
        }}
`;

const SkillItem = ({ data }) => {
  return (
    <>
      {data.map((item, index) => {
        return (
          <Wrapper key={index}>
            <ImgWrapper src={item.src} alt={item.name} />
          </Wrapper>
        );
      })}
    </>
  );
};

export default SkillItem;
