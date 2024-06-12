import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const BodyFlow4 = () => {
    const [blockBox3Text, setBlockBox3Text] = useState(() => {
        const savedText = localStorage.getItem('blockBox3Text');
        return savedText ? savedText : '';
    });

    const [blockBox4Text, setBlockBox4Text] = useState(() => {
        const savedText = localStorage.getItem('blockBox4Text');
        return savedText ? savedText : '';
    });

    useEffect(() => {
        localStorage.setItem('blockBox3Text', blockBox3Text);
        localStorage.setItem('blockBox4Text', blockBox4Text);
    }, [blockBox3Text, blockBox4Text]);

    const handleBlockBox3TextChange = (e) => {
        setBlockBox3Text(e.target.value);
    };

    const handleBlockBox4TextChange = (e) => {
        setBlockBox4Text(e.target.value);
    };

    return (
        <Form>
            <Container>
                <label>Have you managed or led any software development projects before? If yes, please provide details:</label>
                <input
                    type="text"
                    id="blockBox3Text"
                    name="blockBox3Text"
                    placeholder=""
                    value={blockBox3Text}
                    onChange={handleBlockBox3TextChange}
                />
                <label>What are your career goals or aspirations within the field of IT/Software Development? Please provide specific dates:</label>
                <input
                    type="text"
                    id="blockBox4Text"
                    name="blockBox4Text"
                    placeholder=""
                    value={blockBox4Text}
                    onChange={handleBlockBox4TextChange}
                />
            </Container>
        </Form>
    );
};

export default BodyFlow4;

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
        margin-bottom: 8px; 
    }
    input:focus {
        border: 2px solid #dbe2ff;
        border-radius: 4px;
        outline: none;
    }
    label {
        display: block;
        margin-bottom: 8px;  
    }
`;
