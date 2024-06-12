import React from 'react';
import PropTypes from 'prop-types';
import {CTAContainer, CTAOverlay, TextOverlay} from './CTA.styles';
//import styles from './CTA.module.css';
import Button from '../button/button';

const CTA = ({ctaImage}) => {
  
  return (
    <CTAContainer>
      <CTAOverlay>
        <img src={ctaImage} alt="Call to Action" />
        <TextOverlay>
          <h1>
            Lorem ipsum
          </h1>
          <p>
            Lorem iipsum dolor sit amet, consectetur adipiscing elit. Cras in mauris a magna
          </p>
          <Button
          label="Contact us"
          size="big"
          className={`ctaButton`}
          backgroundColor={'#252E84'}
          />
        </TextOverlay>

        
      </CTAOverlay>
    </CTAContainer>
  );
};

CTA.propTypes = {
  ctaImage: PropTypes.string.isRequired,
  label: PropTypes.string,
};

export default CTA;
