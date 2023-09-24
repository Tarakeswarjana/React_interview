import React from "react"

const Hoc=(props)=>{
    return(
        <>
        <h3 style={{backgroundColor:`${props.style}`, }}>{props.cmp}</h3>
        </>
    )
}
export default Hoc;