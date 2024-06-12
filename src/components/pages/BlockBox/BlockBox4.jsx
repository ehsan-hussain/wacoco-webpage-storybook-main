import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const BlockBox4 = () => {
    const [text, setText] = useState(() => {
        const savedText = localStorage.getItem('blockBox4Text');
        return savedText ? savedText : '';
    });

    useEffect(() => {
        localStorage.setItem('blockBox4Text', text);
    }, [text]);

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    return (
       <Form>
            <Container>
                <label>What are your career goals or aspirations within the field of <br /> IT/Software Development? Please provide specific dates:</label>
                <br />
                <input
                    type="text"
                    id="blockBox4Text"
                    name="blockBox4Text"
                    placeholder=""
                    value={text}
                    onChange={handleTextChange}
                />
            </Container>
        </Form>
    );
};

export default BlockBox4;

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
