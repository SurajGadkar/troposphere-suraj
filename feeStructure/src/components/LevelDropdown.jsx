// LevelDropdown.js
import React, { useState } from "react";
import styles from "./LevelDropdown.module.css";

const LevelDropdown = ({ options, onSelect, setLevel, level, selectedFee }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    onSelect(selectedValue);
  };

  const levelOptions = ["UG", "UG-DIPLOMA", "PG"];

  const handleLevel = (e) => {
    setLevel(e.target.value);
    //setSelectedOption("ALL_LEVEL");
  };

  return (
    <div className={styles.main__container}>
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
      {selectedOption && selectedFee === "Exam Fee" && (
        <div>
          <select value={level} onChange={handleLevel}>
            <option value="" disabled>
              Select a level
            </option>
            {levelOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default LevelDropdown;
