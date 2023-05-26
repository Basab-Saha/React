import React from 'react'
import ReactDOM from 'react-dom';
import Employee from './Employee';

import './index.css'

function App(){

    const employeeinfo=[
        {
            name:"Jack",
            age:"22"
        },
        {
            name:"Bob",
            age:"21"
        },
        {
            name:"Smith",
            age:"20"
        },
        {
            name:"Marley",
            age:"24"
        },
    ]




    return(
        <>
    <div className='flex   box text-white '>
        
            <h1> Company's Directory</h1>

            {
                employeeinfo.map((employee)=>{
                    const{name,age}=employee;

                    return(
                        <>
                        <Employee name={name} age={age}/>
                        <br></br>
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