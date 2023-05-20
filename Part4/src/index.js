import React from 'react'
import ReactDOM from 'react-dom'

let today= new Date();

const year=today.getFullYear()
const month=today.getMonth()
const day=today.getDate()

const hours=today.getHours()
const mins=today.getMinutes()
const secs=today.getSeconds()


ReactDOM.render(
  <>
  <h1>Basab's Mini Calendar</h1>
  <br></br>
    <h1>{`Today's Date is :  ${day}/${month}/${year}`}</h1>
    <h2>{`Current time is: ${hours}:${mins} PM`}</h2>
    
  </>,

  document.getElementById("root1")
)

