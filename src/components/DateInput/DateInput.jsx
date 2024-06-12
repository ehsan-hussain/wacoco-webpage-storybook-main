import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const DateInput = () => {
    const [formDate, setFormDate] = useState({ fromDate: '', toDate: '' })

    useEffect(() => {
        const saveData = localStorage.getItem('formDate')
        if (saveData) {
            setFormDate(JSON.parse(saveData))
        }
    }, [])

    const handleInput = (e) => {
        const { name, value } = e.target
        setFormDate((prevState) => ({ ...prevState, [name]: value }))
        localStorage.setItem(
            'formDate',
            JSON.stringify({ ...formDate, [name]: value })
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <Container>
            <TextContainer>
                <p>
                    How long are you available for the Lia Program? Please
                    provide
                    <br />
                    specific dates:
                </p>
            </TextContainer>
            <FormContainer>
                <Form onSubmit={handleSubmit}>
                    <div>
                        <label for="fromDate">From</label> <br />
                        <input
                            type="date"
                            id="fromDate"
                            name="fromDate"
                            value={formDate.fromDate}
                            onChange={handleInput}
                        />
                    </div>
                    <div>
                        <label for="toDate">To</label> <br />
                        <input
                            type="date"
                            id="toDate"
                            name="toDate"
                            value={formDate.toDate}
                            onChange={handleInput}
                        />
                    </div>
                </Form>
            </FormContainer>
        </Container>
    )
}

export default DateInput

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 50px;
`
const TextContainer = styled.div`
    p {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 14px;
        font-weight: 600;
    }
`
const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`
const Form = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    input[type='date']::-webkit-calendar-picker-indicator {
        display: none;
        -webkit-appearance: none;
    }
    input {
        color: #797b8e;
        outline: none;
        border: 2px solid #dbe2ff;
        border-radius: 4px;
        height: 48px;
        width: 205px;
        font-size: 14px;
        text-indent: 10px;
    }
    label {
        color: #797b8e;
        font-size: 13px;
        font-family: Arial, Helvetica, sans-serif;
    }
`
