import React, { useMemo } from "react";
// class Example2 extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       count1: 0,
//     };
//   }

//   render() {
//     return (
//       <>
//         <h1>hellow world</h1>
//       </>
//     );
//   }
// }
// export default Example2;

import { useState, useReducer, useRef, useEffect } from "react";

const Example2 = () => {
  const initialstate = 0;
  const reducer = (state, action) => {
    switch (action) {
      case "INCREASE":
        return state + 1;
      case "DECREASE":
        return state - 1;
      case "RESET":
        return initialstate;
      default:
        return state + 1;
    }
  };
  const [count1, dispatch] = useReducer(reducer, initialstate);

  const [count2, setcount2] = useState(0);
  const [count3, setcount3] = useState(1);
  const iseven = useMemo(() => {
    let i = 0;
    while (i < 90000000) {
      i++;
    }
    return count2 % 2 === 0;
  }, [count2]);

  const val = () => {
    alert(count3);
    return (
      <>
        <p>make it simple</p>
        <strong> cool budy </strong>
        <h1>hello world</h1>
        <p>make it simple</p>
        <strong> cool budy {count3}</strong>
        <h1>hello world</h1>
      </>
    );
  };

  const [inpdata, setinpdata] = useState("");
  const istinp = useRef(null);
  const showdata = (e) => {
    console.log(istinp.current.value);
    setinpdata(istinp.current.value);
  };

  const fecthres = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const response = await res.json();
    console.log(response);
  };

  useEffect(() => {
    fecthres();
    return () => {
      console.log("unmounting");
    };
  }, []);
  return (
    <>
      <h2>hii guys</h2>
      <h1>{count1}</h1>
      <button onClick={() => dispatch("INCREASE")}>increase</button>
      <button onClick={() => dispatch("DECREASE")}>dECREASE</button>
      <button onClick={() => dispatch("RESET")}>rESET</button>

      <p>{inpdata}</p>

      <input type="tect" ref={istinp} />
      <button
        onClick={(e) => {
          showdata(e);
        }}
      >
        Show
      </button>
      <h5>{count2}</h5>
      <h6>{count3}</h6>
      <button
        onClick={() => {
          setcount2(count2 + 1);
        }}
      >
        inc2
      </button>
      <span>{iseven ? "odd" : "even"}</span>
      <button
        onClick={() => {
          setcount3(count3 + 1);
        }}
      >
        inc3
      </button>
      {val()}
    </>
  );
};
export default Example2;
