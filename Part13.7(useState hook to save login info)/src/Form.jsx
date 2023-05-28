import React , {useState} from 'react'

const Form = () => {

    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[captcha,setCaptcha]=useState('');
    
    const[allEntry,setAllEntry]=useState([]);

    const submitForm=(e)=>{
        e.preventDefault();

        const newEntry={email:email,password:password,captcha:captcha};

        

        setAllEntry([...allEntry,newEntry]);

        console.log(allEntry);
    }


  return (
    <>
    <form onSubmit={submitForm}>
            <div className='formbox '>
        <h1 className='hd'>Sign In 🔐</h1>

       <input required type='text' placeholder='Email' className='inpt' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
       
       <br/>
       <input required type='password'  placeholder='Password' className='inpt' value={password} onChange={(e)=>setPassword(e.target.value)}></input>
       <br/>
       <input required type='text'  placeholder='Captcha' className='inpt' value={captcha} onChange={(e)=>setCaptcha(e.target.value)}></input>

       <br/><br/>
       <button type="submit" className='button2'>Submit</button>
       
    </div>
    </form>

  {
    allEntry.map((eachEntry)=>{
        

        return(
            <div className='loginInfo'>
                 <h4 ><span className='bd'>Email</span> : {eachEntry.email} <span className='bd'>Password</span> : {eachEntry.password} <span className='bd'>Capctha</span> :{eachEntry.captcha} </h4>
           
            </div>
           
        )
    })
  }
    </>
  )
}

export default Form