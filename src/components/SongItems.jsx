import React, { useContext } from 'react'
import { assets } from '../assets/frontend-assets/assets';
import { PlayerContext } from '../context/PlayerContext';

function SongItems({musicInfo}) {


const {image, name, desc, id, } = musicInfo;
const {playById} = useContext(PlayerContext);



  return (
    <div style={{transitionDuration: ".2s", transitionTimingFunction: 'ease-in-out'}} className='min-w-[200px] flex- flex-col gap-3 p-3 rounded-lg bg-zinc-300 cursor-pointer hover:bg-black hover:text-white border-2 border-black border-dashed relative drop-shadow-[2px_2px_5px_rgba(0,0,0,0.35)] hover:scale-[1.03] hover:drop-shadow-[0px_0px_5px_rgba(0,0,0,0.95)]'>
      <div onClick={() => playById(id)} style={{transitionDuration: ".2s", transitionTimingFunction: 'ease-in-out'}} className='p-[8%] left-[70%] top-[60%] bg-yellow-500 rounded-full absolute hover:scale-125 drop-shadow-[2px_2px_5px_rgba(0,0,0,0.35)] hover:drop-shadow-[0px_0px_5px_rgba(0,0,0,0.95)]'>
        <img className='w-6' src={assets.play_icon} alt="" />
      </div>
      <div className='w-full'>
        <img className='w-full object-cover rounded-xl' src={image} alt="" />
      </div>
      <div className='p-3'>
        <h1 className='tracking-tighter font-semibold pb-1'>{name}</h1>
        <p className='tracking-tighter opacity-[60%] text-sm leading-[1] pb-1'>{desc}</p>
      </div>
    </div>
  )
}

export default SongItems
