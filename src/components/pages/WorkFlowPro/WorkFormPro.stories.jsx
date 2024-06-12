import React from 'react';
import WorkFormPro from './WorkFormPro';

export default {
  title: 'Components/WorkFormPro', // Story location in Storybook
  component: WorkFormPro,
};

const Template = (args) => <WorkFormPro {...args} />;

// Default story for basic structure
export const Default = Template.bind({});
Default.args = {
  page: 0, // Initial step
  handleNext: () => console.log('Next step clicked'),
  handleBack: () => console.log('Previous step clicked'),
};

// Story to demonstrate navigating to step 1
export const Step1 = Template.bind({});
Step1.args = {
  page: 1,
  handleNext: () => console.log('Next step clicked'),
  handleBack: () => console.log('Previous step clicked'),
};
