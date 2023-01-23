import React, { useEffect, useState, useRef } from "react";
import WIW from './img/whereIsWaldoBackground.jpg'
import Charmander from './img/Character.Charmander.png'
import Pikachu from './img/Character.Pikachu2.png'
import Psyduck from './img/Character.Psyduck2.png'

function Background(props) {

    const selectRef = useRef()
    const dropdownRef = useRef()
    const [clicked, setClicked] = useState(false)
    const selectedCoordinates = props.selectedCoordinates
    const setSelectedCoordinates = props.setSelectedCoordinates

    function cycleClicked () {
        clicked ? setClicked(false) : setClicked(true)
    }

    useEffect(() => {
    let height = selectRef.current.offsetHeight
    let width = selectRef.current.offsetWidth
    console.log(height, width)
    selectRef.current.style.top = `${selectedCoordinates.y - (height * 0.5)}px`
    selectRef.current.style.left = `${selectedCoordinates.x - (width * 0.5)}px`
    })



    return (
        <div className="backgroundDiv">
            <img className="backgroundImage" src={WIW} onClick={cycleClicked}/>
            <div className="selectionArea" ref={selectRef} onClick={''}>
            <form id="charSelectionForm">
                    <select id="charSelectionMenu" onClick={setSelectedCoordinates}>
                        <option>Which character is this?</option>
                        <option>Charmander</option>
                        <option>Psyduck</option>
                        <option>Pikachu</option>
                    </select>
            </form>
            </div>
            <img className="charmander" src={Charmander}/>
            <img className="pikachu" src={Pikachu}/>
            <img className="psyduck" src={Psyduck}/>
            <div className="clickLayer"></div>
        </div>

    )
}

export default Background;