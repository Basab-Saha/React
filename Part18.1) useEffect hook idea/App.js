import {React,useState,useEffect} from 'react'

const App = () => {
  //useEffect hook
  useEffect(()=>{
    console.log('use effect hook called')
    document.title=(`Chats(${ct})`)
  })

  //normal console log of component
  console.log('component rendered')

  //useState hook
  const[ct,setCt]=useState(0);

  function incrementCt(){
    setCt(ct+1);
  }

  //1st time we page load hole age component puro ta render hobe then useEffect(side effet) er kaj hobe
  //2nd time jokhon abar page load(refresh) hobe tokhon abar useEffect(Ex:- api theke data fetch) er kaj hobe
  // ebar Qn holo page load(refresh) kokhon hoi--->whenever a component is rerendered through useState hook
  // the whole component is rerendered again .and after rendering again the useEffect will be called.

  //amader ei example a normal console log of component==> 'component rendered' ta component er part so 
  //web page load(component render) holei ota age asbe..then useEffect er vetor er kaj hobe 
  //i.e console.log('useEffect called')

  //so first time web page khullei inspect-->console--> gale dekha jabe 1st a 'component rendered' then
  // 'useEffect called' 
  // jei button a click kore count barabo omni component rerender hobe...so abar component a thaka
  // 'component rendered' ta age chole asbe then 'useEffect called' ta asbe.
  
  //practical example--> userProfile a click korle ami web server theke data fetch kore show korbo

  return (
    <div>
      <h1>{ct}</h1>
      <button onClick={incrementCt}    className='btn btn-primary'>Click Me ❤️</button>
    </div>
  )
}

export default App