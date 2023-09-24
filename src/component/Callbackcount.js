import React from 'react'

function Callbackcount(props) {
    {console.log("111")}
  return (
    <div>Callbackcount
        <button onClick={(props.chagefirst)}>1st increment</button>
       
    </div>
  )
}

export default React.memo( Callbackcount)