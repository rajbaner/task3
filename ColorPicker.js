import React, { useState } from 'react';
import './ColorPicker.css';

const ColorPicker = ({ colors }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setIsOpen(false);
  };

  return (
    <div className="color-picker">
      <button 
        style={{ backgroundColor: selectedColor }}
        onClick={() => setIsOpen(!isOpen)}
      >
        Pick a color
      </button>
      {isOpen && (
        <div className="color-list">
          {colors.map((color, index) => (
            <div
              key={index}
              className="color-item"
              style={{ backgroundColor: color }}
              onClick={() => handleColorClick(color)}
            />
          ))}
        </div>
      )}
      {selectedColor && <p>Selected Color: {selectedColor}</p>}
    </div>
  );
};

export default ColorPicker;
