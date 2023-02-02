import React, { useEffect, useState } from "react";
import PokeMap from './img/pokemon3.jpg';
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { firestore } from "./firebase";

async function fetchScoreboard() {
    try {
        const querySnapshot = await getDocs(collection(firestore, 'users3'))
        const wholeData = []

        querySnapshot.forEach((doc) => {
            wholeData.push(doc.data())
        })

        return wholeData
    }
    catch(error) {
        console.log(`could not fetch scoreboard: ${error}`)
    }
}

function RenderScoreboard3 () {
    const [data, setData] = useState([])

    useEffect(() => {
        fetchScoreboard()
        .then(data => data.sort((a,b) => parseFloat(a.time) - parseFloat(b.time)))
        .then(data => setData(data))
    }, [])

    const listDataUsername = data.map((element) => 
    <tr>
        {element.username}
    </tr>)

    const listDataTime = data.map((element) => 
    <tr>
    {element.time}
    </tr>)

    const listDataDate = data.map((element) => 
    <tr>
    {element.date.toDate().toISOString().slice(0, 10).split('-').reverse().join('/')}
    </tr>)

const listDataPlace = data.map((element, index) => 
<tr>
{index + 1}
</tr>)

    return (
        <div>
        <tr>
            <th>place</th>
            <th>name</th>
            <th>time</th>
            <th>date</th>
        </tr>
        <tr>
            <td>{listDataPlace}</td>
            <td>{listDataUsername}</td>
            <td>{listDataTime}</td>
            <td>{listDataDate}</td>
        </tr>
        </div>


    )
}

export default RenderScoreboard3;