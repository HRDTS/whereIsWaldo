import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'; // RRDv6  
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
import Professor from './img/professorOak.png'
import Ash from './img/ashKetchum.png'
import Brendan from './img/brendan.png'
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


async function run(username, time, whichDatabase) {
  try{
    const docRef = await addDoc(collection(firestore, whichDatabase), {
      username: username,
      time: time,
      date: new Date()
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
  }



function Parent(props) {

  const navigate = useNavigate(); // RRDv6
  const background = props.background
  const [map, selectedMap] = useState(background)



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
    const [selectedCoordinates, setSelectedCoordinates] = useState({x: 0, y: 0, characterClicked: '', characterSelected: ''})
    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [timerStarted, setTimerStarted] = useState(true)

    function mouseCoordinates (event) {
        //setTimer({...timer, timerStarted: true})
        let element = event.target.parentElement.className

        let rect = document.getElementsByClassName('backgroundDiv')[0].getBoundingClientRect()
        
        let xPos = Math.round(event.x - rect.left); // rect.left en rect.right extracts the height of other divs. This calculation gives the coordinates for the 'backgroundDiv' class only.
        let yPos = Math.round(event.y - rect.top);
        let xPosPercentage = Math.round(((event.x - rect.left) / rect.width) * 100) // top === yPos , left === xPos (in css language)
        let yPosPercentage = Math.round(((event.y - rect.top) / rect.height)*100) 

        if(element === 'backgroundDiv') {
            setSelectedCoordinates({...selectedCoordinates, x: xPosPercentage, y: yPosPercentage, characterClicked: ''}) // characterClicked should req. info from database.

            getDatabaseInfo().then(function(data) {
              for(let i in data) {
                if(xPosPercentage > data[i].x1 && xPosPercentage < data[i].x2
                  && yPosPercentage > data[i].y1 && yPosPercentage < data[i].y2) {
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
            setTimerStarted(false)
        }
        console.log(scoreTracker)
    }, [selectedCoordinates])

    useEffect(() => {
      if(!(selectedCoordinates.characterClicked === selectedCoordinates.characterSelected) && !(selectedCoordinates.characterClicked != ''))
      setSelectedCoordinates({...selectedCoordinates, characterSelected: ''})
    })

    function passSelectedCoordinates (event) {
        setSelectedCoordinates({...selectedCoordinates, characterSelected: event.target.value})
    }

    let timer;

    useEffect(() => {
      if(timerStarted) {
        timer = setInterval(() => {

          setSeconds(seconds+1)
  
          if(seconds===59) {
            setMinutes(minutes+1)
            setSeconds(0)
          }

        }, 1000)
  
        return () => clearInterval(timer)
      }

    }, [seconds])

    const submitScoreToFirestore = (e, time, whichDatabase) => {
      e.preventDefault();
      run(e.target[0].value, time, whichDatabase);
      navigate("/", { replace: true });
    }

    const submitScoreForm = (whichDatabase) => {
      const endTime = ((minutes * 60) + seconds)
      return (
        <div className="submitFormOuter">
          <div className="submitFormInner">

            <h1>your time is: {endTime} seconds</h1>
            <form  onSubmit={(e) => submitScoreToFirestore(e, endTime, whichDatabase)}>
              <label>your name:</label>
              <input className="submitForm"></input>
              <div>
              <button type="submit">Submit score</button>
                <Link to='/'><button type="button">Don't submit and return</button></Link>
              </div>

            </form>

          </div>
        </div>

      )
    }


    const backgroundSelection = (index) => {
      let array = [
      <Background1 selectedCoordinates={selectedCoordinates} setSelectedCoordinates={passSelectedCoordinates}/>, 
      <Background2 selectedCoordinates={selectedCoordinates} setSelectedCoordinates={passSelectedCoordinates}/>, 
      <Background3 selectedCoordinates={selectedCoordinates} setSelectedCoordinates={passSelectedCoordinates}/>]

      return (
        array[index]
      )
    }

    const navbarCharacterSelection = (index) => {
      let array = [
        {pokemon1: Rattata, pokemon2: Krabby, pokemon3: Kakuna, trainer: Professor },
        {pokemon1: Tangela, pokemon2: Scyther, pokemon3:Diglet, trainer: Ash},
        {pokemon1: Stanler, pokemon2: Bellosom, pokemon3: Machoke, trainer: Brendan}
      ]
      return array[index]
    }

    const firebaseSelection = (index) => {
      let array = [
        'users',
        'users2',
        'users3'
      ]

      return (
        array[index]
      )
    }

    return (
        <div className="parentDiv" >
            {!timerStarted ? submitScoreForm(firebaseSelection(background)) : null}
            <Navbar pokemon1={navbarCharacterSelection(background).pokemon1} pokemon2={navbarCharacterSelection(background).pokemon2} pokemon3={navbarCharacterSelection(background).pokemon3} trainer={navbarCharacterSelection(background).trainer} scoreTracker={scoreTracker} minutes={minutes} seconds={seconds}/>
            {backgroundSelection(background)}
        </div>
    )
}

export default Parent