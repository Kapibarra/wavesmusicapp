import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay , faAngleLeft , faAngleRight} from '@fortawesome/free-solid-svg-icons'

const Player = () => {
    return (
        <div className="player">
<div className="time-controll">
    <p>Start Time</p>
    <input type="range"></input>
    <p> End time</p>
</div>
<div className="play-controll">
<FontAwesomeIcon className="skip-back" icon={faAngleLeft} size="2x"/>
<FontAwesomeIcon className="play" icon={faPlay} size="2x"/>
<FontAwesomeIcon className="skip-forward" icon={faAngleRight} size="2x"/>
</div>
        </div>
    )
}

export default Player