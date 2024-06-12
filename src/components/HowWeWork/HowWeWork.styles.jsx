import styled from 'styled-components'

export const HowWeWorkContainer = styled.div`
    display: flex;
    position: relative;
    background-color: #f3f2f9;
    width: 100%;
    height: 100vh;
`
export const HowWeWorkBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 80%;
    height: 468px;
    background-color: white;
    border-radius: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -100%);
    margin-top: 150px;
    z-index: 1;
    p {
        font-size: 70px;
        color: #252e84;
        margin-bottom: 20px;
        margin-bottom: 100px;
        margin-top: 5px;
        font-family: 'Poppins', sans-serif;
    }
    span {
        font-size: 70px;
        font-weight: 900;
        color: #252e84;
    }
    div {
        display: flex;
        flex-direction: row;
        gap: 40px;
    }
`
export const HowWeWorkImg = styled.img`
    position: absolute;
    margin-top: 281px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    height: 100%;
    width: 100%;
    z-index: 0;
`

export const HowWeWorkText = styled.div`
    position: relative;
    top: 75%;
    width: 55%;
    left: 25%;
    p {
        font-size: 22px;
        font-family: 'Helvetica', sans-serif;
        color: white;
    }
`
