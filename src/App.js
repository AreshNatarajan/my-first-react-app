import React from 'react';
import './App.css';
import Obj from './component/props';
import ClassOne from './component/classComp';
import CarList from './component/carList';




function Namess(){
     const carNAme = 'ford'
     const carList = [
       {carname : 'Ford', carcolor :'Red'},
       {carname : 'Lamborgini', carcolor :'Blue'},
       {carname : 'Ferrori', carcolor : 'Yellow'},
       {carname : 'Audi', carcolor : 'Black'}
     ]
    
     
  return (
               
         
     <>
        {/* //conditional routing */}
        {/* {bikeName.value !== undefined ? <Obj carNAme={carNAme}/> : <h1>Null</h1>} */}
         
         <ClassOne carNAme={carNAme}/>
         <Obj carNAme={carNAme}/>
         
                   {/* list */}
         <ul>
            {carList.map((carList, index)=>{ return(
               <li key = {index} ><CarList  index = {index}  carList = {carList}/></li> 
            )})}
         </ul>
     
     </>
  );
}



export default Namess ;
