import { useState, useMemo, useCallback } from "react";
import { createContext } from 'react';

import LearUseContext from "./LearnUseContext";

function LearnUseCallBack(){
    const numberContect = createContext();
    
    const [Numberss, setNumberforUseContext] = useState(0)
    
   const [number, setNumber] = useState(0)
    
   const useMemo0 = useMemo(()=>{
    
      return 1
   })
   
    const useCallback0 = useCallback(()=>{
        setNumber((curr) => curr + 2)
         return 1
    })

    useCallback()

    console.log(`use Memo  ${ useMemo0}`)
    console.log(`UseCall Back ${ useCallback0}`)

    return(
        <> 
        <h2>Learn UseCallBack</h2>
        <button onClick={useCallback0}>Click</button>
        <h2>{number}</h2>
{/* 
        <numberContect.Provider value= {{Numberss }}>
            <LearUseContext/>
        </numberContect.Provider> */}
        </>
    )
}

export default LearnUseCallBack;