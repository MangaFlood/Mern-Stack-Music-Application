import React from 'react';
import {assets} from '../assets/frontend-assets/assets'
import { useNavigate } from 'react-router-dom';


function SideBar() {

    const navigate = useNavigate();




  return (
    <div className='w-[20%] h-full rounded pb-3 hidden lg:flex flex-col gap-5'>
        <div className='w-full px-2 py-3 bg-zinc-100 h-fit rounded-xl flex flex-col gap-2'>
            <div onClick={()=>navigate(`/`)} className='flex justify-normal p-3 gap-4 items-center bg-zinc-300 rounded-lg border-2 border-black border-dashed'>
                <div className='p-2 bg-zinc-600 rounded-full'><img  className='w-5' src={assets.home_icon} alt="" /></div>
                <h1 className='text-xl font-semibold text-zinc-900 tracking-tighter'>Home</h1>
            </div>
            <div className='flex justify-normal p-3 gap-4 items-center bg-zinc-300 rounded-lg border-2 border-black border-dashed'>
                <div className='p-2 bg-zinc-600 rounded-full'><img  className='w-5' src={assets.search_icon} alt="" /></div>
                <h1 className='text-xl font-semibold text-zinc-900 tracking-tighter'>Search</h1>
            </div>
        </div>
        <div className='h-full w-full px-3 py-3 bg-zinc-100 rounded-xl flex flex-col gap-5'>
            <div className='flex justify-between items-center'>
                <div className='flex justify-normal p-3 gap-2 items-center'>
                    <div className='p-2 bg-zinc-600 rounded-md'><img className='w-6' src={assets.stack_icon} alt="" /></div>
                    <h1 className='text-lg font-semibold tracking-tighter text-zinc-900 text-nowrap'>Your Library</h1>
                </div>
                <div className='flex justify-normal p-3 gap-4 items-center'>
                    <div className='p-2 bg-zinc-600 rounded-full'><img className='w-4' src={assets.arrow_icon} alt="" /></div>
                    <div className='p-2 bg-zinc-600 rounded-full'><img className='w-4' src={assets.plus_icon} alt="" /></div>
                </div>
            </div>
            <div className='h-full w-full flex flex-col gap-4 rounded-xl '>
                <div className='flex flex-col p-3 bg-zinc-300 rounded-xl border-2 border-black border-dashed'>
                    <h1 className='text-lg font-semibold text-black tracking-tighter'>Create your first playlist</h1>
                    <p className='text-md font-light text-black tracking-tighter'>it's easy we will help you</p>
                    <button className='px-4 py-3 mt-5 text-black bg-zinc-400 border-2 border-black border-dashed rounded-lg font-semibold text-sm'>Create Playlist</button>
                </div>
                <div className='flex flex-col p-3 bg-zinc-300 rounded-xl border-2 border-black border-dashed'>
                    <h1 className='text-lg font-semibold text-black tracking-tighter'>Let's findsome podcasts to follow</h1>
                    <p className='text-md font-light text-black tracking-tighter'>we'll keep you update on new episodes</p>
                    <button className='px-4 py-3 mt-5 text-black bg-zinc-400 border-2 border-black border-dashed rounded-lg font-semibold text-sm'>Browse Podcasts</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SideBar
