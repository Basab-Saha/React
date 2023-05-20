import React from 'react'
import ReactDOM from 'react-dom'

//Using javascript expression inside JSX by {}

const name="Basab"
const dept="CSE"
const hobby="Sleeping"

ReactDOM.render( 
  <>
  <h1>
    {name} is from {dept} 
    <br></br>
     His favourite hobby is {hobby}
     <br></br>
     His Lucky Number is {Math.floor(Math.random()*100)}
  </h1>
  </>,

  document.getElementById("root1")
)



