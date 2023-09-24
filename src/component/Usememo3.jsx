import React from "react";
import { useState, useMemo } from "react";

function Usememo3() {
  const [count1, setcount1] = useState(0);
  const [count2, setcount2] = useState(1);
  const isEven = useMemo(() => {
    let i = 0;
    while (i <= 600000000) i++;

    return count1 % 2 == 0;
  }, [count1]);

  const val = useMemo(() => {
    return (
      <>
        <p>make it simple</p>
        <strong> cool budy </strong>
        <h1>hello world</h1>
        <p>make it simple</p>
        <strong> cool budy {count2}</strong>
        <h1>hello world</h1>
      </>
    );
  }, [count2]);

  return (
    <div>
      {count1}
      <br></br>
      {count2} <br></br>
      <button
        onClick={() => {
          setcount1(count1 + 1);
        }}
      >
        Increase
      </button>
      <span> {isEven ? "even" : "odd"}</span>
      <button
        onClick={() => {
          setcount2(count2 + 1);
        }}
      >
        Increase2
      </button>
      {val}
    </div>
  );
}

export default Usememo3;
