import Header from '../../header/header';
import Hero from '../../ServicesPageService/ServicesPageService';
import Software from '../../SoftwareDevelopment/SoftwareDevelopment';
import Consultation from '../../Consulation/Consulation';
import CTA from '../../CallToAction/CTA';
import Footer from '../../footer/Footer';

import ctaImage from "../../../assets/CTAImg.svg";

const ServicesPage = ({items, footerInfo}) => {
    return (
        <>
            <Header items={items} />
            <Hero />
            <Software />
            <Consultation />
            <CTA ctaImage={ctaImage} />
            <Footer items={items} footerInfo={footerInfo} />
        </>
    );
}

export default ServicesPage;