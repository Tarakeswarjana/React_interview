import React from 'react'

function Callback(props) {
    {console.log("222")}
   
  return (
    <div>"AfterCallback"
       
        <button onClick={props.change2nd}>increment</button>
    
    </div>
  )
}

export default React.memo(Callback)