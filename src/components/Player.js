import React from 'react'

const Player = () => {
    return (
        <div className="player">
<div className="time-controll">
    <p>Start Time</p>
    <input type="range"></input>
    <p> End time</p>
</div>
<div className="play-controll"></div>
        </div>
    )
}

export default Player