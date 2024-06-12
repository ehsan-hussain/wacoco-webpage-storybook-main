import React from "react";
import { OurApproachContainer,OurApproachBG, OurApproachBox, OurApproachContent } from "./ourApproach.styles";
import Button from "../button/button";
import OurApproachImg from "../../assets/OurApproach-photo.svg";

function OurApproach() {
  return (
    
      <OurApproachContainer>
        <OurApproachBG>
          <img src={OurApproachImg} alt="OurApproach" />
          <OurApproachBox>
            <OurApproachContent>
              <h1>Our Approach</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in mauris a magna imperdiet rhoncus a a velit. Quisque placerat mauris nulla, vitae scelerisque velit pharetra eu. Vestibulum lobortis accumsan lobortis. Nunc vulputate, mi id tincidunt viverra. Vestibulum lobortis accumsan lobortis. Nunc vulputate, mi id tincidunt viverra.
              </p>
              <Button
                size="big"
                label="Our Approach"
                backgroundColor="#3850CC"
                ></Button>
            </OurApproachContent>
          </OurApproachBox>
        </OurApproachBG>
      </OurApproachContainer>
    
  );
}

export default OurApproach;
