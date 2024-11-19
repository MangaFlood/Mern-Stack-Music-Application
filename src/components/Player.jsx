import React, { useContext, useEffect } from 'react';
import { albumsData, assets, songsData } from '../assets/frontend-assets/assets';
import { PlayerContext } from '../context/PlayerContext';


function Player() {

    const {seekbg, seekBar, playing, start, stop, track, time, setTime, audioRef, previous, next, suffle, loop, sideBrPlay} = useContext(PlayerContext)

    useEffect(() => {
        setTimeout(() => {
            audioRef.current.ontimeupdate = () => {
                seekBar.current.style.width = (audioRef.current.currentTime / audioRef.current.duration) * 100 + "%";
                setTime({
                    currentTime: {
                        seconds: Math.floor(audioRef.current.currentTime%60),
                        minutes: Math.floor(audioRef.current.currentTime/60)
                    },
                    totalTime: {
                        seconds: Math.floor(audioRef.current.duration%60),
                        minutes: Math.floor(audioRef.current.duration/60)
                    }
                })
            }
        })
    },[audioRef])




  return (
    <div className='w-full h-[10%] bg-zinc-100 rounded-xl flex p-2'>
        <div className='bg-zinc-300 border-2 border-zinc-900 border-dashed w-[17%] hidden lg:flex gap-3 rounded-lg py-2 px-4'>
            <img className='rounded-full' src={track.image} alt="" />
            <div>
                <h1 className='font-semibold text-sm tracking-tighter'>{track.name}</h1>
                <p className='text-sm tracking-tighter text-zinc-600'>{track.desc.slice(0, 16)}............</p>
            </div>
        </div>
        <div className='flex flex-col m-auto items-center gap-1 bg-zinc-400 p-3 h-full rounded-lg border-2 border-black border-dashed'>
            <div className='flex gap-3'>
                <div onClick={()=>suffle()} style={{transitionDuration: ".3s"}} className='p-2 bg-zinc-700 rounded-full drop-shadow-[2px_2px_5px_rgba(0,0,0,0.35)] hover:scale-125 hover:drop-shadow-[0px_0px_5px_rgba(0,0,0,0.95) hover:bg-yellow-500'><img className='w-4 cursor-pointer ' src={assets.shuffle_icon} alt="" /></div>
                <div onClick={()=>previous()} style={{transitionDuration: ".3s"}} className='p-2 bg-zinc-700 rounded-full drop-shadow-[2px_2px_5px_rgba(0,0,0,0.35)] hover:scale-125 hover:drop-shadow-[0px_0px_5px_rgba(0,0,0,0.95) hover:bg-yellow-500'><img className='w-4 cursor-pointer ' src={assets.prev_icon} alt="" /></div>
                {
                    playing ? (
                        <div onClick={stop} style={{transitionDuration: ".3s"}} className='p-2 bg-zinc-700 rounded-full drop-shadow-[2px_2px_5px_rgba(0,0,0,0.35)] hover:scale-125 hover:drop-shadow-[0px_0px_5px_rgba(0,0,0,0.95) hover:bg-yellow-500'><img className='w-4 cursor-pointer ' src={assets.pause_icon} alt="" /></div>
                    ) : (
                        <div onClick={start} style={{transitionDuration: ".3s"}} className='p-2 bg-zinc-700 rounded-full drop-shadow-[2px_2px_5px_rgba(0,0,0,0.35)] hover:scale-125 hover:drop-shadow-[0px_0px_5px_rgba(0,0,0,0.95) hover:bg-yellow-500'><img className='w-4 cursor-pointer ' src={assets.play_icon} alt="" /></div>
                    )
                }
                <div onClick={()=>next()} style={{transitionDuration: ".3s"}} className='p-2 bg-zinc-700 rounded-full drop-shadow-[2px_2px_5px_rgba(0,0,0,0.35)] hover:scale-125 hover:drop-shadow-[0px_0px_5px_rgba(0,0,0,0.95) hover:bg-yellow-500'><img className='w-4 cursor-pointer ' src={assets.next_icon} alt="" /></div>
                <div onClick={()=> loop()} style={{transitionDuration: ".3s"}} className='p-2 bg-zinc-700 rounded-full drop-shadow-[2px_2px_5px_rgba(0,0,0,0.35)] hover:scale-125 hover:drop-shadow-[0px_0px_5px_rgba(0,0,0,0.95) hover:bg-yellow-500'><img className='w-4 cursor-pointer ' src={assets.loop_icon} alt="" /></div>
            </div>
            <div className='flex items-center gap-5'>
                <p>{time.currentTime.minutes}:{time.currentTime.seconds < 10 ? "0"+ time.currentTime.seconds : time.currentTime.seconds}</p>
                <div onClick={(e) => sideBrPlay(e)} ref={seekbg} className='w-[60vw] max-w-[500px] bg-zinc-600 rounded-full cursor-pointer'>
                    <div ref={seekBar} style={{transitionDuration: ".1s"}} className={` flex justify-end hover:h-2
                        h-1
                        border-none
                        bg-white
                        rounded-full
                    `}></div>
                </div>
                <p>{time.totalTime.minutes}:{time.totalTime.seconds < 10 ? "0"+ time.totalTime.seconds : time.totalTime.seconds}</p>
            </div>
        </div>
        <div className={`bg-zinc-300 border-2 border-zinc-900 border-dashed w-[17%] hidden lg:flex gap-3 rounded-lg py-2 px-4`}></div>
    </div>
  )
}

export default Player