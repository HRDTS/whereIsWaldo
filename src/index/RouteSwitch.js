import { BrowserRouter, Routes, Route, Router} from "react-router-dom";
import Home from "../homepage/home";
import Parent from "../game/parent";
import Scoreboard from "../scoreboard/scoreboard";


// The component <Parent/> gets an element number passed to it. This element number determines which background, navigation bar and database to render.

const RouteSwitch = () => {
    return (
        <BrowserRouter >

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