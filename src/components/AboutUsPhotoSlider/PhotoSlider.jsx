import React, { useState } from "react";
import propTypes from "prop-types";
import {PhotoSliderContainer, PhotoSliderWrapper, PhotoSliderContetnt, PhotoSliderArrow, PhotoSliderImage} from "./PhotoSlider.styles";
//Data
import {teamMembersInfo} from "../../data/data";
//Assets
import leftArrow from "../../assets/icon-chevron-left.svg";
import rightArrow from "../../assets/icon-chevron-right.svg";

const PhotoSlider = ({teamMembersInfo}) => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handeleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : teamMembersInfo.length - 1);
        } else {
            setSlideIndex(slideIndex < teamMembersInfo.length - 1 ? slideIndex + 1 : 0);
        }
    }
    
    return (
        <PhotoSliderContainer>
            <h1>Meet the team</h1>
            <PhotoSliderWrapper slideIndex={slideIndex}>
                {teamMembersInfo.map((member, index) => (
                <div key={index}>
                    <PhotoSliderImage 
                        src={member.image} 
                        alt={member.name}
                        active={index === slideIndex} 
                    />
                </div>
                ))}
            </PhotoSliderWrapper>
            <PhotoSliderContetnt key={slideIndex}>
                <div className="textcontent">
                    <h2>{teamMembersInfo[slideIndex].name}</h2>
                    <h3>{teamMembersInfo[slideIndex].position}</h3>
                    <p>{teamMembersInfo[slideIndex].description}</p>
                </div>
                <PhotoSliderArrow>
                    <img type={"button"} src={leftArrow} alt="left arrow" onClick={() => handeleClick("left")} />
                    <img type={"button"} src={rightArrow} alt="right arrow" onClick={() => handeleClick("right")} />
                </PhotoSliderArrow>
            </PhotoSliderContetnt>
        </PhotoSliderContainer>
    );
};

PhotoSlider.propTypes = {
    teamMembersInfo: propTypes.array.isRequired,
};

PhotoSlider.defaultProps = {
    teamMembersInfo: teamMembersInfo
};

export default PhotoSlider;