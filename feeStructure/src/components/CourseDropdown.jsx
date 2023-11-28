// CourseDropdown.js
import React, { useState, useEffect } from "react";

const CourseDropdown = ({ options, onSelect, setCourse }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectCourse, setSelectCourse] = useState("");

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    onSelect(selectedValue);
  };

  const handleCourse = (e) => {
    setSelectCourse(e.target.value);
    setCourse(e.target.value);
  };

  const courseOptions = ["Medical", "Dental", "Ayurveda"];

  return (
    <>
      <div>
        <label>Select Course:</label>
        <select value={selectCourse} onChange={handleSelectChange}>
          <option value="" disabled>
            Select a course
          </option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      {selectedOption && (
        <div>
          <select value={selectCourse} onChange={handleCourse}>
            <option value="" disabled>
              Select a course
            </option>
            {courseOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      )}
    </>
  );
};

export default CourseDropdown;
