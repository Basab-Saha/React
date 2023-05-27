import React from 'react';
import './index.css';


//Description of Webapp:
// whenever you click the changeImage button the batman image will change to superman image along with a whole new background image
//here we are changing the state(property) of img tag (it's value)  and background-img propery of div

const Imghook = () => {
  const batmanImg = "https://th.bing.com/th/id/OIP.WTSVyoQn2NJsWq8DQr7YLwHaEn?pid=ImgDet&w=1000&h=623&rs=1";
  const supermanImg = "https://th.bing.com/th/id/OIP.u8Njh0JTnyCDD54FAkkreQHaEK?pid=ImgDet&rs=1";

  const [imgURL, setImgURL] = React.useState(batmanImg);
  const [bgImg, setBgImg] = React.useState('https://wallpapercave.com/wp/wp4294829.jpg');

  const changeImage = () => {
    if (imgURL === batmanImg) {
      setImgURL(supermanImg);
      setBgImg('https://th.bing.com/th/id/R.0dbc8e92ca127b3dc60da12fd3fa3d0a?rik=v1t8SIpwV7hLYQ&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fZSJUD7Z.jpg&ehk=h9IzQG6yKqIZcsoXwmJH5SCJSmsYQkgQ9ZvCbWYr6bI%3d&risl=&pid=ImgRaw&r=0');
    } else {
      setImgURL(batmanImg);
      setBgImg('https://wallpapercave.com/wp/wp4294829.jpg');
    }
  };

  return (
    <div style={{ backgroundImage: `url(${bgImg})`,height:'1000px' }}>
      <img src={imgURL} height={340} style={{ marginLeft: '500px', marginTop: '150px' }} />
      <br></br>
      <button className='btn btn-primary' style={{ marginLeft: '680px', marginTop: '100px' }} onClick={changeImage}>
        Change Image ♥️ ♥️ ♥️
      </button>
    </div>
  );
};

export default Imghook;
