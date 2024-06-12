import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const EmailBox = () => {
    const [Email, setEmail] = useState(() => {
        const saveEmail = localStorage.getItem('Email')
        return saveEmail ? saveEmail : ''
    })
    useEffect(() => {
        localStorage.setItem('Email', Email)
    }, [Email])
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    return (
        <Form>
            <Container>
                <label for="Email">Email</label>
                <br />
                <input
                    type="text"
                    id="Email"
                    Email="Email"
                    placeholder="✉️
                    Email adress"
                    value={Email}
                    onChange={handleEmail}
                />
            </Container>
        </Form>
    )
}

export default EmailBox

const Form = styled.div`
    display: flex;
    justify-content: center;
`
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
    img {
        position: absolute;
        left: 490px;
        top: 53px;
        transform: translate(-50%);
    }
`
