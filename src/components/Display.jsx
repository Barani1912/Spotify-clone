// import React, { useEffect, useRef } from 'react'
// import { Route, Routes, useLocation } from 'react-router-dom'
// import DisplayHome from './DisplayHome'
// import DisplayAlbum from './DisplayAlbum'
// import { albumsData } from '../assets/assets'

// const Display = () => {

//   const displayRef = useRef()
//   const location = useLocation()
//   //console.log(location);
//   const isAlbum = location.pathname.includes("album");
//   //console.log(isAlbum);
//   const albumId = isAlbum ? location.pathname.slice(-1): "";
//   //console.log(albumId);
//   const bgcolor = albumsData[Number(albumId)].bgColor;
//   //console.log(bgcolor);

//   useEffect(()=>{
//     if(isAlbum){
//       displayRef.current.style.background = `linear-gradient(${bgcolor},#121212)`
//     }
//     else{
//       displayRef.current.style.background = `#121212`
//     }
//   })

//   return (
//     <div ref={displayRef} className='w-full h-full px-10 pt-4 rounded text-white overflow-auto lg:w-[76%] lg:ml-0'> 
//       <Routes>
//         <Route path='/' element={<DisplayHome/>} />
//         <Route path='/album/:id' element={<DisplayAlbum/>} />
//       </Routes>
//     </div>
//   )
// }

// export default Display


import React, { useEffect, useRef } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import DisplayHome from './DisplayHome'
import DisplayAlbum from './DisplayAlbum'
import { albumsData } from '../assets/assets'

const Display = () => {

  const displayRef = useRef()
  const location = useLocation()
  //console.log(location);
  const isAlbum = location.pathname.includes("album");
  //console.log(isAlbum);
  const albumId = isAlbum ? location.pathname.slice(-1): "";
  //console.log(albumId);
  const bgcolor = albumsData[Number(albumId)].bgColor;
  //console.log(bgcolor);

  useEffect(()=>{
    if(isAlbum){
      displayRef.current.style.background = `linear-gradient(${bgcolor},#121212)`
    }
    else{
      displayRef.current.style.background = `#121212`
    }
  })

  return (
    <div ref={displayRef} className='w-full h-full rounded-lg text-white overflow-auto lg:w-[97%]  mx-2'> 
    {/* lg:76 lg:ml-0*/}
      <Routes>
        <Route path='/' element={<DisplayHome/>} />
        <Route path='/album/:id' element={<DisplayAlbum/>} />
      </Routes>
    </div>
  )
}

export default Display