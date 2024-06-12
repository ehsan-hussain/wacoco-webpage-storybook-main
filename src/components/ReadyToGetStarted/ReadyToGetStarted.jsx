import React from "react";
import styled from "styled-components";
import TextContainer from "../TextContainer/TextContainer";
import TextInsideBox from "../TextInsideBox/TextInsideBox";
import Button from "../button/button"
import PlaceholderImage from "../../assets/Placeholder.svg"

export default function ReadyToGetStarted() {
  return (
    <Container>
    <TextInsideBox
            width="637px"
            height="836px"
            position= "absolute"
            backgroundColor="transparent"
            top= "32px"
            right= "0"
            backgroundImage={PlaceholderImage}
          />
    <TextInsideBox
            width="767px"
            height="1055px"
            position= "absolute"
            backgroundColor="transparent"
            top= "184px"
            left= "0"
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
            justifyContent="center"

            top="339px"
          >
            <FlexBox>
              <TextContainer
                label="Ready to Get Started?"
                width="739px"
                fontFamily="Inter, sans-serif"
                fontWeight="700"
                fontSize="56px"
                lineHeight="67.2px"
                letterSpacing="0.01em"
                textAlign="center"
                color= "black"
              />
              <TextContainer
                label="Join WaCoCo today and take the first step towards a rewarding career in IT. Whether you're a seasoned pro or just starting out, we welcome students of all backgrounds and skill levels. Discover the WaCoCo difference and unlock your full potential in the world of technology."
                width="770px"
                fontFamily="Inter, sans-serif"
                fontWeight="400"
                fontSize="22px"
                lineHeight="35.2px"
                letterSpacing="0.01em"
                textAlign="center"
                color= "black;"
              />
              <Button label={"Apply"} style={{width: 260, backgroundColor: "#424242"}}/>
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