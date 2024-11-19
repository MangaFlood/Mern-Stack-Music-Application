import React from 'react'
import { Routes, Route } from 'react-router-dom'
import DisplayHome from './DisplayHome'
import DisplayAlbum from './DisplayAlbum'

function Page1() {
  return (
    <div className='w-[100%] h-full bg-zinc-100 rounded-xl overflow-auto'>
      <Routes>
        <Route path="/" element={<DisplayHome/>} />
        <Route path='/album/:id' element={<DisplayAlbum/>} />
      </Routes>
    </div>
  )
}

export default Page1
