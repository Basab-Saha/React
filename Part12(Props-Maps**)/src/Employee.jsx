import React from "react";
import ReactDOM from 'react-dom'

function Employee({name:n,age:num}){
    return(
        <h4>Employee name :{n} who's age is {num} </h4>
    )
}

export default Employee;