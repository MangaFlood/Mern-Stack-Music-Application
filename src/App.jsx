import React from 'react'
import SideBar from './components/SideBar'
import Player from './components/Player';
import Page1 from './components/Page1'

function App() {
  return (
    <div className='w-full h-screen bg-black p-3'>
      <div className='w-full h-[90%] p-3 flex gap-3'>
        <SideBar />
        <Page1 />
      </div>
      <Player />
    </div>
  )
}

export default App;