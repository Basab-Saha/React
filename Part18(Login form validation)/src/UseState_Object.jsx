import React from 'react'
import './index.css'
/* const memberInfo={
    name:"Basab",
    age:20,
    dept:"CSE",
    homeTown:"Kolkata"
} */


const UseState_Object = () => {

const[myObject,setObject]=React.useState({name:"Basab",age:20,dept:"CSE"})

const updateObject=()=>{
    setObject({...myObject,name:"Dolly",dept:"EE" ,age:21})
}

  return (
    <div className='box'>
        <div className='box1'>
        <h1>Hi I am {myObject.name} I am {myObject.age}years old .I currently study in {myObject.dept} dept </h1>
        </div>
       
        <button className='btn button' onClick={updateObject}>Update</button>
    </div>
  )
}

export default UseState_Object