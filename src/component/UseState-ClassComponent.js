import react from "react"

class StateClassComponent extends react.Component{
    constructor(){
        super();
        this.state = {varilableForValue : 'Click', color : 'blue', type :'LCA' }
        
    }

   
    render(){
        return(
            <>
               <h1 style={{color:'Red'}}>State using class component </h1>
               <h1>{this.state.varilableForValue}</h1>
               <button onClick = {()=>{
                   this.state.varilableForValue !== 'Clicked' ? this.setState({varilableForValue : 'Clicked'}) : this.setState({ varilableForValue : 'Click' })
               }}>Click here</button>

               <h1>{this.state.color}</h1>
               <h1>{this.state.type}</h1>
               
               <button onClick = { ()=>{this.setState( previous =>{ return {...previous, color : 'Color Changed'}})}}>Change Color </button>
              
                                         

            </>
        );
    }
}

export default StateClassComponent;