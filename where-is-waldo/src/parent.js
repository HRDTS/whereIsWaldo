import React, { useEffect, useRef, useState } from "react";
import Background from "./background";
import Navbar from "./navbar";
import Tangela from './img/Character.Tangela.png'
import Diglet from './img/Character.Diglet.png'
import Scyther from './img/Character.Scyther.png'

function Parent() {

    const divRef = useRef();

    const [scoreTracker, setScoreTracker] = useState({location1: false, location2: false, location3: false})
    const [selectedCoordinates, setSelectedCoordinates] = useState({x: 0, y: 0, characterClicked: '', characterSelected: ''})

    function mouseCoordinates (event) {
        let element = event.target.parentElement.className

        let rect = document.getElementsByClassName('backgroundDiv')[0].getBoundingClientRect()
        
        let xPos = Math.round(event.x - rect.left); // rect.left en rect.right extracts the height of other divs. This calculation gives the coordinates for the 'backgroundDiv' class only.
        let yPos = Math.round(event.y - rect.top);
        let xPosPercentage = Math.round(((event.x - rect.left) / rect.width) * 100) // top === yPos , left === xPos (in css language)
        let yPosPercentage = Math.round(((event.y - rect.top) / rect.height)*100) 

        if(element === 'backgroundDiv') {
            setSelectedCoordinates({...selectedCoordinates, x: yPosPercentage, y: xPosPercentage, characterClicked: event.target.className}) // characterClicked should req. info from database.
            console.log(yPosPercentage)
            console.log(xPosPercentage)
        }
    }

    document.onclick = mouseCoordinates

    useEffect(()=> {
        console.log(selectedCoordinates)
        if(selectedCoordinates.characterClicked === selectedCoordinates.characterSelected && selectedCoordinates.characterClicked != '') {
            console.log('MATCH!')
            let fixLocation = selectedCoordinates.characterSelected
            let copyOfScoreTracker = scoreTracker
            copyOfScoreTracker[fixLocation] = true
            setScoreTracker({...scoreTracker, copyOfScoreTracker})
        }
        if(scoreTracker.location1 == true && scoreTracker.location2 == true && scoreTracker.location3) {
            console.log('we got a winner')
        }
        console.log(scoreTracker)
    }, [selectedCoordinates])

    function passSelectedCoordinates (event) {
        setSelectedCoordinates({...selectedCoordinates, characterSelected: event.target.value})
    }

    return (
        <div className="parentDiv">
            <Navbar pokemon1={Tangela} pokemon2={Scyther} pokemon3={Diglet} scoreTracker={scoreTracker}/>
            <Background selectedCoordinates={selectedCoordinates} setSelectedCoordinates={passSelectedCoordinates}/>
        </div>
    )
}

export default Parent