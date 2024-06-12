import PropTypes from 'prop-types';
import React from 'react';
import defaultBackgroundImage from '../../assets/CTAImg.svg';
import {
  BackgroundImage,
  Description,
  HeroContainer,
  HeroOverlay,
  Title,
} from './HeroService.styles';

const HeroService = ({ ctaImage }) => {
  const backgroundImg = ctaImage || defaultBackgroundImage;

  return (
    <HeroContainer>
      <HeroOverlay>
        <BackgroundImage src={backgroundImg} alt="Hero Background" />
        <Title>Services</Title>
        <Description>
          Empower Your Business with Innovative IT Solutions
        </Description>
      </HeroOverlay>
    </HeroContainer>
  );
};

HeroService.propTypes = {
  ctaImage: PropTypes.string,
};

HeroService.defaultProps = {
  ctaImage: defaultBackgroundImage,
};

export default HeroService;
