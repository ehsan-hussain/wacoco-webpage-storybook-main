import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import backgroundImage from '../../assets/CTAImg.svg';
import {
    Description,
    HeroContainer,
    HeroOverlay,
    TextOverlay,
    Title,
} from './HeroCareer.styles';

const HeroCareer = ({ ctaImage }) => {
    return (
        <HeroContainer>
            <HeroOverlay>
                <img src={ctaImage || backgroundImage} alt="Hero Background" />
                <TextOverlay>
                    <Title>Career</Title>
                    <Description>Welcome to WaCoCo! Discover opportunities <br /> to grow with us. </Description>
                </TextOverlay>
            </HeroOverlay>
        </HeroContainer>
    );
};

HeroCareer.propTypes = {
    ctaImage: PropTypes.string.isRequired,
};

export default HeroCareer;
