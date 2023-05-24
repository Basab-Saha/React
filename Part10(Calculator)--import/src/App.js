import React from "react";
import  ReactDOM  from "react-dom";
import './index.css'

//importing Modules to use their functions
//these modules returns either a+b (add) or sub (a-b) etc etc....
import Add from "./Add";
import Sub from "./Sub";
import Mul from "./Mul";
import Div from "./Div";

const a=Math.floor(Math.random()*100)
const b=Math.floor(Math.random()*100)

function App(){
   return(
    <>
    <h1>{a} + {b} = {Add(a,b)}</h1>
    <h1> {a} - {b} ={Sub(a,b)}</h1>
    <h1>{a} * {b} = {Mul(a,b)}</h1>
    <h1> {a} / {b} = {Div(a,b)}</h1>
    </>
   )
}

export default App;