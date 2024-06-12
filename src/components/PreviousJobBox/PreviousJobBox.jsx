import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const PreviousJobBox = () => {
    const [previousJob, setPreviousJob] = useState(() => {
        const savedJob = localStorage.getItem('previousJob');
        return savedJob ? savedJob : '';
    });

    useEffect(() => {
        localStorage.setItem('previousJob', previousJob);
    }, [previousJob]);

    const handlePreviousJob = (e) => {
        setPreviousJob(e.target.value);
    };

    return (
        <Form>
            <Container>
                <label>Previous job titles and Companies If applicable:</label>
                <br />
                <input
                    type="text"
                    id="previousJob"
                    name="previousJob"
                    placeholder=""
                    value={previousJob}
                    onChange={handlePreviousJob}
                />
            </Container>
        </Form>
    );
};

export default PreviousJobBox;

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
    }
    input:focus {
        border: 2px solid #dbe2ff;
        border-radius: 4px;
        outline: none;
    }
`;
