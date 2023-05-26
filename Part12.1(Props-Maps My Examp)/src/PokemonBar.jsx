import React from 'react';
import ReactDOM from 'react-dom'

function PokemonBar({PokName:name,PokType:type,PokPower:power,PokSpeed:speed ,Poksymbol:smb}){
    
    return(
        <>
        <h4>{name} is {type} pokemon . Its has {power} HP with speed-- {speed}   {smb}</h4>
        </>
    )
}

export default PokemonBar;