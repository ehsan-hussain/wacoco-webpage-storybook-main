import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const PreferredRole = () => {
    const [InputOption, SetInputOption] = useState('')

    const handleButtonClick = (e) => {
        SetInputOption(e)
        localStorage.setItem('InputOption', e)
    }
    useEffect(() => {
        const savePreferredRole = localStorage.getItem('InputOption')
        if (savePreferredRole) {
            SetInputOption(savePreferredRole)
        }
    }, [])

    return (
        <Container>
            <TitleContnet>
                <h1>Preferred role</h1>
                <p>Choose or Specify your role in software development</p>
            </TitleContnet>
            <Input>
                <input placeholder="Specify your role" value={InputOption} />
            </Input>
            <Buttons>
                <button
                    className="Developer"
                    onClick={() => handleButtonClick('Developer')}
                >
                    Developer
                </button>
                <button
                    className="Designer"
                    onClick={() => handleButtonClick('Designer')}
                >
                    Designer
                </button>
                <button
                    className="Tester"
                    onClick={() => handleButtonClick('Tester')}
                >
                    Tester
                </button>

                <br />
                <button
                    className="ProjectManager"
                    onClick={() => handleButtonClick('Project Manager')}
                >
                    Project Manager
                </button>
                <button
                    className="Other"
                    onClick={() => handleButtonClick('Other')}
                >
                    Other
                </button>
            </Buttons>
        </Container>
    )
}

export default PreferredRole

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 80px;
`
const TitleContnet = styled.div`
    h1 {
        font-size: 20px;
        font-family: 'Inter', sans-serif;
        margin-top: 8px;
        margin-right: 280px;
    }
    p {
        font-size: 18px;
        font-family: 'Helvetica', sans-serif;
        color: #797b8e;
        margin-top: 8px;
    }
`

const Input = styled.div`
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
        border: 2px solid #3850cc;
        border-radius: 4px;
        outline: none;
    }
`
const Buttons = styled.div`
    margin-top: 15px;
    margin-left: -120px;

    button {
        height: 42px;
        font-size: 16px;
        color: #797b8e;
        border-radius: 30px;
        border: 2px solid #dbe2ff;
        background-color: white;
        margin: 5px;
        cursor: pointer;
    }
    button:focus {
        border: 2px solid #3850cc;
        background-color: #dbe2ff;
        color: #3850cc;
        font-weight: bold;
    }
    .Developer {
        width: 109px;
    }
    .Designer {
        width: 100px;
    }
    .Tester {
        width: 80px;
    }
    .ProjectManager {
        width: 157px;
    }
    .Other {
        width: 75px;
    }
`
