import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const BlockBox3 = () => {
    const [text, setText] = useState(() => {
        const savedText = localStorage.getItem('blockBox3Text');
        return savedText ? savedText : '';
    });

    useEffect(() => {
        localStorage.setItem('blockBox3Text', text);
    }, [text]);

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    return (
       <Form>
            <Container>
                <label>Have you managed or led any software development projects <br /> before? If yes, please provide details:</label>
                <br />
                <input
                    type="text"
                    id="blockBox3Text"
                    name="blockBox3Text"
                    placeholder=""
                    value={text}
                    onChange={handleTextChange}
                />
            </Container>
        </Form>
    );
};

export default BlockBox3;

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