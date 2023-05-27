import  React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

//description: Both part12(Props-maps) and Part 13(useState)'s concept is used7
const carData = [
    { name: "Toyota Camry", price: 25000 },
    { name: "Honda Civic", price: 22000 },
    { name: "Ford Mustang", price: 35000 },
    { name: "Chevrolet Cruze", price: 28000 },
   
  ];
  



const UsestateArray=()=>{

 


    const[myArray,setArray]=useState(carData);

    const clearArray=()=>{
        setArray([])
    }



    return(
        <div className='box'>
        {
            myArray.map((car)=>{
                const{name,price}=car;
                return(
                    <div className='box1'>
                         <h1>Car : {name}  && Price : ${price} </h1>
                    </div>
                    
                   
                    
                )
            })
        }

        <button className='btn  button' onClick={clearArray}>Clear</button>
        </div>
    )
}

export default UsestateArray;
