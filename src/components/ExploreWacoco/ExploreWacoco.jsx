import React from "react";
import styled from "styled-components";
import TextContainer from "../TextContainer/TextContainer";
import TextInsideBox from "../TextInsideBox/TextInsideBox";
import Button from "../button/button";
import PlaceholderImage from "../../assets/Placeholder.svg";

export default function ExploreWacoco() {
  return (
    <Container>
      <TextInsideBox
        width="637px"
        height="836px"
        position="absolute"
        backgroundColor="transparent"
        top="32px"
        right="0"
        backgroundImage={PlaceholderImage}
      />
      <TextInsideBox
        width="767px"
        height="1055px"
        position="absolute"
        backgroundColor="transparent"
        top="184px"
        left="0"
        backgroundImage={PlaceholderImage}
      />

      <TextInsideBox
        width="939px"
        height="746px"
        radius="40px"
        padding="144px 100px 144px 100px"
        gap="77px"
        backgroundColor="White"
        position="relative"
        top="339px"
      >
        <FlexBox>
          <TextContainer
            label="Explore WaCoCo"
            width="739px"
            fontFamily="Inter, sans-serif"
            fontWeight="700"
            fontSize="56px"
            lineHeight="67.2px"
            letterSpacing="0.01em"
            textAlign="center"
            color="black"
            
          />
          <TextContainer
            label="Whether you're a business seeking cutting-edge software solutions or a student eager to gain hands-on experience, WaCoCo welcomes you to explore our offerings and join us in shaping the future of technology. Together, let's turn visions into realities and unlock the full potential of innovation."
            width="770px"
            fontFamily="Inter, sans-serif"
            fontWeight="400"
            fontSize="22px"
            lineHeight="35.2px"
            letterSpacing="0.01em"
            textAlign="left"
            color="black;"
          />
          <Button
            label={"Our Services"}
            style={{ width: 260, backgroundColor: "#424242" }}
          />
        </FlexBox>
      </TextInsideBox>
    </Container>
  );
}
const Container = styled.div`
  width: 100vw;
  height: 1548px;
  background-color: #424242;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 77px;
`;
