import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const PreviousJobBox2 = () => {
   
    const [text, setText] = useState(() => {
        const savedText = localStorage.getItem('previousJob2');
        return savedText ? savedText : '';
    });

    useEffect(() => {
        localStorage.setItem('previousJob2', text);
    }, [text]);

    const handlePreviousJob = (e) => {
        setText(e.target.value);
    };
    

    return (
        <Form>
            <Container>
                <label>Have you worked in any specific domains or industries within <br /> IT/Software
                Development? If yes, please provide details:</label>
                <br />
                <input
                    type="text"
                    id="previousJob2"
                    name="previousJob2"
                    placeholder=""
                    value={text}
                    onChange={handlePreviousJob}
                />
            </Container>
        </Form>
    );
};

export default PreviousJobBox2;

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
