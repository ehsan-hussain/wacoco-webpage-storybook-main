import React from 'react'
import styled from 'styled-components'
import ServicePageImg from '../../assets/ServicePage.svg'
import serviceimage from '../../assets/serviceimage.png'


const ServicesPageService = () => {
    return (
        <Container>
            <Row>
                <div>
                    <h1 style={{ animation: 'slideInFromBottom 2s forwards' }}>
                        Services
                    </h1>
                </div>
                <div>
                    <p style={{ animation: 'slideInFromRight 2s forwards' }}>
                        Test nowLorem ipsum dolor sit amet consectetur adipisicing elit.
                        Integer elementum dapibus ipsum, a placerat nulla dictum
                        nec. Vestibulum venenatis ultrices mollis.
                    </p>
                </div>
            </Row>
            <img src={serviceimage} alt="" />
            <Col style={{ animation: 'slideInFromBottom 2s forwards' }}>
                <div>
                    <span>
                        <svg
                            width="23"
                            height="23"
                            viewBox="0 0 23 23"
                            fill="#ffffff"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M2.54167 0.75C1.55216 0.75 0.75 1.55216 0.75 2.54167C0.75 3.53118 1.55216 4.33333 2.54167 4.33333H16.1329L1.27477 19.1914C0.575078 19.8911 0.575078 21.0255 1.27477 21.7252C1.97446 22.4249 3.10888 22.4249 3.80857 21.7252L18.6667 6.86713V20.4583C18.6667 21.4478 19.4688 22.25 20.4583 22.25C21.4478 22.25 22.25 21.4478 22.25 20.4583V2.54167C22.25 1.55216 21.4478 0.75 20.4583 0.75H2.54167Z"
                                fill="#000639"
                            />
                        </svg>
                    </span>
                    <h1>
                        Software
                        <br /> Development
                    </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur</p>
                </div>

                <div
                    className={styled.slideInFromBottom}
                    style={{ padding: '25px 1px' }}
                >
                    <span>
                        <svg
                            width="23"
                            height="23"
                            viewBox="0 0 23 23"
                            fill="#ffffff"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{
                                marginLeft: ' 250px',
                                marginTop: '1px'
                            }}
                        >
                            <path
                                d="M2.54167 0.75C1.55216 0.75 0.75 1.55216 0.75 2.54167C0.75 3.53118 1.55216 4.33333 2.54167 4.33333H16.1329L1.27477 19.1914C0.575078 19.8911 0.575078 21.0255 1.27477 21.7252C1.97446 22.4249 3.10888 22.4249 3.80857 21.7252L18.6667 6.86713V20.4583C18.6667 21.4478 19.4688 22.25 20.4583 22.25C21.4478 22.25 22.25 21.4478 22.25 20.4583V2.54167C22.25 1.55216 21.4478 0.75 20.4583 0.75H2.54167Z"
                                fill="#000639"
                            />
                        </svg>
                    </span>

                    <h1>Consultation</h1>
                    <p style={{ margin: '8px 10px' }}>
                        <br />
                        Lorem ipsum dolor sit amet, consectetur
                    </p>
                </div>

                <div className={styled.slideInFromBottom}>
                    <span>
                        <svg
                            width="23"
                            height="23"
                            viewBox="0 0 23 23"
                            fill="#ffffff"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M2.54167 0.75C1.55216 0.75 0.75 1.55216 0.75 2.54167C0.75 3.53118 1.55216 4.33333 2.54167 4.33333H16.1329L1.27477 19.1914C0.575078 19.8911 0.575078 21.0255 1.27477 21.7252C1.97446 22.4249 3.10888 22.4249 3.80857 21.7252L18.6667 6.86713V20.4583C18.6667 21.4478 19.4688 22.25 20.4583 22.25C21.4478 22.25 22.25 21.4478 22.25 20.4583V2.54167C22.25 1.55216 21.4478 0.75 20.4583 0.75H2.54167Z"
                                fill="#000639"
                            />
                        </svg>
                    </span>
                    <h1>
                        It <br /> recruitment
                    </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur</p>
                </div>

                <div className={styled.slideInFromBottom}>
                    <span>
                        <svg
                            width="23"
                            height="23"
                            viewBox="0 0 23 23"
                            fill="#ffffff"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M2.54167 0.75C1.55216 0.75 0.75 1.55216 0.75 2.54167C0.75 3.53118 1.55216 4.33333 2.54167 4.33333H16.1329L1.27477 19.1914C0.575078 19.8911 0.575078 21.0255 1.27477 21.7252C1.97446 22.4249 3.10888 22.4249 3.80857 21.7252L18.6667 6.86713V20.4583C18.6667 21.4478 19.4688 22.25 20.4583 22.25C21.4478 22.25 22.25 21.4478 22.25 20.4583V2.54167C22.25 1.55216 21.4478 0.75 20.4583 0.75H2.54167Z"
                                fill="#000639"
                            />
                        </svg>
                        </span>
                    <h1>
                        Software <br />
                        Coaching
                    </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur</p>
                </div>
            </Col>
        </Container>
    )
}

export default ServicesPageService

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    position: absolute;

    img {
        width: 100%;
    }
`
const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    color: black;
    margin-right: 10%;
    margin-left: 10%;
    div {
        top: 50%;
        left: 50%;
        transform: translate(50%, 50%);
    }

    h1 {
        width: 316px;
        font-weight: bolder;
        font-size: 70px;
        font-family: 'Poppins', sans-serif;
        margin-top: 22px;
    }
    p {
        font-size: 22px;
        font-family: 'Helvetica', sans-serif;
        width: 408px;
    }

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
    @keyframes slideInFromBottom {
        80% {
            transform: translateY(100%);

            opacity: 0;
        }
        100% {
            transform: translateY(0);

            opacity: 1;
        }
    }
`
const Col = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    padding: 10px;
    width: 100%;
    gap: 30px;
    margin-left: 300px;

    div {
        background-color: white;
        width: 298px;
        height: 354px;
        opacity: 0.8;
        color: black;
        border-radius: 20px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        /* padding: 0 10px; */
    }
    h1 {
        position: relative;
        width: 266px;
        font-size: 32px;
        font-weight: bold;
        font-family: 'Poppins', sans-serif;
        margin: 0 10px;
        /* padding: 20px 10px; */
    }

    span svg {
        margin-left: 250px;
        margin-top: 20px;
        opacity: 1;
        filter: brightness(0) saturate(100%) invert(100%) sepia(100%) saturate(2%) hue-rotate(174deg) brightness(107%) contrast(101%);
    }
    p {
        color: black;
        font-size: 22px;
        font-family: 'Helvetica', sans-serif;
        margin: -1px 10px;
    }

    @keyframes slideInFromBottom {
        0% {
            transform: translateY(100%);

            opacity: 0;
        }
        100% {
            transform: translateY(0);

            opacity: 1;
        }
    }

    @media (max-width: 768px) {
        .col {
            flex-direction: column;
        }
    }
`
