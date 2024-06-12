import React from "react";
import { MeetWacocoContainer, MeetWacocoImg, MeetWacocoContent } from "./MeetWacoco.styles";
import Button from "../button/button";
import MeetImg from "../../assets/Landing-Wacoco.svg";

const MeetWacoco = () => {
    return (
        <MeetWacocoContainer>
            <MeetWacocoImg src={MeetImg} />
            <MeetWacocoContent>
                <h1>Where Innovation <br /> Meets Expertise</h1>
                <p>
                    Discover the heart and soul of WaCoCo, your premier partner in outsourced software development. Our company is more than just a collection of talented individuals - we're a tight-knit family united by a passion for technology and a drive for excellence.
                </p>
                <Button label="About us" backgroundColor={'blue'} />
            </MeetWacocoContent>
        </MeetWacocoContainer>
    );
};

export default MeetWacoco;