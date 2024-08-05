import React from "react";



class ClassOne extends React.Component{
    render(){
        const {carNAme} = this.props
        
        return(
            <>
               <h1>Class Component</h1>
              {carNAme.value != null ? <h1>car name is null</h1> : <h1>{carNAme}</h1>} 
              
            </>
        );
    }
}

export default ClassOne;