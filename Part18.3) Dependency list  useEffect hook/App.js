import {React,useState,useEffect} from 'react'

const App = () => {

  //useState hook
  const[ct,setCt]=useState(0);


  //useEffect hook
  useEffect(()=>{
    console.log('use effect hook called')
    if(ct<1){
      document.title=(`Chats`)
    }
    else{
      document.title=(`Chats(${ct})`)
    }
    
  }, [{ct}] )   // its called dependecny list...list a akhon [ct] ache-->mane iff ct changes then only call useEffect

  // A useEffect can depend on variable [a , b , c]--> mane a or b or c er modhya jekono ekojon change holei
  //useEffect call hoa jabe

  // jodi dependency list mane [] square braket tai na di tar mane o sobar opor depend korche
  //..then by default jodi web page refresh hoi(due to change
  // in any variable)  taholei by default useEffect call hoa jabe

  // jodi dependency list provide kori..mane [] square bracket di..but empty square [] then etar mane o karur 
  // opor depend korche na....as a result web page 1st time refresh(load) hole ei useEffect ekbar call
  // hobe...but tar por ar hobe na


//useEffect -2)
useEffect(()=>{
  console.log('2nd useEffect called')
},[])    // here dependency list is empty --means 1st time web page load(refresh/render) hole tokhoni
// ekbar just call hobe..bas tar por ar hobe na


  //normal console log of component
  console.log('component rendered')



  function incrementCt(){
    setCt(ct+1);
  }



  return (
    <div>
      <h1>{ct}</h1>
      <button onClick={incrementCt}    className='btn btn-primary'>Click Me ❤️</button>
    </div>
  )
}

export default App