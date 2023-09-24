import React, { useReducer } from "react";

// const initialstate=0;
// const reducer=(state,action)=>{
//     switch(action){
//         case 'increase':
//             return state +1;
//         case 'decrease':
//             return state- 1;
//         case "reset" :
//             return initialstate;
//         default:
//             return state

//         }
// }

const initialstate = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increase":
      return state + 1;
    case "decrease":
      return state - 1;
    case "reset":
      return initialstate;
    default:
      return state;
  }
};

export default function Usereducer() {
  const [count, dispatch] = useReducer(reducer, initialstate);
  return (
    <div>
      {count}
      <button
        onClick={() => {
          dispatch("increase");
        }}
      >
        increase
      </button>
      <button
        onClick={() => {
          dispatch("decrease");
        }}
      >
        decrease
      </button>
      <button
        onClick={() => {
          dispatch("reset");
        }}
      >
        reset
      </button>
    </div>
  );
}
