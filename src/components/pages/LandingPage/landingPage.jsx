//Compents
import Header from "../../header/header";
import Footer from "../../footer/Footer";
import CallToAction from "../../CallToAction/CTA";
import LandingPageHero from "../../Hero/Hero";
import MeetWacoco from "../../MeetWacoco/MeetWacoco";
import Services from "../../Services/Services";
import LandingPageCareer from "../../Career/Career";
import OurApproach from "../../ourApproach/ourApproach";
import HowWeWork from "../../HowWeWork/HowWeWork";

//Assets
import ctaImage from "../../../assets/CTAImg.svg";

//Data


const LandingPage = ({items, footerInfo}) => {
    console.log('helvetica ' + document.fonts.check('16px Helvetica'));
    console.log('hello');
    return (
        <>
            <Header items={items} />
            <LandingPageHero />
            <MeetWacoco />
            <OurApproach />
            <Services />
            <HowWeWork />
            <LandingPageCareer />
            <CallToAction ctaImage={ctaImage} />
            <Footer items={items} footerInfo={footerInfo} />
        </>
    );
};

export default LandingPage;