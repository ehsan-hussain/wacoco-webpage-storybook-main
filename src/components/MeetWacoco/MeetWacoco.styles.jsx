import styled from "styled-components";

export const MeetWacocoContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 7.5%;
    width: 100%;
    height: calc(100vh * 2);
    
    background-image: linear-gradient(180deg, #000639 0%, #252E84 100%);
    
`;

export const MeetWacocoContent = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 35%;
    height: 54%;
    gap: 40px;
    right: 7%;
    top: 27%;
    @keyframes scale-up {
         from {
             transform: translateY(100%);
         }
         to {
             transform: translateY(0%);
         }
     }
    animation: scale-up both;
    animation-timeline: view(block);
    animation-range: entry-crossing 20% entry-crossing 100%;

    h1 {
        font-size: 70px;
        font-family: 'Poppins', sans-serif;
        font-weight: 700;
        color: #fff;
    }
    p {
        font-family: 'Helvetica', sans-serif;
        font-size: 22px;
        color: #979CC9;
    }
    button {
        max-width: 197px;
    }
`;

export const MeetWacocoImg = styled.img`
    position: relative;
    width: 50%;
    height: auto;
    left: -10%;
    @keyframes fly-in {
         from {
             transform: translateX(-100%);
         }
         to {
             transform: translateX(0%);
         }
        }
     animation: fly-in both;
     animation-timeline: view(block);
     animation-range: entry-crossing 20% entry-crossing 100%;
    

`;
