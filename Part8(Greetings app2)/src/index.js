import React from 'react'
import  ReactDOM  from 'react-dom'

import './index.css'

let greet="";
const today=new Date();
const currTime=today.getHours();

// get hours --> 13hrs-->1pm (it will show 13hrs)

//Logic//----
if(currTime>=1 && currTime<12){
   greet="Good Morning"
   
}
else if(currTime>=12 && currTime<17){
  greet="Good Afternoon"
}
else if(currTime>=18 && currTime<21){
  greet="GoodEvening"
}
else{
  greet="GoodNight"
}


ReactDOM.render(
  <>
  <div className='box'> 
    <h1>Hello Sir , {greet}</h1>
    </div>
 
  </>,

  document.getElementById("root1")
)