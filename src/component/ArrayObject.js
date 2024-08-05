import { useState } from "react";


function ArrayObject(){
    const [list, setList] = useState([])
    const [count, setCount] = useState(1);
    function addList(){
        const itemName = 'Item' + count;
        setList((previous)=>{ return [...previous, itemName]});
        setCount((previous)=>{ return previous +1})
    }
    return(
        <> 
           <h1>List Using Array</h1>
           <ul>
              {list.map((el, index)=>{
                return(
                    <li key={index}>{el}</li>
                );
              })}
           </ul>
           <button onClick={ addList}>Click to increase List</button>
        </>
    );
}

export default ArrayObject;