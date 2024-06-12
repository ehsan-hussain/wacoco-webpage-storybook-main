import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const CurrentCompany = () => {
    const [currentCompany, setCurrentCompany] = useState(() => {
        const savedCompany = localStorage.getItem('currentCompany');
        return savedCompany ? savedCompany : '';
    });

    useEffect(() => {
        localStorage.setItem('currentCompany', currentCompany);
    }, [currentCompany]);

    const handleCurrentCompany = (e) => {
        setCurrentCompany(e.target.value);
    };

    return (
        <Form>
            <Container>
                <label>Current Company</label>
                <br />
                <input
                    type="text"
                    id="currentCompany"
                    name="currentCompany"
                    placeholder="Current Company"
                    value={currentCompany}
                    onChange={handleCurrentCompany}
                />
            </Container>
        </Form>
    );
};

export default CurrentCompany;

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
