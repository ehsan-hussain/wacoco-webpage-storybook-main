import React from 'react';
import './PopUp.css';

const PopUp = ({ show, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="popup-overlay">
      <div className="popup">
        <h2 className="popup-title">Warning</h2>
        <p className="popup-message">
          Closing the form will delete all entered information. Are you sure you want to close?
        </p>
        <div className="popup-buttons">
          <button className="popup-button back" onClick={onClose}>Back</button>
          <button className="popup-button close" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
