import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
// import './TagButtons.styles.css';

const TagButtons = () => {
    const [selectedTags, SetselectedTags] = useState('')
    const handleTagClick = (e) => {
        // if (selectedTags.includes(tag)) {
        //   setSelectedTags(selectedTags.filter((selectedTag) => selectedTag !== tag));
        // } else {
        //   setSelectedTags([...selectedTags, tag]);
        // }
        SetselectedTags(e)
        localStorage.setItem('selectedTags', e)
    }
    useEffect(() => {
        const saveTagButton = localStorage.getItem('selectedTags')
        if (saveTagButton) {
            SetselectedTags(saveTagButton)
        }
    }, [])

    return (
        <Container>
            <TitleContnet>
                <h1>Current course of study</h1>
                <p>
                    Choose or specify your current course of <br />
                    <span>study</span>
                </p>
            </TitleContnet>
            <Input>
                <input placeholder="Course of study" value={selectedTags} />
            </Input>
            <Buttons className="tag-container">
                <button
                    // className={selectedTags.includes('Java') ? 'selected' : ''}
                    className="Java"
                    onClick={() => handleTagClick('Java')}
                    // style={{
                    //   fontFamily: 'Inter, sans-serif',
                    //   fontSize: '16px',
                    //   fontWeight: 'normal',
                    //   color: '#797B8E',
                    //   border: `2px solid #DBE2FF`,
                    //   borderRadius: '30px',
                    //   width: '68px',
                    //   height: '42px',
                    //   backgroundColor: 'white'
                    // }}
                >
                    Java
                </button>
                <button
                    // className={selectedTags.includes('Python') ? 'selected' : ''}
                    className="Python"
                    onClick={() => handleTagClick('Python')}
                    // style={{
                    //   fontFamily: 'Inter, Arial, sans-serif',
                    //   fontSize: '16px',
                    //   fontWeight: 'normal',
                    //   color: '#797B8E',
                    //   border: `2px solid #DBE2FF`,
                    //   borderRadius: '30px',
                    //   width: '86px',
                    //   height: '42px',
                    //   backgroundColor: 'white'
                    // }}
                >
                    Python
                </button>
                <button
                    // className={selectedTags.includes('C/C++') ? 'selected' : ''}
                    className="C"
                    onClick={() => handleTagClick('C/C++')}
                    // style={{
                    //   fontFamily: 'Inter, Arial, sans-serif',
                    //   fontSize: '16px',
                    //   fontWeight: 'normal',
                    //   color: '#797B8E',
                    //   border: `2px solid #DBE2FF`,
                    //   borderRadius: '30px',
                    //   width: '86px',
                    //   height: '42px',
                    //   backgroundColor: 'white'
                    // }}
                >
                    C/C++
                </button>
                <button
                    // className={selectedTags.includes('JavaScript') ? 'selected' : ''}
                    className="JavaScript"
                    onClick={() => handleTagClick('JavaScript')}
                    // style={{
                    //   fontFamily: 'Inter, Arial, sans-serif',
                    //   fontSize: '16px',
                    //   fontWeight: 'normal',
                    //   color: '#797B8E',
                    //   border: `2px solid #DBE2FF`,
                    //   borderRadius: '30px',
                    //   width: '104px',
                    //   height: '42px',
                    //   backgroundColor: 'white'
                    // }}
                >
                    JavaScript
                </button>
                <br />
                <button
                    // className={selectedTags.includes('HTML/CSS') ? 'selected' : ''}
                    className="HTMLCSS"
                    onClick={() => handleTagClick('HTML/CSS')}
                    // style={{
                    //   fontFamily: 'Inter, Arial, sans-serif',
                    //   fontSize: '16px',
                    //   fontWeight: 'normal',
                    //   color: '#797B8E',
                    //   border: `2px solid #DBE2FF`,
                    //   borderRadius: '30px',
                    //   width: '114px',
                    //   height: '42px',
                    //   backgroundColor: 'white'
                    // }}
                >
                    HTML/CSS
                </button>
                <button
                    // className={selectedTags.includes('Other') ? 'selected' : ''}
                    className="Other"
                    onClick={() => handleTagClick('Other')}
                    // style={{
                    //   fontFamily: 'Inter, Arial, sans-serif',
                    //   fontSize: '16px',
                    //   fontWeight: 'normal',
                    //   color: '#797B8E',
                    //   border: `2px solid #DBE2FF`,
                    //   borderRadius: '30px',
                    //   width: '68px',
                    //   height: '42px',
                    //   backgroundColor: 'white'
                    // }}
                >
                    Other
                </button>
            </Buttons>
        </Container>
    )
}

export default TagButtons

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 60px;
`
const TitleContnet = styled.div`
    h1 {
        font-size: 20px;
        font-family: 'Inter', sans-serif;
        margin-top: 8px;
        margin-right: 200px;
    }
    p {
        font-size: 18px;
        font-family: 'Helvetica', sans-serif;
        color: #797b8e;
        margin-top: 8px;
        margin-right: 1px;
    }
    span {
        text-indent: 18px;
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
    margin-left: -70px;
    align-items: center;

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
    .Java {
        width: 68px;
    }
    .Python {
        width: 86px;
    }
    .c {
        width: 83px;
    }
    .JavaScript {
        width: 112px;
    }
    .HTMLCSS {
        width: 116px;
    }
    .Other {
        width: 75px;
    }
`
