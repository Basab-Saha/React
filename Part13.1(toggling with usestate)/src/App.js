import React ,{useState} from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const App=()=>{

    /* //useState jinis ta ki?? --fxn na array na object??
    console.log(useState(''))  // useState()=[intialState , f]  so useState() returns an array
    console.log(useState('Basab')) // useState()=['Basab',f] 
    //mane useState( ) bracker()er vetor ja likhbo seta useState()array er 0th index=initial value hoa jache
    console.log(useState('Basab_Dolly')[0])

 */

const [myName , setmyName]=useState('Hello Goodmorning Leader')
// useState()=['Hello Goodmorning Leader', f] = [const myName , const setmyName=()=>{}]
//so const myName='Hello Goodmorning Leader' and setmyName=f






   // let val="Hello! GoodMorning Leader"

    const changeName=()=>{

       /*  val="What's your plan today?"  //val ke amra update to kore dilam...but niche kono line updated {val}
        // ke h1 a send kori ni...so state change hoi ni
        console.log(val) */

        if(myName=="Hello Goodmorning Leader"){
            setmyName('Whats your plan tonight?')
        }
        else{
            setmyName('Hello Goodmorning Leader')
        }
        

        //setmyName("x")===> so myName="x"


    }



    return(
        <>
        <div >
        <h1  className='text-white' style={{textAlign:'center',marginTop:"250px"} }>{myName}</h1>

        <br>
         </br>
       <button className='button'onClick={changeName}>Say Hello</button>
        </div>
       
        </>
    )
}

export default App;