import { useParams } from "react-router-dom";
import Nave from "./Nav";

function Menu(){
    const { items } = useParams()
    return(<>
    <Nave/>
       <h2>Menu</h2>
       <h2>{items}</h2>
    </>)
}

export default Menu;
