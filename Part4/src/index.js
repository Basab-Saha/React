import React from 'react'
import ReactDOM from 'react-dom'

//Method 1) (Normie)
let today= new Date();

const year=today.getFullYear()
const month=today.getMonth()
const day=today.getDate()

const hours=today.getHours()
const mins=today.getMinutes()
const secs=today.getSeconds()

//Better method -2)

/*const currDate=today.toLocaleDateString();
const currTime=today.toLocaleTimeString();

 currDate = 20/5/23
 currTime=6:57:23 pm
 
*/

ReactDOM.render(
  <>
  <h1>Basab's Mini Calendar</h1>
  <br></br>
    <h1>{`Today's Date is :  ${day}/${month}/${year}`}</h1>
    <h2>{`Current time is: ${hours}:${mins} PM`}</h2>
    
  </>,

  document.getElementById("root1")
)

