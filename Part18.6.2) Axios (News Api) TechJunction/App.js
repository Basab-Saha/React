import React from 'react';
import UserBar from './UserBar';

const App = () => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
        <h1 style={{ color: 'black', fontFamily: 'poppins' ,fontWeight:'bold'}}>
          TechJunction
        </h1>
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
        <a href="https://chat.openai.com/" className='gptbtn bg-dark' style={{borderRadius:'40px', padding:'15px',marginLeft: '90px' ,marginBottom:'50px',textDecoration:'none',backgroundColor:'#F29727' }}>
          Try Chatgpt 🤖
        </a>
      </div>
      <UserBar />
    </div>
  );
};

export default App;
