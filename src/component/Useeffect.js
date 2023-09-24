import React from 'react'
import {useState} from "react";
import {useEffect}from "react";
import UseChild from './UseChild';

const Useeffect = () => {
    const [value,setValue]=useState(false);
    const[data,setdata]=useState(0);
    const[data1,setdata1]=useState(0);
    const increase=()=>{
        setdata(data+2);
      
    }                                               
                                                //   1.empty dependancy array can give you the component did mount component
                                                //2.
    const increase1=()=>{
        setdata1(data1+2);
      
    }
    const show=()=>{
if(value===false){
    setValue(true);
}else{
    setValue(false);
}
    }

    useEffect(() => {
      console.log(data);
    },[data]);
    return(
        <div>
            fetch.js
            <button onClick={increase}>increase</button>
            <button onClick={increase1}>increase1</button>
            <p>{data}</p>
            <p>{data1}</p>
          {value &&  <UseChild/>}
            <button onClick={show}>increase</button>
        </div>
    )
}

export default Useeffect