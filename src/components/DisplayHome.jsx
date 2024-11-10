import React from 'react'
import NavBar from './NavBar'
import { albumsData } from '../assets/frontend-assets/assets'
import Album from './Album'

function DisplayHome() {
  return (
    <div className='w-full h-full p-3'>
      <NavBar />
      <div className='p-3 flex gap-4'>
        {albumsData.map((items, index)=>(
          <Album
            key={index}
            musicData = {items}
          />
        ))}
      </div>
    </div>
  )
}

export default DisplayHome
