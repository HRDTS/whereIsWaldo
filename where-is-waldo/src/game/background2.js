import React, { useEffect, useState, useRef } from "react";
import pokemonMedium from '../img/pokemonMedium.jpg'

// comments on background1.js apply to this component.

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
            selectRef.current.style.left = `calc(${one} - ${two})` // this little calculation is neccessary to prevent the select menu to go out of bounds.
        } // Here is the idea: when the user clicks on the screen, the dropdown menu pops up and the cursor will by default be positioned on the left side of the dropdown menu. 
    }) // when the user clicks close to the right edge of the screen, the dropdown menu goes out of bounds, but with this code the dropdown menu pops up on the left side if you click anywhere on left: 50 +


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