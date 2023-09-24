// import React from "react"
// import {useReducer,useRef} from "react"


// const initialState= 0;
// const reducer=(state,action)=>{

//     switch(action){
//         case "INCREASE" :
//             return state+1;

//         case 'DECREASE' :
//             return state-1;
            
//           case "RESTART" :
//             return initialState;
//            case "default":
//            return  state; 
//     }
// }
// function Reducer1 (){

//   const inputref=useRef(0);
//   const[count,dispatch]=useReducer(reducer,initialState);
//   const focusing=()=>{
//     inputref.current.focus();
//   }
//     return(
//         <>
//         <h1>count {count}</h1>
//       <input ref={inputref}></input>
// <button onClick={()=>{dispatch('INCREASE')}}>increase</button>
// <button onClick={()=>{dispatch('DECREASE')}}>DEcrease</button>
// <button onClick={()=>{dispatch('RESTART')}}>RESET</button>
// <button onClick={()=>{focusing()}}>focus</button>

//         </>
//     )
// }
// export default Reducer1;


import React from 'react';
import {useReducer,useRef} from "react";
const initialstate=0;
const reducer=((state,action)=>{
  switch(action){
    case "INCREASE":
      return state+1;
      case "DECREASE":
        return state-1;
        case "RESET":
          return initialstate
          case "default":
            return state;
  }
})
const Reducer1 = () => {
  const [count,dispatch]=useReducer(reducer,initialstate);
const refarea= useRef(null);

  const focous=()=>{
    refarea.current.focus()
  }
  return (
    <div>
      <h1>{count}</h1>
   <input type="text" ref={refarea}></input>
      <button onClick={()=>{dispatch("INCREASE")}}>INC</button>
      <button onClick={()=>{dispatch("DECREASE")}}>DEC</button>
      <button onClick={()=>{dispatch("RESET")}}>RESET</button>
      <button onClick={focous}>Focus</button>
    </div>
  );
}

export default Reducer1;

