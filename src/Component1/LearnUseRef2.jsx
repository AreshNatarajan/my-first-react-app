import { useState, useEffect } from "react"
import { useRef } from "react"

export const LearnUseRef2 =()=>{

    const [val, setVal] =  useState('')
    const [val1, setVal1] = useState('')

    const count = useRef(0)

    const count1 = useRef(0)
    
    console.log(val)
    console.log(val1)

    useEffect(()=>{
        count.current = val
        console.log('wrks')
    },[val])


    useEffect(()=>{
        count1.current = val
        console.log('wrks 1')
    },[val1])
    return(
        <>
         <h2>Learn UseRef</h2>
         <input type="text" value = {val} onChange= {(e) => setVal(e.target.value) } />
         <h3>Current Value : {val}</h3>
         <h3>Prevoius Value {count.current}</h3>
         <h4>x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=</h4>
         <input type="text" value = {val1} onChange= {(e) => setVal1(e.target.value) } />
         <h3>Current Value : {val1}</h3>
         <h3>Prevoius Value {count1.current}</h3>
        </>
    )
}
