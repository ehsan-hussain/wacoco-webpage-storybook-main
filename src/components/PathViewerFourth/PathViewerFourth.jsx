import React from 'react'
import styled from 'styled-components'

const PathViewerFourth = () => {
    return (
        <Container>
            <Row>
                <div className="BlueColor">1</div>
                <hr className="BlueColor" />
                <div className="BlueColor">2</div>
                <hr className="BlueColor" />
                <div className="BlueColor">3</div>
                <hr className="BlueColor" />
                <div className="BlueColor">4</div>
            </Row>
        </Container>
    )
}

export default PathViewerFourth

const Container = styled.div`
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    margin-top: 50px;
`

const Row = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        border-radius: 40px;
        background-color: #dbe2ff;
        font-size: 20px;
        margin: 0 12px;
    }
    .BlueColor {
        background-color: #3850cc;
        color: white;
    }
    hr {
        width: 77.33px;
        height: 8px;
        border-radius: 20px;
        background-color: #dbe2ff;
        border: none;
        margin: 13px 0;
    }
`
