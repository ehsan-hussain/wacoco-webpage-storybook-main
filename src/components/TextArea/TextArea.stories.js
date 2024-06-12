import React, { useState } from 'react';
import TextArea from './TextArea';

export default {
  title: 'main_ui/TextArea',
  component: TextArea,
};

export const Default = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [textValue, setTextValue] = useState('');
  const [textColor, setTextColor] = useState('#797B8E');
  const [textareaBorderStyle, setTextareaBorderStyle] = useState('2px solid #DBE2FF');
  const [textareaBackgroundColor, setTextareaBackgroundColor] = useState('#DBE2FF');

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    setTextColor(isChecked ? '#797B8E' : '#000000');
    setTextareaBorderStyle(isChecked ? '2px solid #DBE2FF' : '2px solid #DBE2FF');
    setTextareaBackgroundColor(isChecked ? '#DBE2FF' : '#FFFFFF');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ padding: '20px', borderRadius: '5px', width: '420px' }}>
        <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
          <input 
            type="checkbox" 
            checked={isChecked}
            onChange={handleCheckboxChange} 
            style={{ display: 'none' }} 
          />
          <div 
            style={{ 
              width: '18px', 
              height: '18px', 
              border: '2px solid #DBE2FF', 
              backgroundColor: isChecked ? '#3850CC' : '#FFFFFF', 
              borderRadius: '3px', 
              position: 'absolute',
              top: '1',
              left: '0',
              cursor: 'pointer',
              boxShadow: isChecked ? '' : '0 4px 4px rgba(0, 0, 0, 0.25)'
            }}
            onClick={handleCheckboxChange}
          >
            {isChecked && (
              <svg style={{ fill: '#FFFFFF', width: '14px', height: '14px', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} viewBox="0 0 24 24">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
              </svg>
            )}
          </div>
          <span style={{ 
            color: textColor, 
            fontSize: '16px', 
            fontFamily: 'Inter, Arial, sans-serif', 
            marginLeft: '27px',
            pointerEvents: 'none',
            userSelect: 'none',
            textShadow: isChecked ? '' : '0 4px 4px rgba(0, 0, 0, 0.25)'
          }}>
            Previous internships/LIA?
          </span>
        </div>
        <textarea
          value={textValue}
          disabled={!isChecked} 
          onChange={(e) => setTextValue(e.target.value)} 
          style={{ 
            marginTop: '10px', 
            width: '420px', 
            height: '150px', 
            fontSize: '16px', 
            fontFamily: 'Inter, Arial, sans-serif', 
            resize: 'none',
            backgroundColor: textareaBackgroundColor,
            border: textareaBorderStyle,
            color: textColor,
            borderRadius: '4px',
            boxSizing: 'border-box',
            boxShadow: isChecked ? '' : '0 4px 4px rgba(0, 0, 0, 0.25)'
          }} 
        />
      </div>
    </div>
  );
};

