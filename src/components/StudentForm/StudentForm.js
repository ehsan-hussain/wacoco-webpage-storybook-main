import { ErrorMessage } from 'formik';
import React, { useState } from 'react';
import styled from 'styled-components';
import CloseButton from '../CloseButton/Closebutton';
import NextButton from '../PreviousAndNextButtons/NextButton';
import PreviousButton from '../PreviousAndNextButtons/PreviousButton';
import WorkFlowStudent1 from '../pages/WorkFlowStudent1/WorkFlowStudent1';
import WorkFlowStudent2 from '../pages/WorkFlowStudent2/WorkFlowStudent2';
import WorkFlowStudent3 from '../pages/WorkFlowStudent3/WorkFlowStudent3';
import WorkFlowStudent4 from '../pages/WorkFlowStudent4/WorkFlowStudent4';
import WorkFlowStudent5 from '../pages/WorkFlowStudent5/WorkFlowStudent5';

const StudentForm = () => {
    const [page, setPage] = useState(0);

    const handleNext = () => {
        setPage(prevPage => prevPage + 1);
    };

    const handleBack = () => {
        setPage(prevPage => (prevPage > 0 ? prevPage - 1 : 0));
    };

    const handleSubmit = () => {
        // This could be adjusted to finalize the form
        // You may want to perform a form submission process here
        console.log("Form submitted!");
    };

    const conditionalComponent = () => {
        switch (page) {
            case 0:
                return <WorkFlowStudent1 />;
            case 1:
                return <WorkFlowStudent2 />;
            case 2:
                return <WorkFlowStudent3 />;
            case 3:
                return <WorkFlowStudent4 />;
            case 4:
                return <WorkFlowStudent5 />;
            default:
                return <ErrorMessage>Error: Page not found!</ErrorMessage>;
        }
    };

    return (
        <Container>
            <CloseButton />
            {conditionalComponent()}
            <NavigationButtons>
                <PreviousButton onClick={handleBack}>Back</PreviousButton>
                {page < 4 ? (
                    <NextButton onClick={handleNext}>Next</NextButton>
                ) : (
                    <NextButton onClick={handleSubmit}>Submit</NextButton>
                )}
            </NavigationButtons>
        </Container>
    );
};

export default StudentForm;

const Container = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: auto;
    width: 90%;
    max-width: 500px;
    border: 2px solid #dbe2ff;
    border-radius: 20px;
    margin: 80px auto;
`;

const NavigationButtons = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 20px;
`;
