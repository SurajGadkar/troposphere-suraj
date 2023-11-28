// LevelDropdown.js
import React, { useState } from "react";

const LevelDropdown = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    onSelect(selectedValue);
  };

  return (
    <div>
      <label>Select Level:</label>
      <select value={selectedOption} onChange={handleSelectChange}>
        <option value="" disabled>
          Select a level
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LevelDropdown;
