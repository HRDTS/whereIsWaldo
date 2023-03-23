import React, { Component, useCallback, useEffect, useRef, useState } from "react";
import Logo from '../img/Logo.Waldo.svg'
import { Link } from "react-router-dom";
import hamburgerMenu from '../img/hamburgerMenu.png'

function Navbar(props) {

    const pokemon1 = props.pokemon1
    const pokemon2 = props.pokemon2
    const pokemon3 = props.pokemon3
    const trainer = props.trainer
    const scoreTracker = props.scoreTracker
    const seconds = props.seconds
    const minutes = props.minutes

    const headerRightHamburgerPokemonsRef = useRef()


    function collapseHamburgerMenu() {
        headerRightHamburgerPokemonsRef.current.classList.contains('active') ?
         headerRightHamburgerPokemonsRef.current.classList.remove('active') : 
         headerRightHamburgerPokemonsRef.current.classList.add('active')

    }

    return (
        <nav className="header">

            <div className="headerLeft">Your time: {minutes < 10? '0'+minutes: minutes}:{seconds < 10? '0'+seconds : seconds}</div>

            <Link to='/' className="gameLogo"> <img className="gameLogoImage" src={Logo}/></Link>

            <div className="headerRightHamburger" onClick={() => collapseHamburgerMenu()}>


                <div className="hamburgerDiv">
                <img className="hamburgerMenu" src={hamburgerMenu}/>
                    <div className="headerRightHamburgerPokemons" ref={headerRightHamburgerPokemonsRef}>

                            <img className="navbarPokemonHamburger" id='trainer' src={trainer}/>
                            <img className="navbarPokemonHamburger" id="pokemon1" src={pokemon1} style={{ backgroundColor: scoreTracker.location1 ? 'green' : undefined }} />
                            <img className="navbarPokemonHamburger" id="pokemon2" src={pokemon2} style={{ backgroundColor: scoreTracker.location2 ? 'green' : undefined }} />
                            <img className="navbarPokemonHamburger" id="pokemon3" src={pokemon3} style={{ backgroundColor: scoreTracker.location3 ? 'green' : undefined }} />
                    </div>

                </div>
            </div>
            
            <div className="headerRight">
                <img className="navbarPokemon" id='trainer' src={trainer}/>
                <img className="navbarPokemon" id="pokemon1" src={pokemon1} style={{ backgroundColor: scoreTracker.location1 ? 'green' : undefined }} />
                <img className="navbarPokemon" id="pokemon2" src={pokemon2} style={{ backgroundColor: scoreTracker.location2 ? 'green' : undefined }} />
                <img className="navbarPokemon" id="pokemon3" src={pokemon3} style={{ backgroundColor: scoreTracker.location3 ? 'green' : undefined }} />
            </div>


        </nav>
    )
}

export default Navbar;