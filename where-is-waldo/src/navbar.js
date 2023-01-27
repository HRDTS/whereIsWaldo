import React, { Component, useCallback, useEffect, useState } from "react";
import Logo from './img/Logo.Waldo.svg'
import Pokemon from './img/Logo.Pokemon.png'

function Navbar(props) {

    const pokemon1 = props.pokemon1
    const pokemon2 = props.pokemon2
    const pokemon3 = props.pokemon3
    const scoreTracker = props.scoreTracker


    return (
        <nav className="navbar">
            <img className="navbarPokemon" src={Logo}/>

            <div>
                <img className="navbarPokemon" id="pokemon1" src={pokemon1} style={{ backgroundColor: scoreTracker.location1 ? 'green' : undefined }} />
                <img className="navbarPokemon" id="pokemon2" src={pokemon2} style={{ backgroundColor: scoreTracker.location2 ? 'green' : undefined }} />
                <img className="navbarPokemon" id="pokemon3" src={pokemon3} style={{ backgroundColor: scoreTracker.location3 ? 'green' : undefined }} />
            </div>

            <img className="navbarPokemon" src={Pokemon}/>
        </nav>
    )
}

export default Navbar;