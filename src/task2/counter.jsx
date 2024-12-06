import React, { useState } from "react";
function Counter(){
    const[text,setText]=useState(0)
    return(
        
        <div style={{display:"flex",margin:"30px",alignItems:"center",flexDirection:"column",gap:"30px",border:"2px solid black",height:"120px",width:"120px"}}>
             <h1>{text}</h1>
             <button onClick={()=>{setText(text+1)}} style={{color:"red",border:"2px solid"}}>Increment</button>
            <button onClick={()=>{setText(text-1)}} style={{color:"green",border:"2pxsolid"}}>Decrement</button>
            
    
        </div>

    )
}
export default Counter;