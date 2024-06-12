import React from 'react';
import CTA from './CTA';
import ctaImage from '../../assets/CTAImg.svg';

export default {
    title: 'main_ui/LandingPage/CTA',
    component: CTA,
    argTypes: {
        label: { control: 'text' },
        ctaImage: { control: 'text' },
    },
};

const Template = (args) => <CTA {...args} />;

export const CallToAction = Template.bind({});
CallToAction.args = {
    ctaImage: ctaImage,
    label: 'Contact us',
};
