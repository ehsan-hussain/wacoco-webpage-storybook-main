import React from "react";
import styled from "styled-components";
import TextContainer from "../TextContainer/TextContainer";
import TextInsideBox from "../TextInsideBox/TextInsideBox";
import PlaceholderImage from "../../assets/Placeholder.svg";

export default function StudentPower() {
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
            label="Student Power"
            width="739px"
            fontFamily="Inter, sans-serif"
            fontWeight="700"
            fontSize="56px"
            lineHeight="67.2px"
            letterSpacing="0.01em"
            textAlign="center"
            color="black"
          />

          <ParagraphBox>
            <TextContainer
              label="At WaCoCo, we also believe in nurturing the next generation of talent."
              width="fit-content"
              fontFamily="Inter, sans-serif"
              fontWeight="400"
              fontSize="22px"
              lineHeight="35.2px"
              letterSpacing="0.01em"
              textAlign="left"
              color="black;"
            />
            <TextContainer
              label="Through strategic partnerships with universities and educational institutions, we provide opportunities for students to gain real-world experience while contributing meaningfully to your projects."
              width="780px"
              fontFamily="Inter, sans-serif"
              fontWeight="400"
              fontSize="22px"
              lineHeight="35.2px"
              letterSpacing="0.01em"
              textAlign="left"
              color="black;"
            />
            <TextContainer
              label="It's a win-win scenario: you benefit from fresh perspectives and innovative ideas, while students gain invaluable hands-on experience."
              width="fit-content"
              fontFamily="Inter, sans-serif"
              fontWeight="400"
              fontSize="22px"
              lineHeight="35.2px"
              letterSpacing="0.01em"
              textAlign="left"
              color="black;"
            />
          </ParagraphBox>
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
const ParagraphBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
