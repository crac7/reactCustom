import React from 'react';
import {render} from 'react-dom';
import './style/main.css';
const App=()=>{
    return(  
         <div className="container"> 
            <div className="container-header"> 
                <div  className="elementheader" >
                        <h1 className="elementheader_1">Auto-routing</h1>                    
                    </div>                           
                    <div  className="elementheader" >          
                        <button className="elementheader_2">X</button>                 
                    </div> 
            </div>    
            <div className="container-body">      
                 <div  className="elementbody" >
                      <p>1</p>
                     <p>Total-pickups</p>
                 </div>                  
                 <div  className="elementbody" >
                      <p>102</p>
                     <p>Total-dropfo</p>
                 </div> 
          </div>    
           <div  className="elementbody_text" >
                      <p>Auto-routing mode</p>
          </div> 
          <div className="container-body">  
                <div  className="elementbody" >    
                     <input type="radio" name="gender" value="male" checked/> Male
                </div> 
                <div  className="elementbody" >   
                      <input type="radio" name="gender" value="other"/> Other  
                </div> 
          </div>  
         </div>
    )
 
}
render(
    <App/>,
    document.getElementById('app')
);