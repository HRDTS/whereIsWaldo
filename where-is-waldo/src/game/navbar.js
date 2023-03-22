import React, { Component, useCallback, useEffect, useState } from "react";
import Logo from '../img/Logo.Waldo.svg'
import { Link } from "react-router-dom";

function Navbar(props) {

    const pokemon1 = props.pokemon1
    const pokemon2 = props.pokemon2
    const pokemon3 = props.pokemon3
    const trainer = props.trainer
    const scoreTracker = props.scoreTracker
    const seconds = props.seconds
    const minutes = props.minutes


    return (
        <nav className="header">

            <div className="headerLeft">Your time: {minutes < 10? '0'+minutes: minutes}:{seconds < 10? '0'+seconds : seconds}</div>

            <Link to='/'> <img className="navbarPokemon" src={Logo}/></Link>

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