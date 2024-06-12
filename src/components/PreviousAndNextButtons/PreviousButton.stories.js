import React from 'react';
import PreviousButton from './PreviousButton';

export default {
  title: 'Buttons/PreviousButton',
  component: PreviousButton,
};

const Template = (args) => <PreviousButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  onClick: () => alert('Previous button clicked'),
  children: 'Previous step',
};

export const GoBack = Template.bind({});
GoBack.args = {
  onClick: () => alert('Go Back button clicked'),
  children: 'Go Back',
};
