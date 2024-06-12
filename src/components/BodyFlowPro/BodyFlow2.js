import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const BodyFlow2 = () => {
    const [currentJob, setCurrentJob] = useState(() => {
        const savedJob = localStorage.getItem('currentJob');
        return savedJob ? savedJob : '';
    });
    const [currentCompany, setCurrentCompany] = useState(() => {
        const savedCompany = localStorage.getItem('currentCompany');
        return savedCompany ? savedCompany : '';
    });
    const [workExperience, setWorkExperience] = useState(() => {
        const savedExperience = localStorage.getItem('workExperience');
        return savedExperience ? savedExperience : '';
    });

    useEffect(() => {
        localStorage.setItem('currentJob', currentJob);
        localStorage.setItem('currentCompany', currentCompany);
        localStorage.setItem('workExperience', workExperience);
    }, [currentJob, currentCompany, workExperience]);

    return (
        <Form>
            <Container>
                <label>Current Job</label>
                <input
                    type="text"
                    id="currentJob"
                    name="currentJob"
                    placeholder="Current Job"
                    value={currentJob}
                    onChange={(e) => setCurrentJob(e.target.value)}
                />
                <label>Current Company</label>
                <input
                    type="text"
                    id="currentCompany"
                    name="currentCompany"
                    placeholder="Current Company"
                    value={currentCompany}
                    onChange={(e) => setCurrentCompany(e.target.value)}
                />
                <label>Work Experience</label>
                <input
                    type="text"
                    id="workExperience"
                    name="workExperience"
                    placeholder="Enter your work experience"
                    value={workExperience}
                    onChange={(e) => setWorkExperience(e.target.value)}
                />
            </Container>
        </Form>
    );
};

export default BodyFlow2;

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
        margin-top: 10px;
        margin-bottom: 10px;
    }
    input:focus {
        border: 2px solid #dbe2ff;
        border-radius: 4px;
        outline: none;
    }
    label {
        display: block;
        margin-bottom: 5px;
    }
`;
