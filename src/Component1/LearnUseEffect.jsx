
import { useState } from "react";
import { useEffect } from "react";



const LearnUseEffect =()=>{
      
    const [num, setNum] = useState(1)

    useEffect(()=>{  
         
       setNum(1)
       console.log(`The Value Is ${num}`)

       return ()=>{
         setNum(1)
         console.log(`Memory cleaned ${num}`)
       }

       }, [num])

    return(
       <>
          <h2>LEARN UseEffect</h2>

          <h3>{num}</h3>

          <button onClick = {()=> setNum((el)=> el + 1 )      }>Click</button>
       </>
    )
} 

export default  LearnUseEffect;