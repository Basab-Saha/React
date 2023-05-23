import React from 'react'
import  ReactDOM  from 'react-dom'

import './index.css'

let greet="";
const today=new Date();
const currTime=today.getHours();

const greetStyle={}

// get hours --> 13hrs-->1pm (it will show 13hrs)

//Logic//----
if(currTime>=1 && currTime<12){
   greet="Good Morning"

   greetStyle.color="Red";
   
}
else if(currTime>=12 && currTime<17){
  greet="Good Afternoon"
  greetStyle.color="Blue";
}
else if(currTime>=18 && currTime<21){
  greet="GoodEvening"
  greetStyle.color="Yellow";
}
else{
  greet="GoodNight"
  greetStyle.color="Orange";
}


ReactDOM.render(
  <>
  <div className='box'> 
    <h1>Hello Sir , <span style={greetStyle}>{greet}</span>  </h1>
    </div>
 
  </>,

  document.getElementById("root1")
)