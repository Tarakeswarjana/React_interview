// import React, { Component } from 'react'
// // import Childr from './Childr'


// export default class Usestate extends Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//         name:"rohan"
//       }
//     }
    
   
//   render() {
//     return (
//       <div>Usestate
       
//        <a href='src/componant/Home.js' ><button onClick={this.change}>Home</button> </a>
//        </div>
//     )
//   }
// }

// import React ,{ useState } from 'react';

// import React from 'react'
import React,{useState,useEffect} from "react";

export default function Usestate() {
  const[count,setcount]=useState(0);
  const[name,setname]=useState("");
  useEffect(()=>{
    console.log("useeffect exicuting ")
    document.title=`thisis ${count} page`;
  })

  return (
    <div>
      <input type="text" value={name} onChange={(e)=>{setname(e.target.value)}} ></input>
      <button onClick={()=>{setcount(count+1)}}>count{count}times</button>
    </div>
  )
}



