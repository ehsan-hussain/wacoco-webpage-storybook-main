import React from 'react'
import styled from 'styled-components'
import Image from '../../assets/SoftwareDevelopImage.svg'

const SoftwareDevelopment = () => {
    return (
        <Container>
            <Row>
                <img src={Image} alt="" />

                <div>
                    <h1>Software Development</h1>
                    <p>
                        Quisque posuere suscipit nibh in facilisis. Aliquam et
                        lacinia eros. Nunc pellentesque orci ut faucibus
                        sagittis. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Morbi a auctor ipsum. Phasellus nec
                        ultrices dolor. Integer condimentum sit amet metus a
                        condimentum.
                        <br /> Integer ullamcorper malesuada lectus in
                        tincidunt. Maecenas congue lacus laoreet ultrices
                        semper. Proin vulputate leo magna.
                    </p>
                </div>
            </Row>
        </Container>
    )
}

export default SoftwareDevelopment

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0px 16px;
    margin-top: 60%;
`

const Row = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    flex-wrap: wrap;

    div {
        display: flex;
        flex-direction: column;
        width: 525px;
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
    p {
        height: 331px;
        font-size: 22px;
        font-family: 'Helvetica', sans-serif;
    }
`
