import React from "react";
import  ReactDOM  from "react-dom";

// ({realPropname : modifiedname , ....}) //destructuring

function Component({name:nm,state:st,birthday:bd}){
    return(
        <>
        <h1> {nm} lives in {st} . He was born on {bd} </h1>
        </>
    )
}

export default Component;
