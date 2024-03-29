import React, { useState } from "react";
import Logo from '../img/Logo.Waldo.svg'
import pokemonEasy from '../img/pokemonEasy.jpg'
import pokemonMedium from '../img/pokemonMedium.jpg'
import PokemonHard from '../img/pokemonRealHard.jpg'
import RenderScoreboard1 from "./renderScoreboard1";
import RenderScoreboard2 from "./renderScoreboard2";
import RenderScoreboard3 from "./renderScoreboard3";
import { Link } from "react-router-dom";

/*
if 1, select 1.
if 2, select 2.
if 3, select 3.

put maps in an array, return based on argument.
*/

function Scoreboard () {
   const [selectedMap, setSelectedMap] = useState(0)

   function selectScoreboard (index) {
      const allScoreboards = [RenderScoreboard1, RenderScoreboard2, RenderScoreboard3]
      const chosenScoreboard = allScoreboards[index]
         return (
            chosenScoreboard
            )

   }

   const ScoreboardComponent = selectScoreboard(selectedMap)

return (
    <div>
         <header className="header">
            <span className="headerLeft">&nbsp;&nbsp;</span>
            <Link to='/' className="gameLogo"><img className="homePageLogo" src={Logo}/> </Link>
             <div className="headerRight"></div>
             <div className="pseudoHeaderRight"></div>
             </header>
             <div className="scoreboardBody">
               <div className="scoreboardUpperText"> Click on one of the maps below and see what other people scored! </div>
               <div className="scoreboardGrid">
                  <img className="scoreboardGridItem" src={pokemonEasy} onClick={() => setSelectedMap(0)} style={selectedMap == 0 ? {border: "3px solid #00AEEF"} : null}/>
                  <img className="scoreboardGridItem" src={pokemonMedium} onClick={() => setSelectedMap(1)} style={selectedMap == 1 ? {border: "3px solid #00AEEF"} : null}/>
                  <img className="scoreboardGridItem" src={PokemonHard} onClick={() => setSelectedMap(2)} style={selectedMap == 2 ? {border: "3px solid #00AEEF"} : null}/>
               </div>
               <div className="scoreboardButtonDiv">
                  <Link to={'/level' + (selectedMap + 1)} className="scoreboardButtonOutside">
                  <button className="scoreboardButton">Play the selected level</button>   
                  </Link>
                  
               </div>
                     <div className="tableOutside">
                     <ScoreboardComponent/>
                     </div>
             </div>  
    </div>
)
}

export default Scoreboard;