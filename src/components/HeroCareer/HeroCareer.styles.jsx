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
    height: 100%;
`;

export const TextOverlay = styled.div`
    position: absolute;
    top: -40px;
    width: calc(80%);
    display: flex;
    justify-content: space-between;
    padding: 0;
`;

export const Title = styled.h1`
    font-family: Inter;
    font-size: 96px;
    font-weight: 700;
    line-height: 115.2px;
    letter-spacing: 0.01em;
    text-align: center;
    color: black;
    transform: translateY(-80px);
`;

export const Description = styled.p`
    font-family: Helvetica;
    font-size: 32px;
    font-weight: 400;
    line-height: 51.2px;
    letter-spacing: -0.01em;
    text-align: left;
    color: black;
    transform: translateY(-30px);
`;
