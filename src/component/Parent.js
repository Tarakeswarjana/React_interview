
import React, { createContext ,useState} from 'react'
import Child from './Child'

const BioData=createContext()

function Parent() {
  const [name,setname]=useState("ram")

  return (
    <div>
      <p>...........Props drilling .............</p>
      <BioData.Provider value={name}>
        <Child/>
      </BioData.Provider>
    </div>
  )
}

export default Parent;
export {BioData};