import React from 'react';
import './BeOurMission.css';
import Button from '../button/button' ;

const BeOurMissionLP = () => {
  return (
    <div className="be-our-mission-lp">
      <div className="be-our-mission-lp__left">
        <h1 className="be-our-mission-lp__headline">Be our mission</h1>
      </div>
      <div className="be-our-mission-lp__right">
        <p className="be-our-mission-lp__subheadline">Are you interested in boosting your career in IT?</p>
        <Button className="be-our-mission-lp__explore-btn">Explore</Button>
      </div>
    </div>
  );
};

export default BeOurMissionLP;
