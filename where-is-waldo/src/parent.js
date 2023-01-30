import React, { useEffect, useRef, useState } from "react";
import Background from "./background";
import Navbar from "./navbar";
import Tangela from './img/Character.Tangela.png'
import Diglet from './img/Character.Diglet.png'
import Scyther from './img/Character.Scyther.png'
import { db } from './firebase.js'
import { getDatabase, ref, set, onValue, get } from "firebase/database";


/*
        function writeUserData(userId, y1, y2, x1, x2) {
        const db = getDatabase();
        set(ref(db, 'usersv2/' + userId), {
            y1: y1,
            y2: y2,
            x1 : x1,
            x2: x2
        });
    }

      writeUserData('location2', 65, 78, 0, 25 )
      writeUserData('location3', 24, 27, 82, 86 )
      writeUserData('location1', 72, 80, 85, 97 ) 
*/

      /*get(usersRef)
      .then((snapshot) => {
        const data = snapshot.val()
        console.log(data);
      })
      .catch((err) => {
        console.log(err)
      })*/

function Parent() {
      const usersRef = ref(db, 'usersv2');

      function getDatabaseInfo () {
        return new Promise((resolve, reject) => {
            onValue(usersRef, (snapshot) => { 
                const data = snapshot.val();
                resolve(data)
              })
        })
      } 
    
    const divRef = useRef();

    const [scoreTracker, setScoreTracker] = useState({location1: false, location2: false, location3: false})
    const [selectedCoordinates, setSelectedCoordinates] = useState({x: 0, y: 0, characterClicked: '', characterSelected: ''})

    function mouseCoordinates (event) {
        let element = event.target.parentElement.className
        //let rect = event.target.getBoundingClientRect()

        let rect = document.getElementsByClassName('backgroundDiv')[0].getBoundingClientRect()
        
        let xPos = Math.round(event.x - rect.left);
        let yPos = Math.round(event.y - rect.top);
        let xPosPercentage = Math.round(((event.x - rect.left) / rect.width) * 100) // top === yPos , left === xPos (in css language)
        let yPosPercentage = Math.round(((event.y - rect.top) / rect.height)*100) 

        if(element === 'backgroundDiv') {
            setSelectedCoordinates({...selectedCoordinates, x: xPosPercentage, y: yPosPercentage, characterClicked: ''}) // characterClicked should req. info from database.

            getDatabaseInfo().then(function(data) {
              for(let i in data) {
                if(xPosPercentage > data[i].x1 && xPosPercentage < data[i].x2
                  && yPosPercentage > data[i].y1 && yPosPercentage < data[i].y2) {
                    console.log('YEAASSHHHHH')
                    setSelectedCoordinates({...selectedCoordinates, characterClicked: i})
                    break
                }
              }
            })


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
            <button onClick={() => console.log(scoreTracker)}>console button</button>
            <h1 id="output" ref={divRef}></h1>
            <Background selectedCoordinates={selectedCoordinates} setSelectedCoordinates={passSelectedCoordinates}/>
        </div>
    )
}

export default Parent