import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const WorkExperience = () => {
    const [workExperience, setWorkExperience] = useState(() => {
        const savedExperience = localStorage.getItem('workExperience');
        return savedExperience ? savedExperience : '';
    });

    useEffect(() => {
        localStorage.setItem('workExperience', workExperience);
    }, [workExperience]);

    const handleWorkExperience = (e) => {
        setWorkExperience(e.target.value);
    };

    return (
        <Form>
            <Container>
                <label>Work Experience</label>
                <br />
                <input
                    type="text"
                    id="workExperience"
                    name="workExperience"
                    placeholder="Enter your work experience"
                    value={workExperience}
                    onChange={handleWorkExperience}
                />
            </Container>
        </Form>
    );
};

export default WorkExperience;

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


