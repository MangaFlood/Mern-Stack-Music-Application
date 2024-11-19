import React from 'react'
import NavBar from './NavBar'
import { albumsData, songsData } from '../assets/frontend-assets/assets'
import Album from './Album'
import SongItems from './SongItems'

function DisplayHome() {
  return (
    <div className='w-full h-full relative'>
      <NavBar />
      <div>
        <div className='w-full'>
          
        </div>
        <div className='Album_Section p-3'>
          <h1 className='pt-4 px-3 text-2xl tracking-tight font-bold opacity-[75%]'>Featured Charts</h1>
          <div className='px-4 py-5 flex gap-4 overflow-auto '>
            {albumsData.map((items, index)=>(
              <Album
                key={index}
                musicData = {items}
              />
            ))}
          </div>
        </div>
        <div className='Music_Section p-3'>
          <h1 className='pt-4 px-3 text-2xl tracking-tight font-bold opacity-[75%]'>Today's Biggest Hits</h1>
          <div className='px-4 py-5 flex gap-4 overflow-auto '>
            {songsData.map((items, index)=>(
              <SongItems
                key={index}
                musicInfo={items}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DisplayHome