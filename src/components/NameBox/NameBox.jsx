import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const NameBox = () => {
    const [name, setName] = useState(() => {
        const saveName = localStorage.getItem('name')
        return saveName ? saveName : ''
    })
    useEffect(() => {
        localStorage.setItem('name', name)
    }, [name])
    const handleName = (e) => {
        setName(e.target.value)
    }
    return (
        <Form>
            <Container>
                <label for="name">Name</label>
                <br />
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    value={name}
                    onChange={handleName}
                />
            </Container>
        </Form>
    )
}

export default NameBox

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
`
