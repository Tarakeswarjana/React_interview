import React, { useState, useMemo } from "react";

function Usememo() {
  const [count1, setcount1] = useState(0);
  const [count2, setcount2] = useState(1);
  const chage1 = () => {
    setcount1(count1 + 1);
  };
  const change2 = () => {
    setcount2(count2 + 1);
  };
  const iseven = useMemo(() => {
    let i = 0;
    while (i <= 600000000) i++;
    return count1 % 2 === 0;
  }, [count1]);
  return (
    <div>
      Usememo
      <button onClick={chage1}>count1....{count1}</button>
      <span>{iseven ? "even" : "odd"}</span>{" "}
      {/*..at first is event is a function but after use use memo it is a variable */}
      <button onClick={change2}>count2....{count2}</button>
    </div>
  );
}

export default Usememo;

/*The main difference between useMemo and
 useCallback hook is, useMemo returns memoized value and
  useCallback returns memoised function.
  2..  useEffect stop rendaring hole page but usememo can contron rendarinh of a perticular portion
   
  */
