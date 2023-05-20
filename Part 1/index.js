import React  from 'react';
import ReactDOM from 'react-dom';

// Traditional React rendering method

ReactDOM.render(<h1>Basab Saha Data Scientist @ISRO</h1>,
      document.getElementById("root1") );


 // How internally rendering happens with pure javascript     
var head=document.createElement("h1")

head.innerHTML="JUST BRING IT!!"

document.getElementById("root1").appendChild(head)





