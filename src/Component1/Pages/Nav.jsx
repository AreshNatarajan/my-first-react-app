import { Link } from "react-router-dom";
function Nave(){
    return(<>
       <Link to='/'>Home</Link>
       <Link to='/user'>User</Link>
       <Link to='/menu'>Menu</Link>
    </>)
}

export default Nave;