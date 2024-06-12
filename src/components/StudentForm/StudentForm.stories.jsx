// StudentForm.stories.jsx
import React from 'react';
import StudentForm from './StudentForm';

export default {
    title: 'Components/StudentForm',
    component: StudentForm,
};

const Template = (args) => <StudentForm {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Step1 = Template.bind({});
Step1.args = {
    page: 1, // This might need adjustment based on actual implementation details
};
