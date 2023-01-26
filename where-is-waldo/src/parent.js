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
        //let rect = event.target.getBoundingClientRect()

        let rect = document.getElementsByClassName('backgroundDiv')[0].getBoundingClientRect()
        
        let xPos = Math.round(event.x - rect.left);
        let yPos = Math.round(event.y - rect.top);
        if(element === 'outerLayer' || element === 'backgroundDiv') {
            setSelectedCoordinates({...selectedCoordinates, x: xPos, y: yPos, characterClicked: event.target.className})
            console.log(event.target.className)
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
            setScoreTracker(copyOfScoreTracker)
        }
        if(scoreTracker.location1 == true && scoreTracker.location2 == true && scoreTracker.location3) {
            alert('we got a winner')
        }
    }, [selectedCoordinates])

    function passSelectedCoordinates (event) {
        setSelectedCoordinates({...selectedCoordinates, characterSelected: event.target.value})
    }

    return (
        <div className="parentDiv">
            <Navbar pokemon1={Tangela} pokemon2={Scyther} pokemon3={Diglet} scoreTracker={scoreTracker}/>
            <button onClick={() => console.log(scoreTracker)}>console button</button>
            <h1 id="output" ref={divRef}></h1>
            <Background selectedCoordinates={selectedCoordinates} setSelectedCoordinates={passSelectedCoordinates}/>
        </div>
    )
}

export default Parent