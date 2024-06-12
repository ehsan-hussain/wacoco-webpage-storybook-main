// YourPath.js
import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Closebutton from '../CloseButton/Closebutton';




const YourPath = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    // const navigate = useNavigate();  

    // const handleNavigation = () => {
    //     if (selectedOption === 'student') {
    //         navigate('/student-form');  
    //     } else if (selectedOption === 'job') {
    //         navigate('/work-form-pro');
    //     }
    // };

  return (
    <Container>
    <Closebutton />
      <Title>Join Our Team</Title>
      <p>Choose your path below and let's get started!</p>
      <OptionsContainer>
        <Option 
          isSelected={selectedOption === 'student'}  
          onClick={() => setSelectedOption('student')}
        >
          <h3>Student Application</h3>
          <p>Seeking internships or valuable experience? Apply here!</p>
        </Option>
        <Option 
        isSelected={selectedOption === 'job'}
        onClick={() => setSelectedOption('job')}
        >
          <h3>Job Opportunities</h3>
          <p>Ready to take the next step? Your journey begins with a few questions.</p>
        </Option>
      </OptionsContainer>
      <Button>Start</Button>
      {/* <Button onClick={handleNavigation}>Start</Button> */}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  max-width: 500px;
  border: 2px solid #dbe2ff;
  border-radius: 20px;
  margin: 80px auto;
  padding: 20px;
`;

const Title = styled.h2`
  color: #333;
`;

const OptionsContainer = styled.div`
  display: flex;
  width: 100%; 
  justify-content: space-around; 
  margin: 20px 0;`;

const Option = styled.div`
    background: ${({ isSelected }) => isSelected ? '#DBE2FF' : 'white'};
  border: 1px solid #ccc;
  padding: 20px; 
  margin: 10px;
  width: 80%; 
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

const Button = styled.button`
  width: 90%;
  padding: 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
`;

export default YourPath;
