import React from "react";
import styled from "styled-components";
import TextContainer from "../TextContainer/TextContainer";
import TextInsideBox from "../TextInsideBox/TextInsideBox";

export default function WhyChooseUs() {
  return (
    <Container>
      <FlexBox>
        <TextContainer
          label="Why Choose Us"
          width="fit-content"
          fontFamily="Inter, sans-serif"
          fontWeight="700"
          fontSize="56px"
          lineHeight="67.2px"
          letterSpacing="0.01em"
          textAlign="center"
        />
        <TextContainer
          label="IT ConsultAt WaCoCo, we are committed to excellence in everything we do."
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
          height="440px"
          radius="40px"
          border="2px solid #979797"
          padding="40px"
          gap="30px"
          backgroundColor="transparent"
          justifyContent="center"
        >
          <FlexBox>
            <TextContainer
              label="Professionalism"
              width="557px"
              fontFamily="Inter, sans-serif"
              fontWeight="700"
              fontSize="42px"
              lineHeight="50.4px"
              letterSpacing="0.01em"
              textAlign="center"
            />
            <TextContainer
              label="Dedicated to maintaining high standards for a seamless client experience."
              width="550px"
              fontFamily="Inter, sans-serif"
              fontWeight="400"
              fontSize="22px"
              lineHeight="26.4px"
              letterSpacing="0.01em"
              textAlign="center"
            />
          </FlexBox>
        </TextInsideBox>
        <TextInsideBox
          width="637px"
          height="440px"
          radius="40px"
          border="2px solid #979797"
          padding="40px"
          gap="30px"
          backgroundColor="transparent"
          justifyContent="center"

        >
          <FlexBox>
            <TextContainer
              label="Expertise"
              width="557px"
              fontFamily="Inter, sans-serif"
              fontWeight="700"
              fontSize="42px"
              lineHeight="50.4px"
              letterSpacing="0.01em"
              textAlign="center"
            />
            <TextContainer
              label="Years of diverse experience delivering exceptional results."
              width="557px"
              fontFamily="Inter, sans-serif"
              fontWeight="400"
              fontSize="22px"
              lineHeight="26.4px"
              letterSpacing="0.01em"
              textAlign="center"
            />
          </FlexBox>
        </TextInsideBox>
      </FlexBoxForTextInsideBox>

      <FlexBoxForTextInsideBox>
        <TextInsideBox
          width="414.67px"
          height="440px"
          radius="40px"
          border="2px solid #979797"
          padding="40px"
          gap="30px"
          backgroundColor="transparent"
          justifyContent="center"

        >
          <FlexBox>
            <TextContainer
              label="Customer Satisfaction"
              width="334.67px"
              fontFamily="Inter, sans-serif"
              fontWeight="700"
              fontSize="42px"
              lineHeight="50.4px"
              letterSpacing="0.01em"
              textAlign="center"
            />
            <TextContainer
              label="Prioritizing your needs to exceed expectations."
              width="310px"
              fontFamily="Inter, sans-serif"
              fontWeight="400"
              fontSize="22px"
              lineHeight="26.4px"
              letterSpacing="0.01em"
              textAlign="center"
            />
          </FlexBox>
        </TextInsideBox>

        <TextInsideBox
          width="414.67px"
          height="440px"
          radius="40px"
          border="2px solid #979797"
          padding="40px"
          gap="30px"
          backgroundColor="transparent"
          justifyContent="center"

        >
          <FlexBox>
            <TextContainer
              label="Innovation"
              width="334.67px"
              fontFamily="Inter, sans-serif"
              fontWeight="700"
              fontSize="42px"
              lineHeight="50.4px"
              letterSpacing="0.01em"
              textAlign="center"
            />
            <TextContainer
              label="Constantly exploring new technologies for cutting-edge solutions."
              width="334.67px"
              fontFamily="Inter, sans-serif"
              fontWeight="400"
              fontSize="22px"
              lineHeight="26.4px"
              letterSpacing="0.01em"
              textAlign="center"
            />
          </FlexBox>
        </TextInsideBox>


        <TextInsideBox
          width="414.67px"
          height="440px"
          radius="40px"
          border="2px solid #979797"
          padding="40px"
          gap="30px"
          backgroundColor="transparent"
          justifyContent="center"

        >
          <FlexBox>
            <TextContainer
              label="Timely Delivery"
              width="334.67px"
              fontFamily="Inter, sans-serif"
              fontWeight="700"
              fontSize="42px"
              lineHeight="50.4px"
              letterSpacing="0.01em"
              textAlign="center"
            />
            <TextContainer
              label="Reliable project completion without compromising quality."
              width="334.67px"
              fontFamily="Inter, sans-serif"
              fontWeight="400"
              fontSize="22px"
              lineHeight="26.4px"
              letterSpacing="0.01em"
              textAlign="center"
            />
          </FlexBox>
        </TextInsideBox>
      </FlexBoxForTextInsideBox>
      </FlexBoxForTextInsideBoxGapFix>

    </Container>
  );
}

const Container = styled.div`
  // width: 100vw;
  background-color: #424242;
  padding: 200px 104px 240px 104px;
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
`