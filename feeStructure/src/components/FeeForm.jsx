// FeeForm.js
import React from "react";
import FeeDropdown from "./FeeDropdown";
import NationalityDropdown from "./NationalityDropdown";
import CourseDropdown from "./CourseDropdown";
import LevelDropdown from "./LevelDropdown";

const FeeForm = ({
  selectedFee,
  selectedNationality,
  selectedCourse,
  selectedLevel,
  feeStructure,
  onSelectFee,
  onSelectNationality,
  onSelectCourse,
  onSelectLevel,
  onCalculateFee,
  setCourse,
}) => {
  const fees = Object.keys(feeStructure);

  const handleFeeSelection = (selectedFee) => {
    onSelectFee(selectedFee);
  };

  const courses = ["Medical", "Dental", "Ayurveda"];
  return (
    <div>
      <label>Select Fee:</label>
      <FeeDropdown options={fees} onSelect={handleFeeSelection} />

      {selectedFee && (
        <div>
          <NationalityDropdown
            options={Object.keys(feeStructure[selectedFee])}
            onSelect={onSelectNationality}
          />
          {selectedNationality && (
            <CourseDropdown
              options={Object.keys(
                feeStructure[selectedFee][selectedNationality]
              )}
              onSelect={onSelectCourse}
              setCourse={setCourse}
            />
          )}
          {selectedCourse && (
            <LevelDropdown
              options={Object.keys(
                feeStructure[selectedFee][selectedNationality][selectedCourse]
              )}
              onSelect={onSelectLevel}
            />
          )}

          {selectedLevel && (
            <button onClick={onCalculateFee}>Calculate Fee</button>
          )}
        </div>
      )}
    </div>
  );
};

export default FeeForm;
