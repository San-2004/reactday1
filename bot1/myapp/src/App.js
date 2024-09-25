import React from 'react';
import l1 from "./workimg.jpg";
import hyd from "./hyd.jpg";
import './App.css';

function App() {
  const myStyle = {
    color:"Blue",
    textAlign:"center",
    border:"12px  solid green",
    fontFamily: "courier",
    fontSize: "160%"
  }
  return (
     <div className='bg-con'>
      <h1 style={myStyle}>MRCET</h1>
      <div  className='cont'>
        <div className='in-con'>
        <img src={l1} className='img' alt='nature'/>

        <p className='txt'>The Malla Reddy College of Engineering And Technology is a technical institute established in 2004 with the approval of the All India Council for Technical Education. It is located in Maisammaguda, Doolapally, Hyderabad. It is affiliated to the Jawaharlal Nehru Technological University, Hyderabad
        </p>
        </div>

        <div className='in-con'>
        <img src={hyd} className='img' alt='nature'/>

        <p className='txt'>
        Hyderabad is the capital of southern India's Telangana state. A major center for the technology industry, it's home to many upscale restaurants and shops. Its historic sites include Golconda Fort, a former diamond-trading center that was once the Qutb Shahi dynastic capital. The Charminar, a 16th-century mosque whose 4 arches support towering minarets, is an old city landmark near the long-standing Laad Bazaar.
        </p>
        </div>
      </div>
      
      
     </div>
    
    )
}

export default App;

