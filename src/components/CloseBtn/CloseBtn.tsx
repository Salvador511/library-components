import React from 'react'
import './CloseBtn.css'

interface CloseButtonProps {
  onClick: () => void;
}

const CloseBtn: React.FC<CloseButtonProps> = ({ onClick }) => {
  return (
    <button className="close-button" onClick={onClick}>
      Cerrar
    </button>
  )
}

export default CloseBtn
