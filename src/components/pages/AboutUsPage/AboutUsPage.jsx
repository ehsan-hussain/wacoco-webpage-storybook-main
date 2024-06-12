import Header from '../../header/header';
import About from '../../AboutUs/About';
import AboutUsStory from '../../AboutUsStory/AboutUsStory';
import ScrollingText from '../../AboutUsScrollingText/ScrollingText';
import AboutUsCTA from '../../AboutUsCTA/AboutUsCTA';
import OurLeadership from '../../OurLeadership/OurLeadership';
import PhotoSlider from '../../AboutUsPhotoSlider/PhotoSlider';
import CallToAction from '../../CallToAction/CTA';
import Footer from '../../footer/Footer';


//Assets

import ctaImage from "../../../assets/CTAImg.svg";
import { teamMembersInfo } from '../../../data/data';

const AboutUsPage = ({items, footerInfo}) => {
    return (
        <>
            <Header items={items} />
            <About />
            <AboutUsStory />
            <ScrollingText />
            <AboutUsCTA />
            <OurLeadership />
            <PhotoSlider teamMembersInfo={teamMembersInfo} />
            <CallToAction ctaImage={ctaImage} />
            <Footer items={items} footerInfo={footerInfo} />
        </>
    );
};

export default AboutUsPage;