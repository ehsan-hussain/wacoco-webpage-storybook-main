import React from 'react'
import styled from 'styled-components'
import FirstImage from '../../assets/ConsulationImage1.svg'
import SecondImage from '../../assets/ConsulationImage2.svg'

const Consulation = () => {
    return (
        <Container>
            <Row>
                <img
                    src={FirstImage}
                    alt=""
                    className={styled.slideInFromLeft}
                    style={{ animation: 'slideInFromLeft 2s forwards' }}
                />

                <img
                    src={SecondImage}
                    alt=""
                    className={styled.slideInFromRight}
                    style={{
                        marginBottom: '50%',
                        animation: 'slideInFromRight 2s forwards'
                    }}
                />
            </Row>
            <Content>
                <h1>  Explore WaCoCo </h1>
                <p>
                    Whether you're a business seeking cutting-edge software solutions or a student eager to gain hands-on experience, WaCoCo welcomes you to explore our offerings and join us in shaping the future of technology. Together, let's turn visions into realities and unlock the full potential of innovation.
                </p>
            </Content>
            {/* <SecondContent>
                <h3>
                    Be part of our mission
                </h3>

                <div>
                    <p>
                        Are you interested in boosting your career in IT? Explore our opportunities{' '}
                        <span style={{ marginLeft: '60px' }}>
                            elementum dapibus ipsum, a placerat nulla dictum
                            nec.
                        </span>{' '}
                        <span style={{ marginLeft: '210px' }}>
                            {' '}
                            Vestibulum venenatis ultrices mollis.
                        </span>
                    </p>
                    <button>Contact us</button>
                </div>
            </SecondContent> */}
        </Container>
    )
}

export default Consulation

const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 1743px;
    justify-content: center;
    background: linear-gradient(to bottom, #ffffff 70%, #000639 30%);
    font-family: 'Poppins', sans-serif;
`
const Row = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 20px 0;

    .slideInFromLeft {
        animation: slideInFromLeft 2s forwards;
        @keyframes slideInFromLeft {
            0% {
                transform: translateX(-100%);
                opacity: 0;
            }
            100% {
                transform: translateX(0);

                opacity: 1;
            }
        }
    }

    .slideInFromRight {
        animation: slideInFromRight 2s forwards;
        @keyframes slideInFromRight {
            0% {
                transform: translateX(100%);

                opacity: 0;
            }
            100% {
                transform: translateX(0);

                opacity: 1;
            }
        }
    }

    @media (max-width: 768px) {
        flex-direction: column;
    }

    img {
        width: 100%;
        height: auto;
        padding: 20px;
        animation-duration: 2s;
        animation-fill-mode: both;
    }

    @media (max-width: 768px) {
        max-width: 100%;
    }
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    gap: 60px;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #000639;
    width: 848px;
    height: 539px;
    color: white;
    margin-top: 23%;
    /* margin-top: 2450px; */


    h1,
    p {
        opacity: 0;
        animation: fadeIn 3s forwards;
        margin: 20px 100px;
    }
    h1 {
        font-size: 70px;
        font-weight: bold;
        width: 447px;
        height: 84px;
        align-self: flex-start;
        margin-top: 100px;
    }
    p {
        font-size: 22px;
        width: 628px;
        height: 175px;
        align-self: center;
    }
    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`
const SecondContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: white;
    width: 100%;
    padding: 40px 100px;

    h3 {
        font-size: 40px;
        font-family: 'Poppins', sans-serif;
        font-weight: bold;
        margin-top: -250px;
    }
    p {
        color: #979cc9;
        font-family: 'Helvetica', sans-serif;
        font-size: 18px;
        width: 513px;
        margin-top: -250px;
    }
    button {
        width: 212px;
        height: 48px;
        border-radius: 6px;
        background-color: #3850cc;
        color: #ffffff;
        border: none;
        margin-left: 280px;
        margin-top: 10px;
        cursor: pointer;
    }
`
