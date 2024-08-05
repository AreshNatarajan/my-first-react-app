
import { useReducer } from "react"


function fun (state, action){
    debugger
switch (action.type){
    case "Increment":
         
     
        return{
            count : state.count + 1
        }
      
       
    case "Decrement":
        if(state.count <= 0){
            return { count : state.count = 0 }
        }
        return { count : state.count - 1 }  
        
    default:
        return state   
}
}



function LearnUseReducer1(){
    const [state, dispatch] = useReducer(fun, {count : 0})
   
    console.log("starte :", state)
    const dic =()=>{
        const val = 'Decrement'
        dispatch({ type : val})
    }
    const inc =()=>{
        const val = 'Increment'
        dispatch({ type : val })
    }
    return(
        <>
        <h3>Learn </h3>
         <h2>{state.count}</h2>
        <button onClick={inc}>+</button>
        <button onClick={dic}>-</button>
        </>
    )
}
export default LearnUseReducer1