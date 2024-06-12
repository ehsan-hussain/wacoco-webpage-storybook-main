import styled from 'styled-components';

export const HeroContainer = styled.div`
    width: 1511px;
    height: 600px;
    position: relative;
    top: 100px;
`;

export const HeroOverlay = styled.div`
  position: relative;
  width: 100%;
  height: auto;
`;

export const BackgroundImage = styled.img`
  width: 100%;
  height: auto;
`;

export const Title = styled.h1`
  position: absolute;
  top: 10%;
  left: 5%;
  font-size: 96px;
  font-weight: bold;
  color: #fff; // Fixed typo for hex value
`;

export const Description = styled.p`
  position: absolute;
  top: 10%;
  right: 5%;
  font-size: 32px;
  color: #fff; // Fixed typo for hex value
`;
