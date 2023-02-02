import React from "react";
import Logo from './img/Logo.Waldo.svg'

function Scoreboard () {


return (
    <div>
         <header className="homePageHeader2">
            <span className="headerLeft">&nbsp;&nbsp;</span>
             <img className="homePageLogo" src={Logo}/> 
             <div className="headerRight">return to home page</div>
             </header>

             <div className="soreboardGrid">
                <div className="scoreboardGridItem"></div>
                <div className="scoreboardGridItem"></div>
                <div className="scoreboardGridItem"></div>
             </div>

             <div>render scoreboard here based on state</div>
    </div>
)
}

export default Scoreboard;