import { useState } from "react";

function LearnState() {

const [source, setsource] = useState('React')
    const ChangeSource = () =>{
     console.log(source)
     {source === 'React' ? setsource('Angular') : setsource('React')}
}

    return(
        <>
        <h1>{source}</h1>
        <button onClick={ChangeSource}>Click</button>
        </>
    );
}

export default LearnState;