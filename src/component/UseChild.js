import React from 'react'
import { useEffect } from 'react';

const UseChild = () => {
    useEffect(() => {
        console.log("mouting")
      return () => {
        console.log("unmounting")
      };
    });
  return (
    <div>UseChild</div>
  )
}

export default UseChild