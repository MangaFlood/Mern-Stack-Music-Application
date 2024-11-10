import React from 'react'
import { Routes, Route } from 'react-router-dom'
import DisplayHome from './DisplayHome'

function Page1() {
  return (
    <div className='w-[100%] h-full bg-zinc-100 rounded-xl overflow-auto'>
      <Routes>
        <Route path="/" element={<DisplayHome/>} />
      </Routes>
    </div>
  )
}

export default Page1
