import { useState } from "react"
import { useMemo } from "react"
import { useEffect } from "react"

function UseMemo(){
   const [number, setNumber] = useState(0)
   const [theme, setTheme] = useState(false)
   console.log('first num  = ' , number)
   const delayNumber = useMemo(()=>{ return delayFunction(number) }, [number])

   const themeColor = useMemo(()=>{
    console.log("theme changed use memo ")
   return {
        backgroundColor : theme ? 'black' : 'white',
        color : theme ? 'white' : 'black'
   }
   },[theme]) 
  
 

    return(
        <>
        <h2>Use Memo</h2>
         <input type="text" value={number} onChange={(e)=> setNumber(e.target.value)} />
         <button onClick={()=> setTheme((el) => !el)} >Click To Change Theme</button>
         <div style={themeColor}>
            <h3>{delayNumber}</h3>
         </div>

        </>
    )
}

export default UseMemo;

function delayFunction(num){
    console.log("second num = " + num * 2)
    for(let i = 0; i < 1000000000 ; i++) {}
    return num * 2
}