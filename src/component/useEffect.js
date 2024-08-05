import { useState, useEffect  } from "react";



function UseEffect(){

   

    const [color, colorChangeFucntion] = useState('red')
    function change() {
        colorChangeFucntion('Blue')
    }

    useEffect(()=>{
        change()
    },[color])
    
    return(

        <>
        <h1>Use Effect</h1>
        <h1>{color}</h1>
        <button onClick ={change}>Click to Use Use Effect</button>

        </>
        
    );
}

export default UseEffect