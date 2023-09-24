import React, { useCallback, useState } from "react";
import Callback from "./Callback";
import Callbackcount from "./Callbackcount";

function Usecallback() {
  const [count, setcount] = useState(0);
  const [count2, setcount2] = useState(1);
  const changecount = useCallback(() => {
    setcount(count + 1);
  }, [count]);

  //   const changecount = () => {
  //     setcount(count + 1);
  //   };

  const changecount2 = useCallback(() => {
    setcount2(count2 + 1);
  }, [count2]);

  //   const changecount2 = () => {
  //     setcount2(count2 + 1);
  //   };

  return (
    <div>
      Usecallback
      <p>1st ..{count}</p>
      <p>2nd .. {count2}</p>
      <Callbackcount chagefirst={changecount}></Callbackcount>
      <Callback change2nd={changecount2} />
    </div>
  );
}

export default Usecallback;
