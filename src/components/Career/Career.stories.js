import React from 'react';
import Career from './Career';
import careerImage from '../../assets/CareerImg.svg';
import careerImage2 from '../../assets/CareerImg2.svg';

export default {
  title: 'main_ui/LandingPage/Career',
  component: Career,
  argTypes: {
    label: { control: 'text' },
    careerImage: { control: 'text' },
  },
};

const Template = (args) => <Career {...args} />;

export const CareerSection = Template.bind({});
CareerSection.args = {
  careerImage: careerImage,
  careerImage2: careerImage2,
  label: 'Explore Careers',
};
