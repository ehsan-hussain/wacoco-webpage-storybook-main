import React from 'react'
import styled from 'styled-components'

const PathViewerSecond = () => {
    return (
        <PathViewers>
            <Container>
                <Row>
                    <div className="circle">1</div>
                    <hr className="circle" />
                    <div className="circle">2</div>
                    <hr />
                    <div>3</div>
                    <hr />
                    <div>4</div>
                </Row>
            </Container>
        </PathViewers>
    )
}

export default PathViewerSecond
const PathViewers = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 50px;
`

const Container = styled.div`
    display: flex;
    justify-content: center;
    border-radius: 20px;
    background-color: white;
    margin: 0;
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
    .circle {
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
