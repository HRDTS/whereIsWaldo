import React, { useEffect, useState, useRef } from "react";
import pokemonEasy from '../img/pokemonEasy.jpg'

// NOTE: background1, background2 and background3 all work the same way. The only thing that changes is the map that is displayed and the pokemons the user can select.

function Background1(props) {

    const selectRef = useRef()
    const dropdownRef = useRef()
    const divRef = useRef()
    const [clicked, setClicked] = useState(false)
    const selectedCoordinates = props.selectedCoordinates
    const setSelectedCoordinates = props.setSelectedCoordinates

    function cycleClicked (e) { // this function render a dropdown menu 'smoothly'. The dropdown menu disappears if you click somehere else than the dropdown menu.
        console.log(e.target.id)
        clicked && e.target.id != 'charSelectionMenu' ? setClicked(false) : setClicked(true);
    }

    // I am using a ref() to store the [x,y] coordinates initially. 
    useEffect(() => {  // 
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
            selectRef.current.style.left = `calc(${one} - ${two})` // this calculation is neccessary to prevent the select menu to go out of bounds.
        } // when the user clicks on the screen, the dropdown menu pops up and the cursor will by default be positioned on the left side of the dropdown menu. 
    }) // when the user clicks close to the right edge of the screen, the dropdown menu goes out of bounds, but with this code the dropdown menu pops up on the left side if you click anywhere on left: 50 +


    const renderDropdown = () => {
        
        return (
            <div>
            <form id="charSelectionForm" >
            <select id="charSelectionMenu" onTouchEnd={setSelectedCoordinates} ref={dropdownRef}>
                <option>select pokemon</option>
                <option value='location1'>Rattata</option>
                <option value='location2'>Krabby</option>
                <option value='location3'>Kakuna</option>
            </select>
    </form>
    </div>
        )
    }

    return (
        <div className="backgroundDiv" ref={divRef} onClick={cycleClicked} >
            <img src={pokemonEasy}/>
            <div className="selectionArea" ref={selectRef} >
                {clicked ? renderDropdown() : null}
            </div>
        </div>
    )
}

export default Background1;