import React from 'react'
import styled from 'styled-components'
import Image from '../../assets/AboutUsCTA.svg'
// import ContactBtn from '../button/button'

const AboutUsCTA = () => {
    return (
        <Container>
            <Row>
                <img src={Image} alt="" />
                <div>
                    <h1>Have an idea?</h1>
                    <button>Contact Us</button>
                    {/* <ContactBtn /> */}
                </div>
            </Row>
        </Container>
    )
}

export default AboutUsCTA

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0px 16px;
`
const Row = styled.div`
    display: flex;
    align-items: center;
    width: 100%;

    div {
        display: flex;
        flex-direction: column;
        gap: 40px;
        width: 518px;
        margin: auto;
    }

    h1 {
        display: flex;
        justify-content: center;
        margin: auto;
        font-size: 70px;
        font-weight: bold;
        font-family: 'Poppins', sans-serif;
    }

    button {
        width: 212px;
        height: 48px;
        background-color: #3850cc;
        color: white;
        border-radius: 6px;
        border: none;
        font-size: 18px;
        font-weight: bold;
        cursor: pointer;
        margin-left: 250px;
    }
    button:hover {
        background-color: #617afd;
    }
    button:active {
        background-color: #ff4662;
    }
`
