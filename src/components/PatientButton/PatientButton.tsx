import React, { useState } from 'react';
import './PatientButton.css';

const PatientButton = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <button 
      className={`button ${isClicked ? 'clicked' : ''}`} 
      onClick={handleClick}
    >
      <img className='img' src="src/stories/assets/CardioIco.png" alt="Icon" />
    </button>
  );
};

export default PatientButton;