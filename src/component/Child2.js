
import React, { useContext } from 'react'
import { BioData } from './Parent'

function Child2() {
    const context= useContext(BioData)
  return (
    <div>child2...
        {context}
    </div>
  )
}

export default Child2