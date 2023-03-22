import React, { useEffect, useState, useRef } from "react";
import pokemonEasy from '../img/pokemonEasy.jpg'

// NOTE: background1, background2 and background3 all work the same way. The only thing that changes is the map that is displayed and logically the pokemons the user can select.

function Background1(props) {

    const selectRef = useRef()
    const dropdownRef = useRef()
    const divRef = useRef()
    const [clicked, setClicked] = useState(false)
    const selectedCoordinates = props.selectedCoordinates
    const setSelectedCoordinates = props.setSelectedCoordinates

    function cycleClicked () { // this function render a dropdown menu 'smoothly'. The dropdown menu disappears if you click somehere else than the dropdown menu.
        clicked ? setClicked(false) : setClicked(true);
    }

    // I am using a ref() to store the [x,y] coordinates initially. I found out that the [x] coordinate - so the width - is a bit off in this component and it requires a correction.  
    useEffect(() => {  // The [x] coordinate is correct in the useEffect BELOW this useEffect. After I correct this [x] coordinate, I send the [x,y] coordinates to the parent.js file through the setSelectedCoordinates.
        selectRef.current.style.left = `${selectedCoordinates.x}%`
        selectRef.current.style.top = `${selectedCoordinates.y}%`
        console.log(selectedCoordinates.x)
    }, [selectedCoordinates])

    useEffect(() => { // this is where I lift up the [x,y] coordinates to the parent.js file.
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
                <option value='location1'>Rattata</option>
                <option value='location2'>Krabby</option>
                <option value='location3'>Kakuna</option>
            </select>
    </form>
        )
    }

    return (
        <div className="backgroundDiv" ref={divRef} onClick={cycleClicked}>
            <img src={pokemonEasy}/>
            <div className="selectionArea" ref={selectRef} >
                {clicked? renderDropdown() : null}
            </div>
        </div>
    )
}

export default Background1;