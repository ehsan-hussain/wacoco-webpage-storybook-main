import styled from 'styled-components'

export const HeroContainer = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 100vh;
`

export const HeroContent = styled.div`
    display: flex;
    flex-direction: column;
    // justify-content: center;
    padding-top: 15%;
    align-items: center;
    z-index: 1;
    width: 56.7%;
    gap: 100px;
    h1 {
        color: white;
        font-size: 70px;
        font-family: 'Poppins', sans-serif;
        font-weight: 700;
        margin: 0;
        position: relative;
        width: auto;
        @media (max-width: 768px) {
            font-size: 50px;
        }
        
    }
    h1 span {
        width: 100%;
        position: absolute;
    }
    p {
        color: white;
        margin: 0;

        font-size: 22px;
        font-family: 'Helvetica', sans-serif;
        width: 100%;
        text-align: center;
    }
    button {
        max-width: 232px;
    }

    
`
export const HeroImage = styled.img`
    z-index: -1;
    object-fit: cover;
    width: 100%;
    box-sizing: border-box;
    height: 100%;
    position: fixed;
    top: 0;
`
