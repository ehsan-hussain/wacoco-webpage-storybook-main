import styled from "styled-components";

export const AboutUsStoryContainer = styled.div`
    font-family: 'Helvetica', sans-serif;
    font-size: 22px;
    background: linear-gradient(#000639 50%, white 50%);
    justify-content: space-between;
    color: white;
    height: 160vh;
    padding: 166px 7.5%;
    h1 {
        font-size: 70px;
        font-family: 'Poppins', sans-serif;
        color: #fff;
        font-weight: 700;
    }
    `;

export const AboutUsStoryContent = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 32px;
    color: black;
    img {
        width: 628px;
        height: 420px;
        margin-top: 10%;
        margin-bottom: 40px;
    }
    p {
        width: 628px;
        margin: 0;
    }
    h1 {
        font-size: 40px;
        font-family: 'Poppins', sans-serif;
        color: black;
        font-weight: 700;
        margin: 0;
    }
    div {
        display: flex;
        flex-direction: column;
        gap: 40px;
    }
`;


// export const SecondContent = styled.p`
//     width: 628px;
//     `;
