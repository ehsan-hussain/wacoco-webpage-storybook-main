import React from 'react';
import NextButton from './NextButton';

export default {
  title: 'Buttons/NextButton',
  component: NextButton,
};

const Template = (args) => <NextButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  onClick: () => alert('Next button clicked'),
  children: 'Next step',
};

export const Submit = Template.bind({});
Submit.args = {
  onClick: () => alert('Submit button clicked'),
  children: 'Submit',
};
