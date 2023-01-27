import React, { useEffect, useState, useRef } from "react";
import WIW from './img/whereIsWaldoBackground.jpg'
import PokeMap from './img/pokemon3.jpg'
import Charmander from './img/Character.Charmander.png'
import Pikachu from './img/Character.Pikachu2.png'
import Psyduck from './img/Character.Psyduck2.png'

/*
essential code from old tagging method
            <div className="location1">1</div>
            <div className="location2">2</div>
            <div className="location3">3</div>


                        <div className="selectionArea" ref={selectRef}>
            <form id="charSelectionForm">
                    <select id="charSelectionMenu" onClick={setSelectedCoordinates}>
                        <option>Which Pokemon is this?</option>
                        <option value='location1'>Tangela</option>
                        <option value='location2'>Scyther</option>
                        <option value='location3'>Diglet</option>
                    </select>
            </form>
            </div>
*/



function Background(props) {

    const selectRef = useRef()
    const dropdownRef = useRef()
    const divRef = useRef()
    const [clicked, setClicked] = useState(false)
    const selectedCoordinates = props.selectedCoordinates
    const setSelectedCoordinates = props.setSelectedCoordinates

    function cycleClicked () {
        clicked ? setClicked(false) : setClicked(true)
    }



    return (
        <div className="backgroundDiv" ref={divRef} onClick={cycleClicked}>
            <img src={PokeMap}/>
            <div className="location1"></div>
        </div>
    )
}

export default Background;