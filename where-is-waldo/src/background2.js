import React, { useEffect, useState, useRef } from "react";
import pokemonMedium from './img/pokemonMedium.jpg'

function Background1(props) {

    const selectRef = useRef()
    const dropdownRef = useRef()
    const divRef = useRef()
    const [clicked, setClicked] = useState(false)
    const selectedCoordinates = props.selectedCoordinates
    const setSelectedCoordinates = props.setSelectedCoordinates

    function cycleClicked () {
        clicked ? setClicked(false) : setClicked(true);
    }

    useEffect(() => {
        selectRef.current.style.left = `${selectedCoordinates.x}%`
        selectRef.current.style.top = `${selectedCoordinates.y}%`
        console.log(selectedCoordinates.x)
    }, [selectedCoordinates])

    useEffect(() => {
        if(selectedCoordinates.x > 50 && dropdownRef.current != null) {
            let one = `${selectedCoordinates.x}%`
            let two = `${selectRef.current.offsetWidth}px`
            let three = `"calc(${one} - ${two})"`
            let position = 
            selectRef.current.style.left = `calc(${one} - ${two})`
        }
    })


    const renderDropdown = () => {
        
        return (
            <form id="charSelectionForm" >
            <select id="charSelectionMenu" onClick={setSelectedCoordinates} ref={dropdownRef}>
                <option>select pokemon</option>
                <option value='location1'>Tangela</option>
                <option value='location2'>Scyther</option>
                <option value='location3'>Diglet</option>
            </select>
    </form>
        )
    }

    return (
        <div className="backgroundDiv" ref={divRef} onClick={cycleClicked}>
            <img src={pokemonMedium}/>
            <div className="selectionArea" ref={selectRef} >
                {clicked? renderDropdown() : null}
            </div>
        </div>
    )
}

export default Background1;