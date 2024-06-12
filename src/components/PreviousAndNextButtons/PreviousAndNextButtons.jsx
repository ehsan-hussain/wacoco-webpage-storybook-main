import React, { useState } from 'react';
import styled from 'styled-components';

const PreviousAndNextButtons = () => {
    const [currentStep, setCurrentStep] = useState(0)

    const PreviousStep = () => {
        setCurrentStep(currentStep + 1)
    }
    const NextStep = () => {
        setCurrentStep(currentStep - 1)
    }

    return (
        <Container>
            <button
                type="button"
                onClick={PreviousStep}
                className="previousButton"
            >
                Previous step
            </button>
            <button type="button" onClick={NextStep} className="nextButton">
                Next step
            </button>
        </Container>
    )
}

export default PreviousAndNextButtons

const Container = styled.div`
    display: flex;
    justify-content: center;
    button {
        height: 48px;
        width: 198px;
        border-radius: 6px;
        font-weight: bold;
        font-size: 18px;
        margin: 15px;
        cursor: pointer;
        margin-top: 40px;
    }
    .previousButton {
        border: solid 2px #3850cc;
        background-color: white;
        color: #3850cc;
    }
    .nextButton {
        background-color: #dbe2ff;
        color: white;
        border: none;
    }
    .previousButton:focus {
        color: white;
        background-color: #218fbe;
        border: none;
    }
    .nextButton:focus {
        color: white;
        background-color: #3850cc;
    }
`
