import styled from "styled-components";

export const OurApproachContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #f3f2f9;
`;

export const OurApproachBG = styled.div`
    position: relative;
    object-fit: cover;
    height: 100%;
    width: 100%;
`;

export const OurApproachBox = styled.div`
    width: 70%;
    height: 46%;
    background-color: white;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    position: absolute;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    z-index: 99;
`;

export const OurApproachContent = styled.div`
    position: relative;
    width: 100%;
    max-width: 75%;
    top: -30px;
    height: 80%;
    display: flex;
    justify-content: left;
    gap: 40px;
    position: relative;
    top: -90px;
    flex-direction: column;
    background-color: transparent;
    z-index: 999;
    p {
        width: 850px;
        font-size: 22px;
        line-height: 35.2px;
        color: black;
        font-family: 'Helvetica', sans-serif !important;
        font-weight: 400;
        text-align: left;
        margin: 40px 0px 40px 0px;
    }
    h1 {
        margin-bottom: 0px;
        font-size: 70px;
        position: relative;
        color: black;
        font-family: 'Helvetica', sans-serif !important;
        font-weight: bold;
        line-height: 84px;
    }
    button {
        max-width: 239px;
    }
`;
