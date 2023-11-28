// FeeForm.js
import React from "react";
import FeeDropdown from "./FeeDropdown";
import NationalityDropdown from "./NationalityDropdown";
import CourseDropdown from "./CourseDropdown";
import LevelDropdown from "./LevelDropdown";
import styles from "./FeeForm.module.css";

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
  onCleanUp,
  course,
}) => {
  const fees = Object.keys(feeStructure);

  const handleFeeSelection = (selectedFee) => {
    onSelectFee(selectedFee);
  };

  return (
    <div className={styles.main__container}>
      <div className={styles.feetype__select__container}>
        <label>Select Fee:</label>
        <FeeDropdown options={fees} onSelect={handleFeeSelection} />
      </div>

      {selectedFee && (
        <div className={styles.dropdown__menu__container}>
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
          {selectedCourse && course && (
            <LevelDropdown
              options={Object.keys(
                feeStructure[selectedFee][selectedNationality][selectedCourse]
              )}
              onSelect={onSelectLevel}
            />
          )}
        </div>
      )}

      <div className={styles.btn__container}>
        {selectedLevel && (
          <>
            <button className={styles.btn} onClick={onCalculateFee}>
              Calculate Fee
            </button>
            <button className={styles.btn} onClick={onCleanUp}>
              Start New
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default FeeForm;
