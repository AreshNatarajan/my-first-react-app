import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./Pages/Home"
import User from "./Pages/User"
import Menu from "./Pages/Menu"
import Error from "./Pages/Error"
import Next from "./Pages/Next"

function LearnRouter(){
    return(
        <>
        <h2>Learn Router</h2>
        <Next/>
        <BrowserRouter>
       
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/user" element={ <User/> }/>
            <Route path="/menu/:items" element={<Menu/>}/>
            <Route path="*" element={<Error/>}/>
          </Routes>
        </BrowserRouter>
        </>
    )
}
export default LearnRouter