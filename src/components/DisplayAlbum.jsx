import React, { useContext } from 'react'
import NavBar from './NavBar'
import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData } from '../assets/frontend-assets/assets';
import { PlayerContext } from '../context/PlayerContext';

function DisplayAlbum() {

    const {id} = useParams();
    const albumInfo = albumsData[id];
    const {playById} = useContext(PlayerContext)


  return (
    <div className='p-3 flex flex-col gap-3'>
      <NavBar />
      <div className='container'>
        <div className='p-5 flex flex-col md:flex-row gap-[3%] rounded-xl bg-zinc-800 hover:bg-black text-white'>
            <img className='w-58 rounded-lg' src={albumInfo.image} alt="" />
            <div className='flex flex-col justify-end p-3'>
                <h1 className='opacity-[80%] font-semibold tracking-tight text-xl'>Playlist</h1>
                <h1 className='opacity-[80%] font-bold tracking-tight pb-4 text-5xl md:text-7xl'>{albumInfo.name}</h1>
                <h4 className='opacity-[70%] tracking-tight text-xl'>{albumInfo.desc}</h4>
                <p className='opacity-[75%] text-sm pt-1 font-light'>
                    <img className='inline-block w-5' src={assets.spotify_logo} alt="" /> <b>Spotify</b> • 1,32,122 likes • <b>50 songs,</b> about 2 hr 30 min
                </p>
            </div>
        </div>
        <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-zinc-800'>
            <p><b className='mr-4'>#</b>Title</p>
            <p>Album</p>
            <p className='hidden sm:block'>Date Added</p>
            <img className='m-auto w-4' src={assets.clock_icon} alt="" />
        </div>
        <hr />
        {
          songsData.map((items, index)=>(
            <div onClick={()=> playById(items.id)} key={index} className='grid grid-cols-3 sm:grid-cols-4 gap-2 px-2 py-3 items-center hover:bg-zinc-300 rounded-lg hover:border-2 border-black border-dashed hover:scale-100'>
              <p className='flex w-14 text-nowrap items-center'>
                <b className='mr-4'>{index + 1}</b>
                <img src={items.image} alt="" />
                {items.name}
              </p>
              <p>{albumInfo.name}</p>
              <p className='hidden sm:block'>5 days ago</p>
              <p className='m-auto'>{items.duration}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default DisplayAlbum