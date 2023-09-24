import { useRef } from "react"
import React from 'react'
import { useState } from "react";


const Useref = () => {
    const inputname=useRef(null);
const [data, setdata] = useState('');
const showdata=(e)=>{
e.preventDefault();
    console.log(inputname.current.value);
    setdata(inputname.current.value);
    inputname.current.value="";
}

  return (
    <div>
        <form onSubmit={showdata}>
        <label>enter name</label><br></br>
        <input type="text" id="inputname" ref={inputname}></input>
        <button type='submit'>submit</button>
        </form>
        <p>{data}</p>
    </div>
  )
}

export default Useref