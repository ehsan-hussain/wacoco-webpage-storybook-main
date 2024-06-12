import React from 'react';
import styled from 'styled-components';

const PreviousButton = ({ onClick }) => (
    <StyledButton type="button" onClick={onClick}>
        Previous step
    </StyledButton>
);

export default PreviousButton;

const StyledButton = styled.button`
    height: 48px;
    width: 198px;
    border-radius: 6px;
    font-weight: bold;
    font-size: 18px;
    border: solid 2px #3850cc;
    background-color: white;
    color: #3850cc;
    cursor: pointer;
    margin: 15px;

    &:focus {
        color: white;
        background-color: #218fbe;
        border: none;
    }
`;
