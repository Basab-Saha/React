import React from 'react'
import  ReactDOM  from 'react-dom'


//saving all the lengthy urls in const & using them in src by {} as javascript element
const name="Rony"
const tigerimg="https://th.bing.com/th/id/R.d8fa11948684350e3b5fc1103fef05d5?rik=fniroA%2bmKmI8Ig&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fkkpihdB.jpg&ehk=q0H1czQCjC%2bkSi1OsO2MjG5oDgVW%2fLiJkPRuZJu0os0%3d&risl=&pid=ImgRaw&r=0"
const bisonimg="https://2.bp.blogspot.com/-qpmha7rUkX4/WRNLv2I7CVI/AAAAAAAAATE/7lRvIfGQ7UQyTVOzWIL7wq01jTThn0iRwCLcB/s1600/Gaur.jpg"
const peacockimg="https://th.bing.com/th/id/OIP.ANE9NPRJDA3pbNcu4n2j3gHaHa?pid=ImgDet&w=712&h=712&rs=1"
const rhinoimg="https://th.bing.com/th/id/OIP.OCfJmSGLPB1acx807Li98gHaEv?pid=ImgDet&rs=1"
ReactDOM.render(
  <>

 {/*Heading*/}


  <h1 contentEditable="true"    style={{fontSize:"40px",fontFamily:"monospace"}}>Safari with {name} </h1>


 {/*1st Image Row*/}

   <img src={tigerimg} 
  height={200} width={250}/>
   
  
   <img src={peacockimg} 
  height={200} width={250}/>

<br></br>

 {/*2nd Image Row*/}
 
    <img src={bisonimg} 
  height={200} width={250}/>

   
   <img src={rhinoimg} 
  height={200} width={250}/>
  </>,
  
  

  document.getElementById("root1")
)