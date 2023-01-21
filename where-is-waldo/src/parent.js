import React, { useEffect, useRef, useState } from "react";
import Background from "./background";

function Parent() {

    const divRef = useRef();

    const [coordinates, setCoordinates] = useState([ // character length needs to be the same, so the four X,Y coordinates (corners) can be calculated equally.
    {character: 'Waldo', x: '', y: ''},
    {character: 'Odlaw', x: '', y: ''},
    {character: 'Wenda', x: '', y: ''}])

    const [selectedCoordinates, setSelectedCoordinates] = useState({x: 0, y: 0})

    const [characters, setCharacters] = useState(['Waldo', 'Odlaw', 'Wende'])

    function mouseCoordinates (event) { // 80X and 80Y select box
        let element = event.target.parentElement.className
        let rect = event.target.getBoundingClientRect()
        let xPos = Math.round(event.clientX - rect.left);
        let yPos = Math.round(event.clientY - rect.top);

        let leftUpperCorner = [xPos - 40, yPos - 40]
        let leftLowerCorner = [xPos - 40, yPos + 40]
        let rightUpperCorner = [xPos + 40, yPos - 40]
        let rightLowerCorner = [xPos + 40, yPos + 40]
        console.log(leftUpperCorner, leftLowerCorner, rightUpperCorner, rightLowerCorner)
        if(element === 'backgroundDiv' ) {
            setSelectedCoordinates({x: xPos, y: yPos})
            divRef.current.innerHTML = "Coordinate (X) : " + selectedCoordinates.x +
            " " + "pixels <br>Coordinate (Y) : " + selectedCoordinates.y +
             " " + "pixels";
        } else {
            divRef.current.innerHTML = "Coordinate (X) : " + 0 +
            " " + "pixels <br>Coordinate (Y) : " + 0 +
             " " + "pixels";
        }
    }

    document.onclick = mouseCoordinates

    useEffect(()=> {
        console.log(selectedCoordinates)
    }, [selectedCoordinates])

    return (
        <div className="parentDiv">
            <h1>Where is Waldo?</h1>
            <h1 id="output" ref={divRef}></h1>
            <Background/>
        </div>
    )
}

export default Parent