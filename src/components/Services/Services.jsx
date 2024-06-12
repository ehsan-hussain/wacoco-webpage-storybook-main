import React from 'react';
import styles from './services.module.css';
import ServiceSoftware from '../../assets/Service-Software.svg';
import ServiceConsultation from '../../assets/Service-Consultation.svg';
import ServiceRecruitment from '../../assets/Service-Recruitment.svg';
import ServiceCoaching from '../../assets/Service-Coaching.svg';
//import { useHover } from '@uidotdev/usehooks';
import Button from '../button/button';

function Service({ imgSrc, imgAlt, title }) {
    //const [hoverRef, isHovered] = useHover();
  
    return (
      <div  className={styles.ServiceWrapper}>
        <img loading="lazy" src={imgSrc} alt={imgAlt} className={styles.ServiceImage} />
        {  (
          <div className={styles.ServiceOverlay}>
            <p className={styles.OverlayTitle}>{title}</p>
            <Button className={styles.OverlayButton} label="Learn More" backgroundColor={'blue'} />
                <p className={styles.OverlayText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          </div>
        )}
      </div>
    );
  }
function Services(props) {
  return (
    <div className={styles.Container}>
      <div className={styles.Header}>
        <h2 className={styles.Title}>Services</h2>
        <p className={styles.Description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in
          mauris a magna 
        </p>
        <Button className={styles.ButtonHover1} label="Services" backgroundColor={'blue'}/>
      </div>
      <div className={styles.ServicesList}>
        <Service imgSrc={ServiceSoftware} imgAlt="Software Development" title="Software Development" />
        <Service imgSrc={ServiceConsultation} imgAlt="Consultation Service" title="Consultation" />
        <Service imgSrc={ServiceRecruitment} imgAlt="Recruitment Service" title="Recruitment" />
        <Service imgSrc={ServiceCoaching} imgAlt="Coaching Service" title="Coaching" />
      </div>
    </div>
  );
}

export default Services;
