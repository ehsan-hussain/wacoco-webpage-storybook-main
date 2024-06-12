import React from 'react'
import styled from 'styled-components'
import XIcon from '../../assets/x-01.svg'

const Closebutton = () => {
    const handleToClose = () => {
        window.close()
    }

    return (
        <Container>
            {/* <button onClick={handleToClose}>X</button> */}
            <img src={XIcon} alt="" onClick={handleToClose} />
        </Container>
    )
}

export default Closebutton

const Container = styled.div`
    img {
        position: absolute;
        top: 8px;
        right: 8px;
        background-color: transparent;
        border: none;
        font-size: 28px;
        cursor: pointer;
        color: black;
    }
`
