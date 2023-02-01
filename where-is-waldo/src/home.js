import React, { useEffect, useState } from "react";
import PokeMap from './img/pokemon3.jpg';

import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { firestore } from "./firebase";

// {doc.data().date.toDate().toISOString().slice(0, 10).split('-').reverse().join('/')}


async function fetchScoreboard() {
    try {
        const querySnapshot = await getDocs(collection(firestore, 'users'))
        const wholeData = []

        querySnapshot.forEach((doc) => {
            wholeData.push(doc.data())
        })

        const listItems = wholeData.map((data) => {
            <li>{data}</li>
        })
        return wholeData
    }
    catch(error) {
        console.log(`could not fetch scoreboard: ${error}`)
    }
}

function Render () {
    const [data, setData] = useState([])

    useEffect(() => {
        fetchScoreboard()
        .then(data => setData(data))
    }, [])

    const listData = data.map((element) => 
    <tr>
        1
        {element.username}
        {element.time}
        {element.date.toDate().toISOString().slice(0, 10).split('-').reverse().join('/')}
    </tr>
    )
    return (
        listData
    )

}
    

function Home() {

    return (
        <div className="homePage">
            <div className="homePageGrid">
                <img src={PokeMap} className='homePageImage'/>
                <img src={PokeMap} className='homePageImage'/>
                <img src={PokeMap} className='homePageImage'/>
                
                    <tr>
                        <th>place</th>
                        <th>name</th>
                        <th>time</th>
                        <th>date</th>
                    </tr>
                    <Render/>
                    
                    <tr>
                        <th>place</th>
                        <th>name</th>
                        <th>time</th>
                        <th>date</th>
                    </tr>



                <div className="map2Ranking">hello world</div>


                <div className="map3Ranking">hello world</div>
            </div>
        </div>
    )
}


export default Home;