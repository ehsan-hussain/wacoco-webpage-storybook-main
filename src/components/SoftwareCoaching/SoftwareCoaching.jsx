import React from "react";
import styled from "styled-components";
import img from "../../assets/SoftwareCoaching.svg";

function SoftwareCoaching() {
  return (
    <Container>
      <SoftwareCoachingBackground />

      <SoftwareCoachingLeft>
        <SoftwareCoachingImage imgUrl={img} alt="" />
        <SoftwareCoachingTextContainerLeft>
          <h1>Lorem ipsum dolor sit </h1>
          <ParagraphContainer>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              elementum dapibus ipsum, a placerat nulla dictum nec. Vestibulum
              venenatis ultrices mollis. Integer vel mi vitae urna convallis
              ullamcorper et ut nibh. Integer quis magna dignissim, bibendum
              purus id, laoreet risus. Etiam ac velit ut nisl lobortis
              fermentum.
            </p>

            <p>
              Integer ullamcorper malesuada lectus in tincidunt. Maecenas congue
              lacus laoreet ultrices semper. Proin vulputate leo magna.
            </p>
          </ParagraphContainer>
        </SoftwareCoachingTextContainerLeft>
      </SoftwareCoachingLeft>

      <SoftwareCoachingRight>
        <SoftwareCoachingTextContainerRightUpper>
          <h1>Software Coaching</h1>
          <ParagraphContainer>
            <p>
              Quisque posuere suscipit nibh in facilisis. Aliquam et lacinia
              eros. Nunc pellentesque orci ut faucibus sagittis. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Morbi a auctor ipsum.
              Phasellus nec ultrices dolor. Integer condimentum sit amet metus a
              condimentum.
            </p>
            <p>
              Integer ullamcorper malesuada lectus in tincidunt. Maecenas congue
              lacus laoreet ultrices semper. Proin vulputate leo magna.
            </p>
          </ParagraphContainer>
        </SoftwareCoachingTextContainerRightUpper>

        <SoftwareCoachingTextRightLowerContainer>
          <SoftwareCoachingTextContainerRightLower>
            <h1>Lorem ipsum dolor sit</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              elementum dapibus ipsum, a placerat nulla dictum nec. Vestibulum
              venenatis ultrices mollis. Integer vel mi vitae urna convallis
              ullamcorper et ut nibh. Integer quis magna dignissim, bibendum
              purus id, laoreet risus. Etiam ac velit ut nisl lobortis
              fermentum.
            </p>
          </SoftwareCoachingTextContainerRightLower>
          <SoftwareCoachingTextContainerRightLower>
            <h1>Lorem ipsum dolor sit</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              elementum dapibus ipsum, a placerat nulla dictum nec. Vestibulum
              venenatis ultrices mollis. Integer vel mi vitae urna convallis
              ullamcorper et ut nibh. Integer quis magna dignissim, bibendum
              purus id, laoreet risus. Etiam ac velit ut nisl lobortis
              fermentum.
            </p>
          </SoftwareCoachingTextContainerRightLower>
        </SoftwareCoachingTextRightLowerContainer>
      </SoftwareCoachingRight>
    </Container>
  );
}

export default SoftwareCoaching;

const Container = styled.div`
  overflow: hidden;
  width: 100vw;
  height: 1845px;
  background-color: #ffffff;
  box-sizing: border-box;
  display: flex;
`;
const SoftwareCoachingImage = styled.div`
  height: 1074px;
  width: 50vw;
  background-color: red;
  background-image: url(${(props) => props.imgUrl});
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
`;
const SoftwareCoachingBackground = styled.div`
  background-color: #000639;
  height: 1650px;
  position: absolute;
  z-index: 1;
  width: 100vw;
  margin-top: 195px;
`;
const SoftwareCoachingLeft = styled.div`
  z-index: 999;
  position: relative;
  width: 50vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SoftwareCoachingTextContainerLeft = styled.div`
  color: white;
  height: 293px;
  width: 550px;
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  gap: 40px;

  h1 {
    font-weight: 700;
    line-height: 48px;
    letter-spacing: 0.01em;
    font-size: 40px;
    font-family: 'Poppins', sans-serif;
  }

  p {
    font-family: 'Helvetica', sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: -0.01em;
    color: #979cc9;
  }
`;
const ParagraphContainer = styled.div``;
const SoftwareCoachingTextRightLowerContainer = styled.div`
  padding-bottom: 650px;
  display: flex;
  flex-direction: column;
  height: 300px;
  justify-content: space-between;
  gap: 300px;
`;

const SoftwareCoachingRight = styled.div`
  z-index: 999;
  position: relative;
  width: 50vw;
  height: 1650px;
  margin-top: 195px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`;
const SoftwareCoachingTextContainerRightUpper = styled.div`
  width: 525px;
  height: 542px;
  gap: 40px;
  color: white;
  text-align: left;
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 70px;
    font-weight: 700;
    line-height: 84px;
    letter-spacing: 0.01em;
  }
  p {
    font-family: 'Helvetica', sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: -0.01em;
  }
`;
const SoftwareCoachingTextContainerRightLower = styled.div`
  width: 526px;
  height: 48px;
  color: white;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 40px;
    font-weight: 700;
    line-height: 48px;
    letter-spacing: 0.01em;
  }
  p {
    font-family: 'Helvetica', sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: -0.01em;
    text-align: left;
    color: #979cc9;
  }
`;
