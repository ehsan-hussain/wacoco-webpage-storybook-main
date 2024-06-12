import React from "react";
import styled from "styled-components";
import img from "../../assets/ItRecruitment.svg";

const ItReqruitment = () => {
  return (
    <Container>
      <ItRecruitmentBG>
        <ItRecruitmentImage imgUrl={img} alt="" />
      </ItRecruitmentBG>
      <ItRecruitmentTextContainer>
        <h1>IT Recruitment</h1>
        <p>
          Lorem iipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Integer elementum dapibus ipsum, a placerat nulla
          dictum nec. Vestibulum venenatis ultrices mollis. Integer vel mi vitae
          urna convallis ullamcorper et ut nibh. Integer quis magna dignissim,
          bibendum purus id, laoreet risus. Etiam ac velit ut nisl lobortis
          fermentum. Quisque in purus orci. Nullam facilisis pellentesque leo
          eget semper. Integer pretium tincidunt elementum. Fusce interdum nec
          nulla et dictum.
        </p>
      </ItRecruitmentTextContainer>
    </Container>
  );
};

export default ItReqruitment;

const ItRecruitmentImage = styled.div`
  height: 360px;
  width: 1288px;
  background-image: url(${(props) => props.imgUrl});
  background-size: cover;
  position: relative;
  top: 100px;
  z-index: 1;
  background-position: center;
  background-repeat: no-repeat;
`;
const Container = styled.div`
  overflow: hidden;
  width: 100vw;
  height: 900px;
  background-color: white;
`;

const ItRecruitmentBG = styled.div`
  width: 100vw;
  height: 420px;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000639;
`;
const ItRecruitmentTextContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  z-index: 999;
  position: relative;
  top: 27.5px;
  flex-direction: column;
  align-items: center;

  h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 70px;
    font-weight: 700;
    line-height: 84px;
    letter-spacing: 0.01em;
    text-align: left;
  }
  p {
    font-family: 'Helvetica', sans-serif;
    font-size: 22px;
    font-weight: 400;
    width: 844px;
    height: 210px;
    position: relative; 
    top: 60px;
    line-height: 35.2px;
    letter-spacing: -0.01em;
    text-align: left;
  }
`;
