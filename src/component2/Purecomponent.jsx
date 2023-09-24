import React, { useCallback, useState } from "react";
import Purechild1 from "./Purechild1";
import Purechild2 from "./Purechild2";

const Purecomponent = () => {
  const [count1, setcount1] = useState(0);
  const [count2, setcount2] = useState(1);
  const chage1 = useCallback(() => {
    setcount1(count1 + 1);
  }, [count1]);
  const chage2 = useCallback(() => {
    setcount2(count2 + 1);
  }, [count2]);

  return (
    <>
      <h2>hellow</h2>
      <p>{count1}</p>
      <p>{count2}</p>
      <Purechild1 chage1={chage1} />
      <Purechild2 chage2={chage2} />
    </>
  );
};
export default Purecomponent;
