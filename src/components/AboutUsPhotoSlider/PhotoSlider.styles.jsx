import styled, { keyframes } from "styled-components";

const slideAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.8);
  }
  100% {
    transform: scale(1);
  }
`;

export const PhotoSliderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 100px;
    background-color: #000639;
    width: 100%;
    height: 100%;
    padding-top: 180px;
    padding-bottom: 410px;
    h1 {
        margin-bottom: 100px;
        color: #fff;
        font-size: 70px;
        font-family: "Poppins", sans-serif;
    }
`;

export const PhotoSliderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
    
`;

export const PhotoSliderImage = styled.img`
    width: ${({active}) => active ? "auto" : "212px"};
    height: auto;
    filter: ${({active}) => active ? "none" : " hue-rotate(200deg) brightness(60%) grayscale(0%)"};
    transition: width 0.5s;
  animation: ${({active}) => (active ? slideAnimation : 'none')} 0.5s linear;
`;

export const PhotoSliderContetnt = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 80%;
    .textcontent {
        display: flex;
        flex-direction: column;
        width: 44%;
    }
    .textcontent h2 {
        color: #fff;
        font-size: 40px;
        font-family: "Poppins", sans-serif;
        margin-bottom: 10px;
    }
    .textcontent h3 {
        color: #979CC9;
        font-size: 32px;
        font-family: "Poppins", sans-serif;
    }
    .textcontent p {
        color: #fff;
        font-size: 18px;
        font-family: 'Helvetica', sans-serif;
        margin-top: 40px;
    }

`;

export const PhotoSliderArrow = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    img {
        margin: 2px;
    }
`;