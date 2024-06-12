import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const TextInsideBoxContainer = styled.div`
  width: ${(props) => props.width || "20px"};
  height: ${(props) => props.height || "20px"};
  border-radius: ${(props) => props.radius || "0"};
  border: ${(props) => props.border || "none"};
  padding: ${(props) => props.padding || "40px"};
  gap: ${(props) => props.gap || "0"};
  background-color: ${(props) => props.backgroundColor || "blue"};
  position: ${(props) => props.position || "static"};
  top: ${(props) => props.top || "0"};
  left: ${(props) => props.left || ""};
  right: ${(props) => props.right || ""};
  background-image: url(${(props) => props.backgroundImage || ''});
  justify-content: ${(props) => props.justifyContent || ''};



  background-size: cover; 
  background-position: center; 
  box-sizing: border-box;
  display: flex;
`;

export default function TextInsideBox({ children, ...rest }) {
  return <TextInsideBoxContainer {...rest}>{children}</TextInsideBoxContainer>;
}

TextInsideBox.propTypes = {
  children: PropTypes.node,
  width: PropTypes.string,
  height: PropTypes.string,
  radius: PropTypes.string,
  border: PropTypes.string,
  padding: PropTypes.string,
  gap: PropTypes.string,
  backgroundColor: PropTypes.string,
  position: PropTypes.string,
  top: PropTypes.string,
  left: PropTypes.string,
  right: PropTypes.string,
  backgroundImage: PropTypes.string,
  justifyContent: PropTypes.string,
};
