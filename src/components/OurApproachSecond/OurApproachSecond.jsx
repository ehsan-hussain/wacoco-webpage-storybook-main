import React from "react";
import styled from "styled-components";
import TextContainer from "../TextContainer/TextContainer";
import TextInsideBox from "../TextInsideBox/TextInsideBox";

export default function OurApproachSecond() {
  return (
    <Container>
      <FlexBox>
        <TextContainer
          label="Our Approach"
          width="fit-content"
          fontFamily="Inter, sans-serif"
          fontWeight="700"
          fontSize="56px"
          lineHeight="67.2px"
          letterSpacing="0.01em"
          textAlign="center"
        />
        <TextContainer
          label="Crafting Solutions, Empowering Visions"
          width="fit-content"
          fontFamily="Inter, sans-serif"
          fontWeight="400"
          fontSize="32px"
          lineHeight="38.4px"
          letterSpacing="0.01em"
          textAlign="center"
        />
      </FlexBox>

      <FlexBoxForTextInsideBoxGapFix>
        <FlexBoxForTextInsideBox>
          <TextInsideBox
            width="637px"
            height="600px"
            radius="40px"
            border="2px solid #979797"
            padding="40px"
            gap="30px"
            justifyContent="center"
            backgroundColor="transparent"
          >
            <FlexBox>
              <TextContainer
                label="Understanding Your Needs"
                width="540px"
                fontFamily="Inter, sans-serif"
                fontWeight="700"
                fontSize="42px"
                lineHeight="50.4px"
                letterSpacing="0.01em"
                textAlign="center"
              />
              <TextContainer
                label="The journey begins with a simple conversation. You describe your project, and we listen attentively, asking the right questions to ensure we grasp your requirements thoroughly."
                width="550px"
                fontFamily="Inter, sans-serif"
                fontWeight="400"
                fontSize="22px"
                lineHeight="26.4px"
                letterSpacing="0.01em"
                textAlign="left"
              />
            </FlexBox>
          </TextInsideBox>

          <TextInsideBox
            width="637px"
            height="600px"
            radius="40px"
            border="2px solid #979797"
            padding="40px"
            justifyContent="center"
            gap="30px"
            backgroundColor="transparent"
          >
            <FlexBox>
              <TextContainer
                label="Tailored Solutions"
                width="540px"
                fontFamily="Inter, sans-serif"
                fontWeight="700"
                fontSize="42px"
                lineHeight="50.4px"
                letterSpacing="0.01em"
                textAlign="center"
              />
              <TextContainer
                label="Armed with a clear understanding of your goals, our team of seasoned professionals crafts bespoke solutions tailored to your specific needs. We believe in delivering not just software, but solutions that drive your business forward."
                width="520px"
                fontFamily="Inter, sans-serif"
                fontWeight="400"
                fontSize="22px"
                lineHeight="26.4px"
                letterSpacing="0.01em"
                textAlign="left"
              />
            </FlexBox>
          </TextInsideBox>
        </FlexBoxForTextInsideBox>

        <FlexBoxForTextInsideBox>
          <TextInsideBox
            width="637px"
            height="600px"
            radius="40px"
            border="2px solid #979797"
            padding="40px"
            justifyContent="center"
            gap="30px"
            backgroundColor="transparent"
          >
            <FlexBox>
              <TextContainer
                label="Transparent Collaboration"
                width="540px"
                fontFamily="Inter, sans-serif"
                fontWeight="700"
                fontSize="42px"
                lineHeight="50.4px"
                letterSpacing="0.01em"
                textAlign="center"
              />
              <TextContainer
                label="Communication is key. Throughout the development process, we keep you informed every step of the way. You'll have access to progress updates, milestones, and opportunities for feedback, ensuring your vision remains at the forefront."
                width="520px"
                fontFamily="Inter, sans-serif"
                fontWeight="400"
                fontSize="22px"
                lineHeight="26.4px"
                letterSpacing="0.01em"
                textAlign="left"
              />
            </FlexBox>
          </TextInsideBox>

          <TextInsideBox
            width="637px"
            height="600px"
            radius="40px"
            border="2px solid #979797"
            justifyContent="center"
            padding="40px"
            gap="30px"
            backgroundColor="transparent"
          >
            <FlexBox>
              <TextContainer
                label="Expert Guidance"
                width="540px"
                fontFamily="Inter, sans-serif"
                fontWeight="700"
                fontSize="42px"
                lineHeight="50.4px"
                letterSpacing="0.01em"
                textAlign="center"
              />
              <TextContainer
                label="With years of collective experience under our belt, we bring a wealth of expertise to the table. From cutting-edge technologies to industry best practices, rest assured that your project is in capable hands."
                width="500px"
                fontFamily="Inter, sans-serif"
                fontWeight="400"
                fontSize="22px"
                lineHeight="26.4px"
                letterSpacing="0.01em"
                textAlign="left"
              />
            </FlexBox>
          </TextInsideBox>
        </FlexBoxForTextInsideBox>
      </FlexBoxForTextInsideBoxGapFix>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  background-color: #424242;
  padding: 411px 104px 240px 104px;
  gap: 100px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;
const FlexBoxForTextInsideBox = styled.div`
  display: flex;
  gap: 30px;
`;
const FlexBoxForTextInsideBoxGapFix = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
