import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Cardbox from './Cardbox';

function App(){
    return(
        <>
        <h1 style={{textAlign:'center',color:"white",fontFamily:"poppins"}}>My Favourite Movies</h1>
<div className="box1">

<div className='box2'>
<Cardbox img="https://4.bp.blogspot.com/-S7jQQsZmjJE/Wl0t56dUAKI/AAAAAAAAcVo/4ivjoUp_CZ47U5vMqsC_z01_Uv2sNx5dACLcBGAs/s1600/peaky%2Bblinders%2B3.png" title="Peaky Blinders" info="Peaky Blinders is a gangster family epic set in Birmingham, England in 1919, just after the First World War1. It follows the Peaky Blinders gang, who sew razor blades in the peaks of their caps23..." 
link="https://www.netflix.com/title/80002479"/>
</div>


<div className='box2'>
<Cardbox img="https://th.bing.com/th/id/R.fe7cae109dc385011f9b29d8e2a92c92?rik=s3mq3mjTdl5pSA&riu=http%3a%2f%2fwww.stuggi.tv%2fwp-content%2fuploads%2f2015%2f02%2fFIFTY-SHADES-OF-GREY-Soundtrack1.jpg&ehk=mLdvPkOMihCLTTUnPPJ5YCp%2bh1RWC5QBj5DkvmtxaFU%3d&risl=&pid=ImgRaw&r=0"
 title="Fifty Shades of Grey" info="When Anastasia Steele, a literature student, goes to interview the wealthy Christian Grey as a favor to her roommate Kate Kavanagh, she encounters a beautiful, brilliant and intimidating man...."
 link="https://www.netflix.com/title/80013872"/>
</div>

<div className='box2'>
<Cardbox img="https://i.redd.it/5f6p310bob921.jpg" title="Titans" info="Titans is an American superhero television series created by Akiva Goldsman, Geoff Johns, and Greg Berlanti. Based on the DC Comics superhero team the Teen Titans, the ..."
link="https://www.netflix.com/title/80218200"/>
</div>

<div className='box2'>
<Cardbox img="https://th.bing.com/th/id/R.7c3463e39df701a6cf6b6b9c606131cc?rik=jf4YbxgbpCbL%2bw&riu=http%3a%2f%2f2.bp.blogspot.com%2f-OAFTdQc1nK0%2fUZ9y61rLtTI%2fAAAAAAAAGQY%2fQImXKn_CVTg%2fs1600%2fgodf1.jpg&ehk=Hh8RIYzyi5A808BgtIWfDxVLPXLyldIu488opbq8818%3d&risl=&pid=ImgRaw&r=0"
 title="Godfather" info="The Godfather  Vito Corleone is the head of the Corleone mafia family in New York. He is at the event of his daughter's wedding. Michael, Vito's youngest son and a decorated ..." 
 link="https://www.netflix.com/title/60011152"/>
</div>

</div>

<div className="box1">
<div className='box2'>
<Cardbox img="https://i.pinimg.com/474x/e9/29/69/e92969e44c6bc61f28f4874d513c3535.jpg"
 title="Mindhunter" info="Mindhunter is an American psychological crime thriller television series created by Joe Penhall, which debuted in 2017, based on the 1995 true-crime book Mindhunter:"
 link="https://www.netflix.com/title/80114855" />
</div>

<div className='box2'>
<Cardbox img="https://images8.alphacoders.com/881/881638.jpg"
title="Stranger Things " info="Stranger Things is an American science fiction horror drama television series created by the Duffer Brothers, who also serve as showrunners and are executive producers along  "
link="https://www.netflix.com/title/80057281"/>
</div>

<div className='box2'>
<Cardbox img="https://th.bing.com/th/id/R.45f69a9691608c03fbf6cc4036ceb6c1?rik=fScFvON2x2wvQw&riu=http%3a%2f%2fwww.eatori.com%2fwp-content%2fuploads%2f2013%2f02%2flife-of-pi-poster-691x1024.jpg&ehk=9ft1Sy2NuaUDXyrELvtLHMsx3lgPosk09bOJo1dzmKA%3d&risl=&pid=ImgRaw&r=0"
title="life of Pie" info="Life of Pi Summary L ife of Pi is a novel about an Indian teenager who is trapped on a lifeboat with a Bengal tiger. Piscene Molitor “Pi” Patel grows up in Pondicherry as the son of a zookeeper, p"
link="https://www.hotstar.com/in/movies/life-of-pi/1770000706/watch"/>
</div>

<div className='box2'>
<Cardbox img="https://th.bing.com/th/id/OIP.mK3w8dJhdhXt32ou0NHq0QHaJ4?pid=ImgDet&rs=1" 
title="Uninvited" info="he Uninvited is a 2009 American psychological horror film directed by the Guard Brothers and starring Emily Browning, Elizabeth Banks, Arielle Kebbel, and David Strathairn. t is a remake of th..."
link="https://www.netflix.com/title/70109690"/>
</div>

</div>
       
        </>
    )
}

export default App;