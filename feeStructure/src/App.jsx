// App.js
import React, { useState } from "react";
import FeeForm from "./components/FeeForm";
import { feeStructure } from "./fee_structure";

const App = () => {
  const [selectedFee, setSelectedFee] = useState("");
  const [selectedNationality, setSelectedNationality] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [course, setCourse] = useState("");

  const [DueFee, setDueFee] = useState(0);
  console.log(course);

  const calculateFee = () => {
    // Add logic to calculate the resulting fee amount based on the selected options
    // using the feeStructure object
    const feeAmount =
      feeStructure[selectedFee][selectedNationality][selectedCourse][
        selectedLevel
      ].amount;
    setDueFee(feeAmount);
  };

  return (
    <div>
      <h1>University Fee Calculator</h1>

      <FeeForm
        feeStructure={feeStructure}
        selectedFee={selectedFee}
        selectedNationality={selectedNationality}
        selectedCourse={selectedCourse}
        selectedLevel={selectedLevel}
        setCourse={setCourse}
        onSelectFee={setSelectedFee}
        onSelectNationality={setSelectedNationality}
        onSelectCourse={setSelectedCourse}
        onSelectLevel={setSelectedLevel}
        onCalculateFee={calculateFee}
      />

      {selectedFee && (
        <div>
          <h2>Selected Fee: {selectedFee}</h2>
          <h3>Selected Nationality: {selectedNationality}</h3>
          <h3>
            Selected Course:{" "}
            {selectedCourse === "ALL_COURSES" ? selectedCourse : course}
          </h3>
          <h3>Selected Level: {selectedLevel}</h3>
          <h1>Amount to be paid : {DueFee}</h1>
        </div>
      )}
    </div>
  );
};

export default App;
