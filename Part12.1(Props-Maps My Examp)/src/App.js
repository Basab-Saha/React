import React from 'react'
import ReactDOM from 'react-dom';


import './index.css'
import PokemonBar from './PokemonBar';

function App(){

    const pokemons = [
        { name: 'Bulbasaur', type: 'grass', power: 45, speed: 49 },
        { name: 'Charmander', type: 'fire', power: 39, speed: 65 },
        { name: 'Squirtle', type: 'water', power: 44, speed: 43 },
        { name: 'Pikachu', type: 'electric', power: 55, speed: 90 },
        { name: 'Jigglypuff', type: 'normal', power: 45, speed: 20 },
        { name: 'Meowth', type: 'normal', power: 40, speed: 90 },
        { name: 'Psyduck', type: 'water', power: 52, speed: 55 },
        { name: 'Machop', type: 'fighting', power: 80, speed: 35 },
        { name: 'Geodude', type: 'rock', power: 55, speed: 20 },
        { name: 'Magikarp', type: 'water', power: 10, speed: 80 }
      ];

const fire="🔥"
const water="🌊"
const grass="🌿"
const  rock="🪨"
const electric="⚡"
const fighting="👊"
const normal="🎯"


let a="";

    return(
        <>
    <div className='flex   box text-white '>

        <h1>Pokemon List</h1>

    {
        pokemons.map((pokemon)=>{
            const{name,type,power,speed}=pokemon;


            if(type=="fire"){
                a=fire;
            }
            else if(type=="water"){
                a=water;
            }
            else if(type=="grass"){
                a=grass;
            }
            else if(type=="electric"){
                a=electric;
            }
            else if(type=="rock"){
                a=rock;
            }
            else if(type=="fighting"){
                a=fighting;
            }
            else{
                a=normal;
            }

            return(
                <>
                <PokemonBar PokName={name} PokType={type} PokPower={power} PokSpeed={speed} Poksymbol={a}/>
                </>
            )
        })
    }
        
          


            {/* <br></br>
            <Employee name="Jack" age="22"/>
            <br></br>
            <Employee name="Bob" age="21"/>
            <br></br>
            <Employee name="Smith" age="20"/>
            <br></br>
            <Employee name="Marley" age="24"/>
 */}
      
        
    </div>
       
        </>
    )
}

export default App;