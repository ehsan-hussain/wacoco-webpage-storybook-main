import React from 'react';
import StepFlow from './stepFlow'; 

export default {
  title: 'Components/StepFlow',
  component: StepFlow,
};

const Template = (args) => <StepFlow {...args} />;

export const Default = Template.bind({});
Default.args = {};
