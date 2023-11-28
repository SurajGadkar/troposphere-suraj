// NationalityDropdown.js
import React, { useState } from "react";
import styles from "./NationalityDropDown.module.css";

const NationalityDropdown = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    onSelect(selectedValue);
  };

  return (
    <div className={styles.main__container}>
      <label>Select Nationality:</label>
      <select value={selectedOption} onChange={handleSelectChange}>
        <option value="" disabled>
          Select a nationality
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

export default NationalityDropdown;
