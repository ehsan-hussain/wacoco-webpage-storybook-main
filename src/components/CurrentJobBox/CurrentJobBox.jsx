import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const CurrentJobBox = () => {
    const [currentJob, setCurrentJob] = useState(() => {
        const savedJob = localStorage.getItem('currentJob');
        return savedJob ? savedJob : '';
    });

    useEffect(() => {
        localStorage.setItem('currentJob', currentJob);
    }, [currentJob]);

    const handleCurrentJob = (e) => {
        setCurrentJob(e.target.value);
    };

    return (
        <Form>
            <Container>
                <label>Current Job</label>
                <br />
                <input
                    type="text"
                    id="currentJob"
                    name="currentJob"
                    placeholder="Current Job"
                    value={currentJob}
                    onChange={handleCurrentJob}
                />
            </Container>
        </Form>
    );
};

export default CurrentJobBox;

const Form = styled.div`
    display: flex;
    justify-content: center;
`;

const Container = styled.div`
    padding: 20px;

    input {
        height: 48px;
        width: 420px;
        outline: none;
        border: 2px solid #dbe2ff;
        border-radius: 4px;
        text-indent: 18px;
        margin-top: 8px;
    }
    input:focus {
        border: 2px solid #dbe2ff;
        border-radius: 4px;
        outline: none;
    }
`;
