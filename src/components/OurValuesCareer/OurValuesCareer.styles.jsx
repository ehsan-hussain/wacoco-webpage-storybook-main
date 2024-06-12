import styled from "styled-components";

export const OurValuesCareerContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #333;  // Dark gray background
    color: white;
    padding: 50px;  // Adjust as needed
    font-family: 'Helvetica', sans-serif;
    font-size: 22px;
`;

export const OurValuesCareerContent = styled.div`
    display: flex;
    flex-direction: row;  // Horizontal layout
    justify-content: space-around;  // Even spacing between sections
    align-items: center;  // Vertical alignment
    gap: 50px;  // Space between sections

    div {
        text-align: center;  // Center the content within each section
        padding: 20px;  // Adjust as needed
    }

    h1 {
        font-size: 28px;
        font-family: 'Poppins', sans-serif;
        font-weight: 700;
    }

    p {
        font-size: 16px;
        color: lightgray;  // Lighter color for paragraphs
    }
`;
