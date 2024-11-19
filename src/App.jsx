import React, { useContext } from 'react'
import SideBar from './components/SideBar'
import Player from './components/Player';
import Page1 from './components/Page1'
import { PlayerContext } from './context/PlayerContext';

function App() {
  const {audioRef, track} = useContext(PlayerContext);


  return (
    <div className='w-full h-screen bg-black p-3'>
      <div className='w-full h-[90%] p-3 flex gap-3'>
        <SideBar />
        <Page1 />
      </div>
      <Player />
      <audio ref={audioRef} preload='auto' src={track.file} ></audio>
    </div>
  )
}

export default App;