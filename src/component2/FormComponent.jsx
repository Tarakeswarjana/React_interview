import React, { useState } from "react";
import Select from "react-select";

const FormComponent = () => {
  const [permissions, setpermissions] = useState([]);

  // Your options data (replace this with your own data)
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    // Add more options as needed
  ];

  // Function to handle option selection
  const handleSelectChange = (permissions) => {
    setpermissions(permissions);
  };

  return (
    <Select
      isMulti
      options={options}
      onChange={handleSelectChange}
      value={permissions}
    />
  );
};

export default FormComponent;
