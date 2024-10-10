import React, { useContext } from 'react'
import Sidebar from './components/Sidebar'
import Player from './components/Player'
import Display from './components/Display'
import { PlayerContext } from './context/PlayerContext'
import NavBar from './components/NavBar'


const App = () => {
  const {audioRef,track} = useContext(PlayerContext)
  return (
    <div className='h-screen bg-black'>
      <div className='h-[10%] '>
        <NavBar/>
      </div>
      
      {/* <div className='flex'>  */}
      <div className='h-[78%] flex justify-around gap-1'>
        <Sidebar />
        <Display />
      </div>
      <div className='h-[12%]'>
        <Player/>
      </div>
      
      <audio ref={audioRef} src={track.file} preload='auto'></audio>
    </div>
  )
}

export default App