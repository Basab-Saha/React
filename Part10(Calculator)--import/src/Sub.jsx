import React from 'react'
import  ReactDOM  from 'react-dom'

function Sub(a,b){
    if(a>b){
        return a-b;
    }
    else{
        return b-a;
    }
}

export default Sub;