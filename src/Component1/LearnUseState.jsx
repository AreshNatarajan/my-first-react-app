
import { useState } from "react";
export const LearnUseState = () =>{
    const [number , setNumber] = useState(2)
    
    const changeNumber =()=>{
          setNumber((currentNumber)=>{
            return currentNumber + 1
          })
          console.log(number)
    }

    console.log(number)

    return(
        <>
           <h2>Learn use state</h2>
           <h4>{number}</h4>
           <button onClick={changeNumber}>Click</button>
        </>
    );
}