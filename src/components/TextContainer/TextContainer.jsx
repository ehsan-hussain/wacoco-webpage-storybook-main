import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const TextFieldWrapper = styled.div`
  width: ${(props) => props.width || "auto"};
`;

const Label = styled.label`
  font-family: ${(props) => props.fontFamily || "inherit"};
  font-weight: ${(props) => props.fontWeight || "normal"};
  font-size: ${(props) => props.fontSize || "inherit"};
  line-height: ${(props) => props.lineHeight || "normal"};
  letter-spacing: ${(props) => props.letterSpacing || "normal"};
  text-align: ${(props) => props.textAlign || "left"};
  color: ${(props) => props.color || "white"};
  display: flex;
  justify-content: center;
`;

export default function TextContainer({ label, width, ...rest }) {
  return (
    <TextFieldWrapper width={width}>
      <Label {...rest}>{label}</Label>
    </TextFieldWrapper>
  );
}

TextContainer.propTypes = {
  label: PropTypes.string.isRequired,
  width: PropTypes.string,
  fontFamily: PropTypes.string,
  fontWeight: PropTypes.string,
  fontSize: PropTypes.string,
  lineHeight: PropTypes.string,
  letterSpacing: PropTypes.string,
  textAlign: PropTypes.string,
  color: PropTypes.string,
};
