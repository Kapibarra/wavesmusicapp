import React from 'react'

const LibrarySong = () => {
    return (
        <div className="librarys-song-container">
<img src={currentSong.cover} alt={currentSong.name}></img>
<h3>{currentSong.name}</h3>
<h4>{currentSong.artist}</h4>
        </div>
    )
}

export default LibrarySong