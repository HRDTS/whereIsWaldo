import React, { useEffect, useRef, useState } from "react";
import Background1 from "./background1";
import Background2 from "./background2";
import Background3 from "./background3";
import Navbar from "./navbar";
import Tangela from './img/Character.Tangela.png'
import Diglet from './img/Character.Diglet.png'
import Scyther from './img/Character.Scyther.png'
import Rattata from './img/Character.Rattata.png'
import Krabby from './img/Character.Krabby.png'
import Kakuna from './img/Character.Kakuna.png'
import Stanler from './img/Character.Stanler.png'
import Bellosom from './img/Character.Bellosom.png'
import Machoke from './img/Character.Machoke.png'
import { db, firestore } from './firebase.js'
import { getDatabase, ref, set, onValue, get } from "firebase/database";
import { collection, addDoc } from "firebase/firestore";


/*
        function writeUserData(userId, y1, y2, x1, x2) {
        const db = getDatabase();
        set(ref(db, 'usersv2Easy/' + userId), {
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


async function run(username, time) {
  try{
    const docRef = await addDoc(collection(firestore, "users"), {
      username: username,
      time: time,
      date: new Date()
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
  }



function Parent() {

  const [map, selectedMap] = useState(0)

  const usersRefEasy = ref(db, 'usersv2Easy');
      const usersRef = ref(db, 'usersv2');
      const usersRefHard = ref(db, 'usersv2Hard');
      const usersRefArray = [
        usersRefEasy,
        usersRef,
        usersRefHard
      ]

      function getDatabaseInfo () {
        return new Promise((resolve, reject) => {
            onValue(usersRefArray[map], (snapshot) => { 
                const data = snapshot.val();
                resolve(data)
              })
        })
      } 
      
    


    const divRef = useRef();

    const [scoreTracker, setScoreTracker] = useState({location1: false, location2: false, location3: false})
    const [gameStillRunning, setGameStillRunning] = useState(true)
    const [selectedCoordinates, setSelectedCoordinates] = useState({x: 0, y: 0, characterClicked: '', characterSelected: ''})
    const [timer, setTimer] = useState({timerStarted: true, seconds: 0})

    function mouseCoordinates (event) {
        //setTimer({...timer, timerStarted: true})
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
                    setSelectedCoordinates({...selectedCoordinates, x: xPosPercentage, y: yPosPercentage, characterClicked: i})
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
            setTimer({...timer, timerStarted: false})
        }
        console.log(scoreTracker)
    }, [selectedCoordinates])

    function passSelectedCoordinates (event) {
        setSelectedCoordinates({...selectedCoordinates, characterSelected: event.target.value})
    }


    // TIMER - place your timer code here
    const startTimer = () => {
      if(timer.timerStarted)
      setTimer({...timer, seconds: timer.seconds + 1})
    }

    useEffect(() => {
      const interval = setInterval(() => startTimer(), 1000);

      return () => clearInterval(interval)
    })
    //

    // FORM - place your form code here

    const submitScoreToFirestore = (e) => {
      e.preventDefault();
      run(e.target[0].value, timer.seconds)
    }

    const submitScoreForm = () => {
      const endTime = timer.seconds
      return (
        <div>
          <h1>your time is: {endTime}</h1>
          <form onSubmit={submitScoreToFirestore}>
            <label>your name:</label>
            <input></input>
            <button>Submit score</button>
          </form>
        </div>
      )
    }

    //


    return (
        <div className="parentDiv" >
            {timer.timerStarted ? submitScoreForm() : null}
            <Navbar pokemon1={Tangela} pokemon2={Scyther} pokemon3={Diglet} scoreTracker={scoreTracker}/>
            <Background1 selectedCoordinates={selectedCoordinates} setSelectedCoordinates={passSelectedCoordinates}/>
        </div>
    )
}

export default Parent