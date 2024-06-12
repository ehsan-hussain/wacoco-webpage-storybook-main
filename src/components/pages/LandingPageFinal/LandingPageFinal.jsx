import React from "react";
import Header from "../../header/header";
import HeroLanding from "../../Hero/Hero";
import MeetWacoco from "../../MeetWacoco/MeetWacoco";
import OurStoryandVision from "../../OurStoryandVision/OurStoryandVision";
import WhyChooseUs from "../../WhyChooseUs/WhyChooseUs";
import PhotoSlider from "../../AboutUsPhotoSlider/PhotoSlider";
import Consulation from "../../Consulation/Consulation";
import CTA from "../../CallToAction/CTA";
import Footer from "../../footer/Footer";

import ctaImage from "../../../assets/CTAImg.svg";


const LandingPageFinal = ({ items, slides, teamMembersInfo, footerInfo }) => {
    return (
        <>
            <Header items={items} />
            <HeroLanding />
            <MeetWacoco />
            <OurStoryandVision slides={slides} />
            <WhyChooseUs />
            <PhotoSlider teamMembersInfo={teamMembersInfo} />
            <Consulation />
            <CTA ctaImage={ctaImage} />
            <Footer items={items} footerInfo={footerInfo} />
        </>
    );
};

export default LandingPageFinal;