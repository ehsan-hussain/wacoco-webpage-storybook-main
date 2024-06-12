import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const BodyFlow3 = () => {
    // State for the first previous job input
    const [previousJob, setPreviousJob] = useState(() => {
        const savedJob = localStorage.getItem('previousJob');
        return savedJob ? savedJob : '';
    });

    // State for the second previous job input
    const [text, setText] = useState(() => {
        const savedText = localStorage.getItem('previousJob2');
        return savedText ? savedText : '';
    });

    // Effect to save first previous job to local storage
    useEffect(() => {
        localStorage.setItem('previousJob', previousJob);
    }, [previousJob]);

    // Effect to save second previous job to local storage
    useEffect(() => {
        localStorage.setItem('previousJob2', text);
    }, [text]);

    const handlePreviousJob = (e) => {
        setPreviousJob(e.target.value);
    };

    const handlePreviousJob2 = (e) => {
        setText(e.target.value);
    };

    return (
        <Form>
            <Container>
                <label>Previous job titles and Companies If applicable:</label>
                <input
                    type="text"
                    id="previousJob"
                    name="previousJob"
                    value={previousJob}
                    onChange={handlePreviousJob}
                />
                <label>Have you worked in any specific domains or industries within IT/Software Development? If yes, please provide details:</label>
                <input
                    type="text"
                    id="previousJob2"
                    name="previousJob2"
                    value={text}
                    onChange={handlePreviousJob2}
                />
            </Container>
        </Form>
    );
};

export default BodyFlow3;

const Form = styled.div`
    display: flex;
    justify-content: center;
`;

const Container = styled.div`
    padding: 30px;

    input {
        height: 100px;
        width: 420px;
        outline: none;
        border: 2px solid #dbe2ff;
        border-radius: 4px;
        text-indent: 8px;
        margin-top: 8px;
        margin-bottom: 20px; // Added more space between the inputs
    }
    input:focus {
        border: 2px solid #dbe2ff;
        border-radius: 4px;
        outline: none;
    }
    label {
        display: block;
        margin-top: 20px; // Added space above each label for clarity
    }
`;
