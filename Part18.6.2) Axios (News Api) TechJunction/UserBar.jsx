import React, { useState, useEffect } from 'react';
import User from './User';
import axios from 'axios';

const UserBar = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {

             
    const fetchData = async () => {

      const response = await axios.get('https://newsapi.org/v2/everything?q=computer%20science&apiKey=a957bc4b26464410a61bf6a4c2c196cb');

      // const results=response.data;
       //console.log(results.articles)

       setNews(response.data.articles);
      
    };




    fetchData();


  }, []);

  return (
    <div className='catbar'>
      {news.map((eachNews) => (
        <User  imgURL={eachNews.urlToImage} Name={eachNews.title} descrip={eachNews.description} author={eachNews.source.name}   linkto={eachNews.url} key={eachNews.id} />
      ))}
    </div>
  );
};

export default UserBar;
