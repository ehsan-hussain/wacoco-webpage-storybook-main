import React, { useEffect, useState } from 'react';
import { PhoneInput } from 'react-international-phone'; // Ensure this package is installed
import 'react-international-phone/style.css'; // Make sure this is correctly imported
import styled from 'styled-components';

const BodyFlow1 = () => {
    const [name, setName] = useState(() => {
        const savedName = localStorage.getItem('name');
        return savedName ? savedName : '';
    });

    const [email, setEmail] = useState(() => {
        const savedEmail = localStorage.getItem('Email');  // Make sure to follow the correct case usage
        return savedEmail ? savedEmail : '';
    });

    useEffect(() => {
        localStorage.setItem('name', name);
        localStorage.setItem('Email', email);  // Ensure this key matches what's being used in setEmail
    }, [name, email]);

    const handleName = (e) => {
        setName(e.target.value);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    return (
        <Form>
            <Container>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    value={name}
                    onChange={handleName}
                />
                <label htmlFor="Email">Email</label>
                <input
                    type="text"
                    id="Email"
                    name="Email"
                    placeholder="✉️ Email address"
                    value={email}
                    onChange={handleEmail}
                />
                <label htmlFor="Phone">Phone</label>
                <PhoneInput 
                    inputStyle={{ width: '385px', border: "2px solid #dbe2ff"}}
                    defaultCountry="se" 
                    style={{
                        '--react-international-phone-height': '48px',
                    }} 
                />
            </Container>
        </Form>
    );
};

export default BodyFlow1;
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
        border: 2px solid #dbe2ff
        border-radius: 4px;
        text-indent: 18px;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    input:focus {
        border: 2px solid #dbe2ff
        border-radius: 4px;
        outline: none;
    }
    label {
        display: block;
        margin-bottom: 5px;
    }
`;