import { ErrorMessage } from 'formik';
import React, { useState } from 'react';
import styled from 'styled-components';
import Closebutton from '../../CloseButton/Closebutton';
import NextButton from '../../PreviousAndNextButtons/NextButton';
import PreviousButton from '../../PreviousAndNextButtons/PreviousButton';
import WorkFlowPro1 from './WorkFlowPro';
import WorkFlowPro2 from './WorkFlowPro2';
import WorkFlowPro3 from './WorkFlowPro3';
import WorkFlowPro4 from './WorkFlowPro4';
import WorkFlowPro5 from './WorkFlowPro5';
import WorkFlowPro6 from './WorkFlowPro6';

const WorkFormPro = () => {

  const [page, setPage] = useState(0);

  const handleNext = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleBack = () => {
    setPage((prevPage) => (prevPage > 0 ? prevPage - 1 : 0));
  };

  const handleSubmit = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const conditionalComponent = () => {
  switch (page) {
    case 0:
      return <WorkFlowPro1 />; 
    case 1:
      return <WorkFlowPro2 />;
    case 2:
      return <WorkFlowPro3 />;
    case 3:
      return <WorkFlowPro4 />;
    case 4:
      return <WorkFlowPro5 />;
    case 5:
      return <WorkFlowPro6 />;
    default:
      return <ErrorMessage>Error: Page not found!</ErrorMessage>; // Adjusted default case
  }
}; 


  return (
  <Container>
  <Closebutton />
  {conditionalComponent()}
  <NavigationButtons>
    <PreviousButton 
      onClick={() => { 
        if (page > 0) handleBack(); 
      }}
    >
      Back
    </PreviousButton>
    {page < 4 ? (
      <NextButton 
        onClick={handleNext}
      >
        Next
      </NextButton>
    ) : (
      <NextButton 
        onClick={() => {
          if (page === 4) handleSubmit();
        }}
      >
        Submit
      </NextButton>
    )}
  </NavigationButtons>
</Container>

  );
};

export default WorkFormPro;

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
