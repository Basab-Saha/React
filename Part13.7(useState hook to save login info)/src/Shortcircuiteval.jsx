import React, { useState } from 'react'

const Shortcircuiteval = () => {

    // OR--> True --> write left value(if present) else right value
    // A="" B="Basab"  <h1>{A || B}</h1> here A="" (blank) so A will be false so [false || true=true] ..right value
    const[demo,setDemo]=useState('');

//Remember when element (const/let/var) is empty ==>Its false

    //AND-->False-->nothing render  
    //AND-->True-->render right value
    const[demo2,setDemo2]=useState('')

  return (
    <div>
        <h1>{demo ||  <><button>Press me</button></>   }</h1>
        <h1>{demo2 && "EE"} </h1>
    </div>
  )
}

export default Shortcircuiteval;