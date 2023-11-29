// App.js
import React, { useState } from "react";
import FeeForm from "./components/FeeForm";
import { feeStructure } from "./fee_structure";
import styles from "./App.module.css";
const App = () => {
  const [selectedFee, setSelectedFee] = useState("");
  const [selectedNationality, setSelectedNationality] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [course, setCourse] = useState("");
  const [level, setLevel] = useState("");

  const [DueFee, setDueFee] = useState(0);

  const calculateFee = () => {
    const feeAmount =
      feeStructure[selectedFee][selectedNationality][selectedCourse][
        selectedLevel
      ].amount;
    setDueFee(feeAmount);
  };

  const cleanUp = () => {
    setSelectedFee("");
    setSelectedNationality("");
    setSelectedCourse("");
    setSelectedLevel("");
    setCourse("");
    setDueFee(0);
  };

  return (
    <div className={styles.app_main_container}>
      <h1>University Fee Calculator</h1>

      <FeeForm
        feeStructure={feeStructure}
        selectedFee={selectedFee}
        selectedNationality={selectedNationality}
        selectedCourse={selectedCourse}
        selectedLevel={selectedLevel}
        setCourse={setCourse}
        setLevel={setLevel}
        onSelectFee={setSelectedFee}
        onSelectNationality={setSelectedNationality}
        onSelectCourse={setSelectedCourse}
        onSelectLevel={setSelectedLevel}
        onCalculateFee={calculateFee}
        onCleanUp={cleanUp}
        course={course}
        level={level}
      />

      {selectedFee && (
        <div className={styles.display__container}>
          <h3>
            Selected Fee:{" "}
            <span className={styles.primary_color}>{selectedFee}</span>
          </h3>
          <h3>
            Selected Nationality:{" "}
            <span className={styles.primary_color}>{selectedNationality}</span>{" "}
          </h3>
          <h3>
            Selected Course:{" "}
            <span className={styles.primary_color}>
              {selectedCourse === "ALL_COURSES" ? selectedCourse : course}
            </span>
          </h3>
          <h3>
            Selected Level:{" "}
            <span className={styles.primary_color}>
              {selectedLevel === "ALL_LEVEL" ? selectedCourse : level}
            </span>
          </h3>
          <h1>
            Amount to be paid :{" "}
            <span className={styles.primary_color}>{DueFee}</span>
          </h1>
        </div>
      )}
    </div>
  );
};

export default App;
