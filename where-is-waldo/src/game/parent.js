import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'; // RRDv6  
import Background1 from "./background1";
import Background2 from "./background2";
import Background3 from "./background3";
import Navbar from "./navbar";
import Tangela from '../img/Character.Tangela.png'
import Diglet from '../img/Character.Diglet.png'
import Scyther from '../img/Character.Scyther.png'
import Rattata from '../img/Character.Rattata.png'
import Krabby from '../img/Character.Krabby.png'
import Kakuna from '../img/Character.Kakuna.png'
import Stanler from '../img/Character.Stanler.png'
import Bellosom from '../img/Character.Bellosom.png'
import Machoke from '../img/Character.Machoke.png'
import Professor from '../img/professorOak.png'
import Ash from '../img/ashKetchum.png'
import Brendan from '../img/brendan.png'
import { db, firestore } from '../index/firebase.js'
import { getDatabase, ref, set, onValue, get } from "firebase/database";
import { collection, addDoc } from "firebase/firestore";

/*
this parent component is the central part that allows the game to function properly.
It does the following things:
- Accept [X, Y] coordinates from it's components.
- Check this [X, Y] coordinates with the [X, Y] coordinates from the database
- check if the [X, Y] coordinates selected from the user align with database [X, Y] and then update the state for the pokemon that is selected from 'false' to 'true'
- start the timer when user enters the game
- submit the score and the time to the high score database if user chooses to submit score.
*/


async function run(username, time, whichDatabase) { // this function tries to access high score database and submit with the inputs stated in the argument.
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

  // There are three levels (easy, medium and hard), which means there are three databases with each their own [x,y] coordinates.  
      const usersRefEasy = ref(db, 'usersv2Easy');
      const usersRef = ref(db, 'usersv2');
      const usersRefHard = ref(db, 'usersv2Hard');
      const usersRefArray = [ // I use an index to determine which database to choose. So if user chooses 'easy', we need to use the 'usersRefEasy' database, by using index 0.
        usersRefEasy,
        usersRef,
        usersRefHard
      ]

      function getDatabaseInfo () { // this function is called each time the user clicks on the screen and selects a pokemon. The [x,y] from user is checked with [x,y] from database.
        return new Promise((resolve, reject) => {
            onValue(usersRefArray[map], (snapshot) => { 
                const data = snapshot.val();
                resolve(data)
              })
        })
      } 
      
    


    const divRef = useRef();

    const [scoreTracker, setScoreTracker] = useState({location1: false, location2: false, location3: false}) // I keep track of the pokemons that the user found on the map. Initially everything is false, if user found a pokemon, it will turn true
    const [selectedCoordinates, setSelectedCoordinates] = useState({x: 0, y: 0, characterClicked: '', characterSelected: ''}) // The [x,y] coordinates are inserted in this state, along with the 'characterSelected'. With this info, I can check in the database if the [x,y] alligns with the respective pokemon.
    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [timerStarted, setTimerStarted] = useState(true)

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

            getDatabaseInfo().then(function(data) { // after I get database info, I check if the [x,y] coordinates from the user are INBETWEEN the [x,y] stated in the database. So basically the user has to click inside the square.
              for(let i in data) {
                if(xPosPercentage > data[i].x1 && xPosPercentage < data[i].x2
                  && yPosPercentage > data[i].y1 && yPosPercentage < data[i].y2) {
                    setSelectedCoordinates({...selectedCoordinates, x: xPosPercentage, y: yPosPercentage, characterClicked: i}) // the 'i' here respresent the pokemon name.
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
        if(selectedCoordinates.characterClicked === selectedCoordinates.characterSelected && selectedCoordinates.characterClicked != '') {// the initial state for characterSelected and characterClicked is '', so I make sure that doesn't cause any bugs.
            console.log('MATCH!')
            let fixLocation = selectedCoordinates.characterSelected
            let copyOfScoreTracker = scoreTracker
            copyOfScoreTracker[fixLocation] = true
            setScoreTracker({...scoreTracker, copyOfScoreTracker})
        } 
        if(scoreTracker.location1 == true && scoreTracker.location2 == true && scoreTracker.location3) { // Check if all pokemons are true, if so, stop timer. When the timer is stopped, a submit form is called. So this submit form is conditionally rendered
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
      navigate("/", { replace: true }); // go back to the home page when score is submitted.
    }

    const submitScoreForm = (whichDatabase) => {
      const endTime = ((minutes * 60) + seconds)
      return (
        <div className="submitFormOuter">
          <div className="submitFormInner">

            <h1>your time is: {endTime} seconds</h1>
            <form  onSubmit={(e) => submitScoreToFirestore(e, endTime, whichDatabase)}>
              <label>your name:</label>
              <input className="submitForm" maxLength={50}></input>
              <div>
              <button type="submit">Submit score</button>
                <Link to='/'><button type="button">Don't submit and return</button></Link>
              </div>

            </form>

          </div>
        </div>

      )
    }

// Each level (easy, medium and hard) has their own individual background, navigation bar and database
// I created this method where I can select the background, navigation bar and database based on an index number.
// I pass an index number prop to this parent.js file from the routeSwitch.js file. This index number determines what to render.

// The code below is for the background.
    const backgroundSelection = (index) => {  
      let array = [
      <Background1 selectedCoordinates={selectedCoordinates} setSelectedCoordinates={passSelectedCoordinates}/>, 
      <Background2 selectedCoordinates={selectedCoordinates} setSelectedCoordinates={passSelectedCoordinates}/>, 
      <Background3 selectedCoordinates={selectedCoordinates} setSelectedCoordinates={passSelectedCoordinates}/>]

      return (
        array[index]
      )
    }

    // This code is for the navigation bar.
    const navbarCharacterSelection = (index) => {
      let array = [
        {pokemon1: Rattata, pokemon2: Krabby, pokemon3: Kakuna, trainer: Professor },
        {pokemon1: Tangela, pokemon2: Scyther, pokemon3:Diglet, trainer: Ash},
        {pokemon1: Stanler, pokemon2: Bellosom, pokemon3: Machoke, trainer: Brendan}
      ]
      return array[index]
    }

    //This code is for the database
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