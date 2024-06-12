import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import DragAndDropIcon from '../../assets/Icon frame.svg';

const DragAndDrop = () => {
    const [errorMessage, setErrorMessage] = useState('')
    const maxFileSize = 25 * 1024 * 1024

    const [image, setImage] = useState('')
    const inputRef = useRef(null)

    const handleFileChange = (e) => {
        const file = e.target.files[0]
        if (file.size > maxFileSize) {
            setErrorMessage('You cannot download a file of this size')
            e.target.value = ''
        }
        console.log(file)
        setImage(e.target.files[0])
    }

    const handleImageClick = () => {
        inputRef.current.click()
    }
    useEffect(() => {
        const savedImage = localStorage.getItem('uploadImage')
        if (savedImage) {
            setImage(savedImage)
        }
    }, [])
    return (
        <Container>
        <StyledBox> 
            <TextContainer>
                <p>Please upload your CV</p>
            </TextContainer>
            <ClickToUpload>
                <label for="fileInput">
                    {image ? (
                        <img
                            src={
                                image instanceof File
                                    ? URL.createObjectURL(image)
                                    : image
                            }
                            alt="Upload Cv"
                        />
                    ) : (
                        <img src={DragAndDropIcon} alt="Upload Cv" />
                    )}
                </label>
                <input
                    type="file"
                    id="fileInput"
                    onChange={handleFileChange}
                    onClick={handleImageClick}
                    ref={inputRef}
                ></input>
            </ClickToUpload>
            <ClickToUpload>
                <label for="fileInput">
                    <h3>
                        <span> Click to Upload</span> or drag and drop
                    </h3>
                </label>
                <input
                    type="file"
                    id="fileInput"
                    onChange={handleFileChange}
                    onClick={handleImageClick}
                    ref={inputRef}
                />
            </ClickToUpload>
            <Size>
                <p> (Max. File size: 25 MB)</p>
            </Size>
            {errorMessage && <p>{errorMessage}</p>}
            </StyledBox>
        </Container>
    )
}

export default DragAndDrop

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

const TextContainer = styled.div`
    p {
        font-size: 20px;
    }
`
const StyledBox = styled.div`
    width: 420px;
    height: 380px;
    gap: 4px;
    border: 1px dashed #3850cc; /* Assuming the color from the previous code */
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 24px auto; /* Centering the box with a gap */
    box-sizing: border-box; /* To include padding and border in the element's total width and height */
`;


const ClickToUpload = styled.div`
    label {
        cursor: pointer;
    }
    input {
        display: none;
    }
    h3 {
        font-size: 16px;
        cursor: pointer;
        /* height: 3508px;
        width: 2480px; */
    }
    span {
        font-size: 20px;
        color: #3850cc;
    }
`
const Size = styled.div`
    font-size: 12px;
    color: #797b8e;
`
