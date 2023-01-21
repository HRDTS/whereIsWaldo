import React from "react";
import WIW from './img/whereIsWaldoBackground.jpg'
import Odlaw from './img/Character.Odlaw.webp'

function Background() {

    return (
        <div className="backgroundDiv">
            <img className="backgroundImage" src={WIW}/>
            <img className="odlaw" src={Odlaw}/>
        </div>

    )
}

export default Background;