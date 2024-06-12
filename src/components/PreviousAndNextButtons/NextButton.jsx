import React from 'react';
import styled from 'styled-components';

const NextButton = ({ onClick }) => (
    <StyledButton type="button" onClick={onClick}>
        Next step
    </StyledButton>
);

export default NextButton;

const StyledButton = styled.button`
    height: 48px;
    width: 198px;
    border-radius: 6px;
    font-weight: bold;
    font-size: 18px;
    background-color: #dbe2ff;
    color: white;
    border: none;
    cursor: pointer;
    margin: 15px;

    &:focus {
        color: white;
        background-color: #3850cc;
    }
`;
