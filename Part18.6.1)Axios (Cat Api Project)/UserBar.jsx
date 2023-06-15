import React, { useState, useEffect } from 'react';
import User from './User';
import axios from 'axios';

const UserBar = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {

             
    const fetchData = async () => {

      const response = await axios.get('https://api.thecatapi.com/v1/images/search?limit=10');

      setCats(response.data); // Extract data from the response and set it to the state
      
    };




    fetchData();


  }, []);

  return (
    <div className='catbar'>
      {cats.map((cat) => (
        <User  imgURL={cat.url} Name={cat.id} h={cat.height} w={cat.width} key={cat.id} />
      ))}
    </div>
  );
};

export default UserBar;
