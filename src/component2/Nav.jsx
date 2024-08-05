import { Link, BrowserRouter as Router, Routes , Route } from "react-router-dom";
import { Home } from "./Home";
import { Contact } from "./Contact";
import { App } from "./App";


export const Nav = ()=>{
    return(
        <> 
           <Router>
              <Link to='/'>Home</Link>
              <Link to='/contact'>Contact</Link>

              <Routes>
                 <Route path="/" element={<Home/>}></Route>
                 <Route path="/contact" element={<Contact/>}></Route>
              </Routes>
           </Router>
           <App/>
        </>
    );
}