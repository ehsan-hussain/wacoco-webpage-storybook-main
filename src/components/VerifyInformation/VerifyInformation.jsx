import React from 'react'
import styled from 'styled-components'
import VerifyIcon from '../../assets/Icon.svg'

const VerifyInformation = () => {
    return (
        <Container>
            <Image>
                <img src={VerifyIcon} alt=""></img>
            </Image>
            <Title>
                <h1>Submit your career application</h1>
                <p>
                    Please take a moment to review the information
                    <br /> you've provided in the preceding steps. Once
                    <br /> you're satisfied, go ahead and submit your
                    <br /> application.
                </p>
            </Title>
        </Container>
    )
}

export default VerifyInformation

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    margin: 50px;
`
const Image = styled.div`
    img {
        height: 110px;
        width: 110px;
        margin: 20px;
    }
`
const Title = styled.div`
    h1 {
        font-family: sans-serif;
        font-size: 24px;
        font-weight: bold;
    }
    p {
        font-size: 18px;
        font-family: sans-serif;
        color: #797b8e;
    }
`
