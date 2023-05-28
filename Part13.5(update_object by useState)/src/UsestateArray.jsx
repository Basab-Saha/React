import  React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const carData = [
    { name: "Toyota Camry", price: 25000 },
    { name: "Honda Civic", price: 22000 },
    { name: "Ford Mustang", price: 35000 },
    { name: "Chevrolet Cruze", price: 28000 },
   
  ];
  



const UsestateArray=()=>{

 


    const[myArray,setArray]=useState(carData);

    const clearArray=()=>{
        if(myArray.length==0){
            setArray(carData);
        }
        else{
            setArray([])
        }
       
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