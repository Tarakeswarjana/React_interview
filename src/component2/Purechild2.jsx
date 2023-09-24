import React from "react";

function Purechild2({ chage2 }) {
  console.log("2nd");
  return (
    <div>
      Purechild2
      <button
        onClick={() => {
          chage2();
        }}
      >
        change 2nd
      </button>
    </div>
  );
}

export default React.memo(Purechild2);
