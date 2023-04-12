import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Tangela from '../img/Character.Tangela.png'
import Diglet from '../img/Character.Diglet.png'
import Scyther from '../img/Character.Scyther.png'
import Rattata from '../img/Character.Rattata.png'
import Krabby from '../img/Character.Krabby.png'
import Kakuna from '../img/Character.Kakuna.png'
import Stanler from '../img/Character.Stanler.png'
import Bellosom from '../img/Character.Bellosom.png'
import Machoke from '../img/Character.Machoke.png'
import Logo from '../img/Logo.Waldo.svg'

import Professor from '../img/professorOak.png'
import Ash from '../img/ashKetchum.png'
import Brendan from '../img/brendan.png'


function Home() {

    return (
        <div className="homePage">
            <header className="homePageHeader"> <img className="homePageLogo" src={Logo}/> </header>
            <div className="homePageBody">

                <div className="homePageGrid">
                    
                <Link to='/level1' className='homePageImageOuter'>
                    <div className="grid1">
                    <div className="homePageDifficulty"><b>level 1</b></div>

                    <div className="homePageCharacterDiv">
                    <div className="homePageCharacterText">Help professor Oak find his Pokemons</div>
                    <div className="homePageCharacters">
                        <img className="homePageCharacter" src={Rattata}/>
                        <img className="homePageCharacter" src={Krabby}/>
                        <img className="homePageCharacter" src={Kakuna}/>
                    </div>
                    </div>

                    
                    <div className="brighten"> <img src={Professor} className='homePageImage'/> </div>
                    

                    </div>
                    </Link>

                    <Link to='/level2' className='homePageImageOuter'>
                    <div className="grid2">
                        <div className="homePageDifficulty"><b>level 2</b></div>

                    <div className="homePageCharacterDiv">
                        <div className="homePageCharacterText">Help Ash find his Pokemons</div>
                        <div className="homePageCharacters">
                            <img className="homePageCharacter" src={Tangela}/>
                            <img className="homePageCharacter" src={Diglet}/>
                            <img className="homePageCharacter" src={Scyther}/>
                        </div>
                    </div>

                    
                    <div className="brighten"> <img src={Ash} className='homePageImage'/> </div>

                    </div>
                    </Link>

                    <Link to='/level3' className='homePageImageOuter'>
                    <div className="grid3">
                        <div className="homePageDifficulty"><b>level 3</b></div>

                        <div className="homePageCharacterDiv">
                            <div className="homePageCharacterText">Help Brendan find his Pokemons</div>
                            <div className="homePageCharacters">
                                <img className="homePageCharacter" src={Stanler}/>
                                <img className="homePageCharacter" src={Bellosom}/>
                                <img className="homePageCharacter" src={Machoke}/>
                            </div>

                    </div>

                    
                    <div className="brighten"><img src={Brendan} className='homePageImage'/> </div>
                    
                    </div>
                    </Link>


                </div>
                <div  className="homePageScoreboardDiv"> 
                    <div className="AreYouAnExpertText">
                        <p className="homePageLeaderboardText">Are you a true Waldo expert?</p>
                        <p className="homePageLeaderboardText" id="homePageLeaderboardTextBottom">View the scoreboard</p>
                    </div>
                    <Link to='/scoreboard' className="homePageScoreboardButtonOuter">
                        <button className="homePageScoreboardButton">scoreboard</button>
                    </Link>

                </div>
                
            </div>

        </div>

    )
}


export default Home;