import React from "react";
import  ReactDOM  from "react-dom";

// props er ja name..sei namei recive korte hobe destructuring korar somoi ****

function Component({name,state,birthday}){
    return(
        <>
        <h1> {name} lives in {state} . He was born on {birthday} </h1>
        </>
    )
}

export default Component;