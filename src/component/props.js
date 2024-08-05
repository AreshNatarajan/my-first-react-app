


function Obj(props){
    const {carNAme} = props
    return(
        <>
           {/* { carNAme.value === null ? <h1>{carNAme}</h1>  */}
           
           <h1>Conditional Routing {carNAme}</h1>
           {carNAme === null ? <h1>Car name is {carNAme}</h1> : <h1>Car name is not found </h1>}
           
        </>
    );
}

export default Obj;