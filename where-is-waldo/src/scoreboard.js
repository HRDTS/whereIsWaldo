import React, { useState } from "react";
import Logo from './img/Logo.Waldo.svg'
import pokemonEasy from './img/pokemonEasy.jpg'
import pokemonMedium from './img/pokemonMedium.jpg'
import PokemonHard from './img/pokemonRealHard.jpg'
import RenderScoreboard1 from "./renderScoreboard1";
import RenderScoreboard2 from "./renderScoreboard2";
import RenderScoreboard3 from "./renderScoreboard3";

/*
if 1, select 1.
if 2, select 2.
if 3, select 3.

put maps in an array, return based on argument.
*/

function Scoreboard () {
   const [selectedMap, setSelectedMap] = useState(1)

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
         <header className="homePageHeader2">
            <span className="headerLeft">&nbsp;&nbsp;</span>
             <img className="homePageLogo" src={Logo}/> 
             <div className="headerRight">return to home page</div>
             </header>
            <div className="scoreboardButtonDiv">
               <button className="scoreboardButton">Play the selected level</button>
            </div>
             <div className="soreboardGrid">
                <img className="scoreboardGridItem" src={pokemonEasy} onClick={() => setSelectedMap(0)} style={selectedMap == 0 ? {border: "10px solid limegreen"} : null}/>
                <img className="scoreboardGridItem" src={pokemonMedium} onClick={() => setSelectedMap(1)} style={selectedMap == 1 ? {border: "10px solid limegreen"} : null}/>
                <img className="scoreboardGridItem" src={PokemonHard} onClick={() => setSelectedMap(2)} style={selectedMap == 2 ? {border: "10px solid limegreen"} : null}/>
             </div>

                  <ScoreboardComponent/>
    </div>
)
}

export default Scoreboard;