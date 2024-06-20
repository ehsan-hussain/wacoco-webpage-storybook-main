
import React, { useState } from 'react';
import PopUp from './PopUp';

export default {
  title: 'Components/PopUp',
  component: PopUp,
};

export const Default = () => {
  const [showPopUp, setShowPopUp] = useState(false);

  const handleOpenPopUp = () => {
    setShowPopUp(true);
  };

  const handleClosePopUp = () => {
    setShowPopUp(false);
  };
  
  return (
    <div>
      <button onClick={handleOpenPopUp}>Close</button>
      <PopUp show={showPopUp} onClose={handleClosePopUp} />
    </div>
  );
};
