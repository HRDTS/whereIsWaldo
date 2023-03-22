import React, { useEffect, useState } from "react";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { firestore } from "../index/firebase";
import { tab } from "@testing-library/user-event/dist/tab";

async function fetchScoreboard() {
    try {
        const querySnapshot = await getDocs(collection(firestore, 'users'))
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

function RenderScoreboard1 () {
    const [data, setData] = useState([])
    const [table, setTable] = useState()

    useEffect(() => { // sort the users based on their time.
        fetchScoreboard()
        .then(data => data.sort((a,b) => parseFloat(a.time) - parseFloat(b.time)))
        .then(data => setData(data))
        
    }, [])

    useEffect(() => {

        const tableePattern = data.map((element, index) => 
            <tr key={index}>
                <td className="place">{index + 1}</td>
                <td className="username">{element.username}</td>
                <td className="time">{element.time}</td>
                <td className="date">{element.date.toDate().toISOString().slice(0, 10).split('-').reverse().join('/')}</td>
            </tr>
        )
        setTable(tableePattern)
    }, [data])


    return (
        <table className="table">
            <tbody>
            <tr>
                <th>place</th>
                <th>name</th>
                <th>time</th>
                <th>date</th>
            </tr>
            </tbody>
            <tbody>
                {table}
            </tbody>
        </table>
    )
}

export default RenderScoreboard1;