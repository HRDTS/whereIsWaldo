import React, { useEffect } from "react";
import Logo from './img/Logo.Waldo.svg'
import Pokemon from './img/Logo.Pokemon.png'
import { useRef } from "react";

function Navbar(props) {

    const pokemon1 = props.pokemon1
    const pokemon2 = props.pokemon2
    const pokemon3 = props.pokemon3
    const scoreTracker = props.scoreTracker

    const location1Ref = useRef()
    const location2Ref = useRef()
    const location3Ref = useRef()

    useEffect(() => {
        console.log(location1Ref.current.style.backgroundColor)
        if(scoreTracker.location1) location1Ref.current.style.backgroundColor = 'green';
        if(scoreTracker.location2) location2Ref.current.style.backgroundColor = 'green';
        if(scoreTracker.location3) location3Ref.current.style.backgroundColor = 'green';
    })

    return (
        <nav className="navbar">
            <img className="navbarPokemon" src={Logo}/>

            <div>
                <img className="navbarPokemon" id="pokemon1" src={pokemon1} ref={location1Ref}/>
                <img className="navbarPokemon" id="pokemon2" src={pokemon2} ref={location2Ref}/>
                <img className="navbarPokemon" id="pokemon3" src={pokemon3} ref={location3Ref}/>
            </div>

            <img className="navbarPokemon" src={Pokemon}/>
        </nav>
    )
}

export default Navbar;