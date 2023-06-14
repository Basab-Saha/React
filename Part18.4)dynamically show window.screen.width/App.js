import {React,useState,useEffect} from 'react'

const App = () => {

  const[widthCount,setWidthCount]=useState(window.screen.width);

  function updateWindowSize(){
    //console.log(window.innerWidth)
    console.log(window.innerWidth)
    setWidthCount(window.innerWidth)
  }

  useEffect(()=>{
    
    console.log('add event')
    window.addEventListener("resize",updateWindowSize)

    return()=>{
      console.log('event removed')
      window.removeEventListener("resize",updateWindowSize)
    }
  })

  

  return (
    <div>
      <h1>Screen width now :-</h1>
      <h2>{widthCount}</h2>
    </div>
  )
}

export default App