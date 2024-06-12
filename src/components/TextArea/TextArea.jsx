import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const StyledTextArea = styled.textarea`
  width: calc(100% - 30px); /* Adjusted width to accommodate the checkbox */
  height: 150px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
`;

const CheckBox = styled.input`
  margin-right: 10px;
`;

const TextArea = ({ value }) => {
  return (
    <Container>
      <CheckBox type="checkbox" />
      <StyledTextArea
        value={value}
        rows={6}
        cols={50}
        style={{ resize: 'none' }}
        readOnly
      />
    </Container>
  );
};

TextArea.propTypes = {
  value: PropTypes.string.isRequired,
};

export default TextArea;
