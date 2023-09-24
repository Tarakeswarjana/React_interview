import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
const Counter = () => {
  const [count, setCount] = useState(0);

  const destructure = () => {
    const arr = [2, 3, 4, 5, 6];
    const [first, second, ...rest] = arr;
    console.log(second);
    const obj1 = { apple: 12, goava: 13 };
    const { apple, goava } = obj1;
    console.log(apple);
  };
  destructure();

  useEffect(() => {
    const call = () => {
      const data = axios
        .get("http://192.46.212.177:3014/api/banner/list")
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    call();
  }, []);

  return (
    <div>
      <h1
        onMouseOverCapture={() => {
          setCount(count + 1);
        }}
      >
        increase
      </h1>
      <h2>{count}</h2>
    </div>
  );
};

export default Counter;
