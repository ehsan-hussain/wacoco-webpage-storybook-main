import React from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import styled from "styled-components";

function PhoneInputField() {
   
  return (
    <Form>
            <Container>
                <label for="Phone">Phone</label>
                <br />
                <PhoneInput 
        inputStyle={{ width: '375px', border: "2px solid #dbe2ff"}}
        

        defaultCountry="se" 
        style={
            {
              '--react-international-phone-height': '48px',
          
            
            } 
          }
        />
            </Container>
        </Form>
    )
}

export default PhoneInputField;

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
