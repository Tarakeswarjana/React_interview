import React from "react";

const MultiSelect = ({ options, selectedValues, onChange }) => {
  return (
    <select multiple value={selectedValues} onChange={onChange}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default MultiSelect;
