import React from 'react';
import{useState,useMemo} from 'react';
const Usememo2 = () => {
    const [count1,setcount1]=useState(0);
    const [count2,setcount2]=useState(1);
    const update1=()=>{
        setcount1(count1+1);
    }
    const update2=()=>{
        setcount2(count2+1);
    }
    const iseven =useMemo(()=>{
        let i=0;
        while(i<=600000000){
            i++;
        }
        return (count1 % 2===0)
    },[count1])

    const val= useMemo(()=>{
      return(
<>
      <p>make it simple</p>
      <strong> cool budy </strong>
      <h1>hello world</h1>
      <p>make it simple</p>
      <strong> cool budy {count1}</strong>
      <h1>hello world</h1>
      </>)
    },[count1])

  return (
    <div>
        <button onClick={update1}>count1 {count1} times</button>
   <span>{iseven ?"even":"odd"}</span> 
      <button onClick={update2}>count2 {count2} times</button>
    {val}
    </div>
  );
}

export default Usememo2;
