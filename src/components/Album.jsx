import React from 'react'
import { useNavigate } from 'react-router-dom'

function Album({musicData}) {

  const navigate = useNavigate();

  const {image, name, desc, id} = musicData

  return (
    <div onClick={()=>navigate(`/album/${id}`)} style={{transitionDuration: ".2s", transitionTimingFunction: 'ease-in-out'}} className='min-w-[200px] flex- flex-col gap-3 p-3 rounded-lg bg-zinc-300 cursor-pointer hover:bg-black hover:text-white border-2 border-black border-dashed drop-shadow-[2px_2px_5px_rgba(0,0,0,0.35)] hover:scale-[1.03] hover:drop-shadow-[0px_0px_5px_rgba(0,0,0,0.95)'>
      <div className='w-full'>
        <img className='w-full object-cover rounded-xl' src={image} alt="" />
      </div>
      <div className='p-3 '>
        <h1 className='tracking-tighter font-semibold pb-1'>{name}</h1>
        <p className='tracking-tighter opacity-[60%] text-sm leading-[1] pb-1'>{desc}</p>
      </div>
    </div>
  )
}

export default Album