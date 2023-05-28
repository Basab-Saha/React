import  React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const carData = [
    { name: "Toyota Camry", price: 25000 , id:1},
    { name: "Honda Civic", price: 22000 ,id:2},
    { name: "Ford Mustang", price: 35000,id:3 },
    { name: "Chevrolet Cruze", price: 28000 , id:4 },
   
  ];
  



const UsestateArray=()=>{

 


    const[myArray,setArray]=useState(carData);

    const clearArray=()=>{
        
            setArray([])
        
       
    }

    const removeItemwithID=(id)=>{
       
        //filter my data without that id
        const myNewFilteredArray=myArray.filter((car)=>{
            return(
                car.id!=id   //myArray te jesob element ei condition ta fulfill korbe tarai myNewArray te jabe
            )
        })

        setArray(myNewFilteredArray);
    }



    return(
        <div className='box'>
        {
            myArray.map((car)=>{
                const{name,price}=car;
                return(
                    <div className='box1'>
                         <h1>Car : {name}  && Price : ${price} <button onClick={()=>removeItemwithID(car.id)}>remove</button> </h1>
                    </div>
                    
                   
                    
                )
            })
        }

        <button className='btn  button' onClick={clearArray}>Clear</button>
        </div>
    )
}

export default UsestateArray;