import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./navbar";
import Home from "./home";
import Parent from "./parent";
import Scoreboard from "./scoreboard";


const RouteSwitch = () => {
    return (
        <BrowserRouter>

            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/level1' element={<Parent background={0}/>}/>
                <Route path='/level2' element={<Parent background={1}/>}/>
                <Route path='/level3' element={<Parent background={2}/>}/>
                <Route path='/scoreboard' element={<Scoreboard/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch;