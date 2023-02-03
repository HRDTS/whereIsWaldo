import React, { useEffect, useState } from "react";
import pokemonEasy from './img/pokemonEasy.jpg'
import Tangela from './img/Character.Tangela.png'
import Diglet from './img/Character.Diglet.png'
import Scyther from './img/Character.Scyther.png'
import Logo from './img/Logo.Waldo.svg'


function Home() {

    return (
        <div className="homePage">
            <header className="homePageHeader"> <img className="homePageLogo" src={Logo}/> </header>
            <div className="homePageBody">

                <div className="homePageGrid">
                    
                <div className="homePageDifficulty">Waldo x Pokemon</div>
                <div className="homePageDifficulty">Waldo x Digimon</div>
                <div className="homePageDifficulty">Waldo x Sony</div>

                    <div className="homePageCharacterDiv">
                    <div className="homePageDifficulty">level 1:</div>
                        <img className="homePageCharacter" src={Tangela}/>
                        <img className="homePageCharacter" src={Diglet}/>
                        <img className="homePageCharacter" src={Scyther}/>
                    </div>

                    <div className="homePageCharacterDiv">
                    <div className="homePageDifficulty">level 2:</div>
                        <img className="homePageCharacter" src={Tangela}/>
                        <img className="homePageCharacter" src={Diglet}/>
                        <img className="homePageCharacter" src={Scyther}/>
                    </div>

                    <div className="homePageCharacterDiv">
                    <div className="homePageDifficulty">level 3: </div>
                        <img className="homePageCharacter" src={Tangela}/>
                        <img className="homePageCharacter" src={Diglet}/>
                        <img className="homePageCharacter" src={Scyther}/>
                    </div>

                    <div className="brighten"> <img src={pokemonEasy} className='homePageImage'/> </div>
                    <div className="brighten"> <img src={pokemonEasy} className='homePageImage'/> </div>
                    <div className="brighten"> <img src={pokemonEasy} className='homePageImage'/> </div>
                </div>
                <div  className="homePageScoreboardDiv"> 
                    <div>
                        <h1>Are you a true Waldo expert?</h1>
                        <h1 className="homePageLeaderboardText">View the scoreboard</h1>
                    </div>
                    <button className="homePageScoreboardButton">scoreboard</button>
                </div>
                
            </div>

        </div>

    )
}


export default Home;