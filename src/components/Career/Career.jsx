// Your React component

import React from 'react';
import {CareerContainer, HeaderSection, ImgCareer, CareerContent, CareerBox,CareerBoxContent} from './Career.styles.jsx';
//import styles from './career.module.css';
import CareerImg from '../../assets/CareerImg.svg';
import CareerImg2 from '../../assets/CareerImg2.svg';
import Button from '../button/button';

const LandingPageCareer = () => {
  return (
    <CareerContainer>
      <HeaderSection>
        <div className={'top-left'}>
          <h1>Be a part of our mission</h1>
        </div>
        <div className={'top-right'}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in<br/>mauris a magna imperdiet rhoncus a a velit. Quisque</p>
        </div>
      </HeaderSection>

      <CareerContent>
        <CareerBox>
          <ImgCareer
            src={CareerImg}
            alt="Career"
          />
          <CareerBoxContent>
            <h1>I Want to Hire</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipis<br/> elit. Cras in mauris a magna</p>
            <Button size={'small'} backgroundColor={'#78B6FF'} label={'More'} />
          </CareerBoxContent>
        </CareerBox>
        <CareerBox>
          <ImgCareer
            src={CareerImg2}
            alt="Career"
          />
          <CareerBoxContent>
            <h1>I’m a Student</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipis<br /> elit. Cras in mauris a magna</p>
            <Button size={'small'} backgroundColor={'#78B6FF'} label={'More'} />
          </CareerBoxContent>
        </CareerBox>
      </CareerContent>
      

      

      {/* <div className={styles['bottom-text']}>
        <div className={styles['text-section']}>
           Blue Box for I Want to Hire 
          <div className={styles['blue-box1']}>
            <div>
              <ImgCareer
                src={CareerImg}
                alt="Career"
              />
            </div>
            <div className={styles['text-container']}>
              <h2>I Want to Hire</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipis<br/> elit. Cras in mauris a magna</p>
              <Button size={'small'} backgroundColor={'#78B6FF'} label={'More'} />
            </div>
            
          </div>
        </div>
        
        <div className={styles['text-section']}>
          {/* Blue Box for I'm a Student *
          <div className={styles['blue-box2']}>
            <div>
              <ImgCareer
                src={CareerImg2}
                alt="Career"
              />
        </div>
            <div className={styles['text-container']}>
              <h2>I’m a Student</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipis<br /> elit. Cras in mauris a magna</p>
              <Button size={'small'} backgroundColor={'#78B6FF'} label={'More'} />
            </div>
          </div>
        </div>
      </div> */}
    </CareerContainer>
  );
};

export default LandingPageCareer;

