import React, { useEffect, useState, useRef } from "react";
import WIW from './img/whereIsWaldoBackground.jpg'
import PokemonHard from './img/pokemonRealHard.jpg'
import Charmander from './img/Character.Charmander.png'
import Pikachu from './img/Character.Pikachu2.png'
import Psyduck from './img/Character.Psyduck2.png'


function Background3(props) {

    const selectRef = useRef()
    const dropdownRef = useRef()
    const divRef = useRef()
    const [clicked, setClicked] = useState(false)
    const selectedCoordinates = props.selectedCoordinates
    const setSelectedCoordinates = props.setSelectedCoordinates

    function cycleClicked () {
        clicked ? setClicked(false) : setClicked(true)
    }

    useEffect(() => {
        selectRef.current.style.left = `${selectedCoordinates.x}%`
        selectRef.current.style.top = `${selectedCoordinates.y}%`
        console.log(selectedCoordinates.x)
    }, [selectedCoordinates])


    return (
        <div className="backgroundDiv" ref={divRef} onClick={cycleClicked}>
            <img src={PokemonHard}/>
            <div className="selectionArea" ref={selectRef}>
                <form id="charSelectionForm">
                        <select id="charSelectionMenu" onClick={setSelectedCoordinates}>
                            <option>Which Pokemon is this?</option>
                            <option value='location1'>Stanler</option>
                            <option value='location2'>Bellosom</option>
                            <option value='location3'>Machoke</option>
                        </select>
                </form>
            </div>
        </div>
    )
}

export default Background3;