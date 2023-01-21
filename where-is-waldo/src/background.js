import React from "react";
import WIW from './img/whereIsWaldoBackground.jpg'
import Odlaw from './img/Character.Odlaw.webp'
import Charmander from './img/Character.Charmander.png'
import Pikachu from './img/Character.Pikachu2.png'
import Psyduck from './img/Character.Psyduck2.png'

function Background() {

    return (
        <div className="backgroundDiv">
            <img className="backgroundImage" src={WIW}/>
            <img className="charmander" src={Charmander}/>
            <img className="pikachu" src={Pikachu}/>
            <img className="psyduck" src={Psyduck}/>
        </div>

    )
}

export default Background;