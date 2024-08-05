

function CarList(props){
     const {carList, index}  = props
     
     const {carname, carcolor} = carList
     const format = `${index + 1} The car is ${carname} and color is ${carcolor}`
    
    return(
        <> 
          
          <h1>{format}</h1>
          
        </>
    );
}

export default CarList;