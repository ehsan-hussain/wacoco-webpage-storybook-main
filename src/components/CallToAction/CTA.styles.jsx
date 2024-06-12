import styled from "styled-components";

export const CTAContainer = styled.div`
    position: relative;
    font-family: 'Helvetica', sans-serif;
    font-size: 22px;
    &.overlay {
        
    }
    `;

export const CTAOverlay = styled.div`
    background-color: #000639;
    position: relative;
    display: flex;
    justify-content: center;
    
    img {
        width: 85%;
        height: 100%;
    }
`;

export const TextOverlay = styled.div`
    position: absolute;
    top: 40%;
    left: 73.3%;
    transform: translate(-50%, -50%);
    z-index: 2;
    &.ctaButton {
        position: absolute;
        bottom: 70px;
        right: 365px;
        z-index: 1;
    }
    h1 {
        font-size: 40px;
        font-weight: 700;
        font-family: 'Poppins', sans-serif;
        color: #fff;
        line-height: 1.7;
        margin-bottom: 40px;
    }
    p {
        font-size: 22px;
        font-family: 'Helvetica', sans-serif;
        color: #fff;
        line-height: 1.7;
        martgin-bottom: 40px;
    }
`;
