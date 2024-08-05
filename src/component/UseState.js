import { useState } from "react";

function Usestate(){

    const [varilableForValue, functionName] = useState('Click')
    const [objectUseState, objectUseStateFunction] = useState({
         color : 'Red',
         type : "Fighter Jet",
         Speed : "Mach 3"

    })

    function ChangeData() {
     
      objectUseStateFunction( previous => {
          return(
            {...previous, color : "Yeloow"}
          )
      })
    }

    console.log('object for use sate', objectUseState)
   

    return(
        <>
         <h1 style={{color:'RED'}}>State in React </h1>
         <h1>{varilableForValue}</h1>

         <button onClick={()=>
           {varilableForValue !== 'Clicked' ? functionName('Clicked') : functionName('Click') } }>Click me
         </button>

         
         
         <h3 onClick={ ChangeData} >Multipule object Usestate</h3>

         <h1>Color :{objectUseState.color}</h1>
         <h1>Type :{objectUseState.type}</h1>
         <h1>Speed :{objectUseState.Speed}</h1>
         <button onClick={ChangeData}>Click for Object Change </button>
         
        </>
    );

}


export default Usestate;