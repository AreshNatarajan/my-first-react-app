 import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
 
 const LearnUseRef = ()=>{

  const currentRef = useRef(null)
  const colors = ['#454854', '#544d48', '#454de4', '#855444']

  useEffect(()=>{},[])

  const colorChangeFun = () => {
   const randomColor = Math.floor(Math.random() * colors.length)
  
   currentRef.current.style.color = colors[randomColor]
  }
  
    return (  
        <>
          <h2>LearnUseRef</h2>
          <button onClick ={colorChangeFun}>Click</button>
         <h2 ref={currentRef}>Color Is Changing</h2>
        </>
    );
}

export default LearnUseRef