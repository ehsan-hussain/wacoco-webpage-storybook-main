import React from 'react'
import styled from 'styled-components'

const ScrollingText = () => {
    return (
        <DIV>
            <Title>
                Achievements Achievements Achievements Achievements Achievements
                Achievements Achievements Achievements Achievements
            </Title>
        </DIV>
    )
}

export default ScrollingText
const DIV = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #000639;
    height: 250px;
    width: 100%;
    overflow: hidden;
    position: relative;
`
const Title = styled.h1`
    font-size: 70px;
    font-weight: 800;
    font-family: 'Poppins', sans-serif;
    color: #979cc9;
    width: 100%;
    white-space: nowrap;
    position: absolute;
    animation: move 10s linear infinite;

    @keyframes move {
        0% {
            transform: translate(0);
        }
        100% {
            transform: translate(-100%);
        }
    }
`
