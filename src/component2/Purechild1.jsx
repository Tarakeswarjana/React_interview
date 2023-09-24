import React from "react";

function Purechild1({ chage1 }) {
  console.log("1st");
  return (
    <div>
      Purechild1
      <button onClick={() => chage1()}>change1st count</button>
    </div>
  );
}

export default React.memo(Purechild1);
