import { useState } from "react";

function LearnUseReducer(){
   
    

    const [number, SetNumber] = useState(0)
    const increment =()=>{
        SetNumber(curr => curr + 1)
    }
    const decrement =()=>{
        SetNumber(curr => curr - 1)
    }
    return(
        <>
        <div>
            <h2>Learn use Reducer 1) useState()</h2>
            <h2 style={{fontSize: '50px'}}>{number}</h2>
            <div style={{display:'flex', margin: '10px'}}>
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
            </div>
        </div>

         
        </>
    );
}



export default LearnUseReducer;