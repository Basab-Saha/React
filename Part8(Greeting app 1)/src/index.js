import React from 'react'
import  ReactDOM  from 'react-dom'

import './index.css'

let greet='';
const today=new Date();
const currTime=today.toLocaleTimeString();

if(currTime.indexOf("am")>=0){
   greet="GoodMorning"
   
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