import React from 'react'

function Album({musicData}) {

    const {image, name, desc, id} = musicData

  return (
    <div className='max-w-[200px] flex- flex-col gap-3 p-3 rounded-lg bg-zinc-300 cursor-pointer hover:bg-black hover:text-white border-2 border-black border-dashed'>
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