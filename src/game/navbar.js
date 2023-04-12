import React, { Component, useCallback, useEffect, useRef, useState } from "react";
import Logo from '../img/Logo.Waldo.svg'
import { Link } from "react-router-dom";
import hamburgerMenu from '../img/hamburgerMenu.png'

function Navbar(props) {

    const pokemon1Image = props.pokemon1Image
    const pokemon1Name = props.pokemon1Name
    const pokemon2Image = props.pokemon2Image
    const pokemon2Name = props.pokemon2Name
    const pokemon3Image = props.pokemon3Image
    const pokemon3Name = props.pokemon3Name
    const trainerImage = props.trainerImage
    const trainerName = props.trainerName
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

                            <div className="pokemonAndName" style={{ backgroundColor: scoreTracker.location1 ? 'green' : undefined }} >
                                <img className="navbarPokemonHamburger" id="pokemon1" src={pokemon1Image} />
                                <div id="pokemonName">{pokemon1Name}</div>
                            </div>

                            <div className="pokemonAndName" style={{ backgroundColor: scoreTracker.location2 ? 'green' : undefined }}>
                                <img className="navbarPokemonHamburger" id="pokemon2" src={pokemon2Image}  />
                                <div id="pokemonName">{pokemon2Name}</div>
                            </div>

                            <div className="pokemonAndName" style={{ backgroundColor: scoreTracker.location3 ? 'green' : undefined }}>
                                <img className="navbarPokemonHamburger" id="pokemon3" src={pokemon3Image}  />
                                <div id="pokemonName">{pokemon3Name}</div>
                            </div>

                    </div>

                </div>
            </div>
            
            <div className="headerRight">
                <img className="navbarPokemon" id='trainer' src={trainerImage}/>

                <div className="pokemonAndName" style={{ backgroundColor: scoreTracker.location1 ? 'green' : undefined }}>
                    <img className="navbarPokemon" id="pokemon1" src={pokemon1Image}  />
                    <div id="pokemonName">{pokemon1Name}</div>
                </div>

                <div className="pokemonAndName" style={{ backgroundColor: scoreTracker.location2 ? 'green' : undefined }}>
                    <img className="navbarPokemon" id="pokemon2" src={pokemon2Image}  />
                    <div id="pokemonName">{pokemon2Name}</div>
                </div>

                <div className="pokemonAndName" style={{ backgroundColor: scoreTracker.location3 ? 'green' : undefined }}>
                    <img className="navbarPokemon" id="pokemon3" src={pokemon3Image}  />
                    <div id="pokemonName">{pokemon3Name}</div>
                </div >

            </div>


        </nav>
    )
}

export default Navbar;