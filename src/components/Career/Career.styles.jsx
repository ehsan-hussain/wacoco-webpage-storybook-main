import styled from "styled-components";

export const CareerContainer = styled.div`
    color: white;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 20px;
    position: relative;
    background-color: #000639;
`;

export const HeaderSection = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 270px;
    column-gap: 20px;
    align-items: center;
    .top-left {
        margin-right: 150px;
      }

    .top-left h1 {
        font-size: 70px;
        font-family: 'Poppins', sans-serif;
        font-weight: 700;
    }
      
      .top-right {
        margin-left: 150px;
        font-size: 22px;
        font-family: 'Helvetica', sans-serif;
        color: #979CC9;
      }
    `;

export const ImgCareer = styled.img`
        height: auto;
        width: 50%;
        object-fit: cover;
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
        position: absolute;
        z-index: 1;
        &:hover {
            opacity: 1;
            }
        `;

export const CareerContent = styled.div`
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
        `;

export const CareerBox = styled.div`
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      width: 50%;
      height: calc(50vw - (50vw * 0.07));
      &:hover img {
        opacity: 1;
      }
`;

export const CareerBoxContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    background-color: #000639;
    color: #979CC9;
    width: 68%;
    top: 26.5%;
    padding: 47px 4%;
    z-index: 1;
    height: auto;
    h1 {
        font-size: 40px;
        font-family: 'Poppins', sans-serif;
        font-weight: 700;
    }
    p {
        font-size: 22px;
        font-family: 'Helvetica', sans-serif;
    }
    button {
        width: 163px;
    }
`;