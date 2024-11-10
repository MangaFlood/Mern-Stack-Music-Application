import React from 'react'
import { assets } from '../assets/frontend-assets/assets'

function NavBar() {
  return (
    <div className='w-full flex flex-col gap-3 p-3 bg-zinc-300 rounded-lg border-2 border-black border-dashed'>
      <div className='w-full flex justify-between item-center'>
        <div className='flex gap-2'>
          <div className='p-2 bg-zinc-600 rounded-full'><img className='w-5' src={assets.arrow_left} alt="" /></div>
          <div className='p-2 bg-zinc-600 rounded-full'><img className='w-5' src={assets.arrow_right} alt="" /></div>
        </div>
        <div className='flex gap-2 items-center'>
          <button className='px-4 py-1 text-white bg-black rounded-full'>Explore Premium</button>
          <button className='px-4 py-1 text-white bg-black rounded-full'>Install App</button>
          <button className='p-1 text-white bg-indigo-500 rounded-full w-8 h-8 flex justify-center items-center'>D</button>
        </div>
      </div>
      <div className='flex items-center gap-3 justify-center bg-zinc-50 rounded-full p-2'>
      <button className='px-4 py-1 text-black bg-zinc-400 border-2 border-black border-dashed rounded-lg'>All</button>
      <button className='px-4 py-1 text-black bg-zinc-400 border-2 border-black border-dashed rounded-lg'>Music</button>
      <button className='px-4 py-1 text-black bg-zinc-400 border-2 border-black border-dashed rounded-lg'>Podcasts</button>
      </div>
    </div>
  )
}

export default NavBar
