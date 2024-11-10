import React from 'react';
import { albumsData, assets, songsData } from '../assets/frontend-assets/assets';


function Player() {
  return (
    <div className='w-full h-[10%] bg-zinc-100 rounded-xl flex p-2'>
        <div className='bg-zinc-300 border-2 border-zinc-900 border-dashed w-[17%] hidden lg:flex gap-3 rounded-lg py-2 px-4'>
            <img className='rounded-full' src={albumsData[0].image} alt="" />
            <div>
                <h1 className='font-semibold text-sm tracking-tighter'>{albumsData[0].name}</h1>
                <p className='text-sm tracking-tighter text-zinc-600'>{albumsData[0].desc.slice(0, 16)}............</p>
            </div>
        </div>
        <div className='flex flex-col m-auto items-center gap-1 bg-zinc-400 p-3 h-full rounded-lg border-2 border-black border-dashed'>
            <div className='flex gap-3'>
                <div className='p-2 bg-zinc-700 rounded-full'><img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt="" /></div>
                <div className='p-2 bg-zinc-700 rounded-full'><img className='w-4 cursor-pointer' src={assets.prev_icon} alt="" /></div>
                <div className='p-2 bg-zinc-700 rounded-full'><img className='w-4 cursor-pointer' src={assets.play_icon} alt="" /></div>
                <div className='p-2 bg-zinc-700 rounded-full'><img className='w-4 cursor-pointer' src={assets.next_icon} alt="" /></div>
                <div className='p-2 bg-zinc-700 rounded-full'><img className='w-4 cursor-pointer' src={assets.loop_icon} alt="" /></div>
            </div>
            <div className='flex items-center gap-5'>
                <p>0:00</p>
                <div className='w-[60vw] max-w-[500px] bg-zinc-600 rounded-full cursor-pointer'>
                    <hr className='h-1 border-none w-0 bg-white rounded-full' />
                </div>
                <p>3:20</p>
            </div>
        </div>
        <div className='bg-zinc-300 border-2 border-zinc-900 border-dashed w-[17%] hidden lg:flex gap-3 rounded-lg py-2 px-4'>

        </div>
    </div>
  )
}

export default Player