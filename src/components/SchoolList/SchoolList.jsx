import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const SchoolList = () => {
    const [University, setUniversity] = useState(() => {
        const saveUniversity = localStorage.getItem('University')
        return saveUniversity ? saveUniversity : ''
    })
    useEffect(() => {
        localStorage.setItem('University', University)
    }, [University])
    const handleUniversityName = (e) => {
        setUniversity(e.target.value)
    }
    return (
        <Form>
            <Container>
                <label for="University">University or Institution</label>
                <br />
                <input
                    type="text"
                    id="University"
                    Name="University"
                    placeholder="University Name"
                    value={University}
                    onChange={handleUniversityName}
                />
            </Container>
        </Form>
    )
}

export default SchoolList

const Form = styled.div`
    display: flex;
    justify-content: center;
`
const Container = styled.div`
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
        background-color: #dbe2ff;
    }
`
