import React from 'react'
import styled from 'styled-components'
import FirstImage from '../../assets/OurLeadershipPhoto.svg'
import SecondtImage from '../../assets/OurLeaershipPhoto2.svg'
import ThirdImage from '../../assets/OurLeaershipPhoto3.svg'

const OurLeadership = () => {
    return (
        <Container>
            <h1 className={[styled.TitlePage]}>
                Our
                <br /> Leadership
            </h1>
            <Row>
                <div>
                    <h2>Founder name</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer elementum dapibus ipsum, a placerat nulla dictum
                        nec. Vestibulum venenatis ultrices mollis. Integer vel
                        mi vitae urna convallis ullamcorper et ut nibh. Integer
                        quis magna dignissim, bibendum purus id, laoreet risus.
                        Etiam ac velit ut nisl lobortis fermentum.
                    </p>
                </div>

                <img src={FirstImage} alt=""></img>
            </Row>
            <Row>
                <img src={SecondtImage} alt=""></img>
                <div>
                    <h2>Founder name</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer elementum dapibus ipsum, a placerat nulla dictum
                        nec. Vestibulum venenatis ultrices mollis. Integer vel
                        mi vitae urna convallis ullamcorper et ut nibh. Integer
                        quis magna dignissim, bibendum purus id, laoreet risus.
                        Etiam ac velit ut nisl lobortis fermentum.
                    </p>
                </div>
            </Row>
            <Row>
                <div>
                    <h2>Founder name</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer elementum dapibus ipsum, a placerat nulla dictum
                        nec. Vestibulum venenatis ultrices mollis. Integer vel
                        mi vitae urna convallis ullamcorper et ut nibh. Integer
                        quis magna dignissim, bibendum purus id, laoreet risus.
                        Etiam ac velit ut nisl lobortis fermentum.
                    </p>
                </div>

                <img src={ThirdImage} alt=""></img>
            </Row>
        </Container>
    )
}

export default OurLeadership
const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #000639;
    color: white;
    margin: 0px 16px;
    width: 100%;

    h1 {
        align-self: flex-start;
        margin-left: 100px;
        position: relative;
        margin-top: 200px;
        font-size: 70px;
        font-weight: 700;
        font-family: 'Poppins', sans-serif;
        bottom: 100px;
        
    }
`
const Row = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    box-sizing: border-box;
    width: 100%;

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 40px;
        width: 50%;
        height: 223px;
        padding: 0 10%;
    }
    img {
        width: 50%;
        height: auto;
    }

    h2 {
        font-size: 40px;
        font-weight: 700;
        font-family: 'Poppins', sans-serif;
    }
    p {
        
        font-size: 18px;
        font-family: 'Helvetica', sans-serif;
    }
`
