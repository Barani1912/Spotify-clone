// import React from 'react'
// import { albumsData, songsData } from '../assets/assets'
// import AlbumItem from './AlbumItem'
// import SongItem from './SongItem'


// const DisplayHome = () => {
//   return (
//       <div className='flex flex-col '>
//         <div className=' flex items-center gap-2 bg-[#e4e0e02b] sticky top-0'>
//           <p className='bg-white text-black rounded-2xl px-4 py-1 cursor-pointer'>All</p>
//           <p className='bg-[#ffffff2b] px-4 py-1 rounded-2xl cursor-pointer'>Music</p>
//           <p className='bg-[#ffffff2b] px-4 py-1 rounded-2xl cursor-pointer'>Podcasts</p>
//         </div>

//         <div className='mb-4'>
//           <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
//           <div className='flex overflow-auto'>
//             {albumsData.map((item,index)=>(<AlbumItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />))}
//           </div>
//         </div>

//         <div className='mb-4'>
//           <h1 className='my-5 font-bold text-2xl'>Today's biggest hits</h1>
//           <div className='flex overflow-auto'>
//             {songsData.map((item,index)=>(<SongItem key={index} name={item.name} desc={item.desc} image={item.image} id={item.id} />))}
//           </div>
//         </div>

//       </div>
//   )
// }

// export default DisplayHome




import React from 'react'
import { albumsData, songsData, todaysHits } from '../assets/assets'
import AlbumItem from './AlbumItem'
import SongItem from './SongItem'
import TodaysHits from './TodaysHits'


const DisplayHome = () => {
  return (
    <div>
        <div className=' flex items-center gap-2 p-4 bg-[#131313] sticky top-0'>
          <p className='bg-white text-black rounded-2xl px-4 py-1 cursor-pointer'>All</p>
          <p className='bg-[#ffffff2b] px-4 py-1 rounded-2xl cursor-pointer'>Music</p>
          <p className='bg-[#ffffff2b] px-4 py-1 rounded-2xl cursor-pointer'>Podcasts</p>
        </div>
   
      <div className='flex flex-col  px-10 pt-4'>
        
        <div className='mb-4'>
          <h1 className='my-5 font-bold text-2xl'>Today's biggest hits</h1>
          <div className='flex overflow-auto'>
            {todaysHits.map((item,index)=>(<TodaysHits key={index} name={item.name} desc={item.desc} image={item.image} id={item.id} />))}
          </div>
        </div>

        <div className='mb-4'>
          <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
          <div className='flex overflow-auto'>
            {albumsData.map((item,index)=>(<AlbumItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />))}
          </div>
        </div>

        <div className='mb-4'>
          <h1 className='my-5 font-bold text-2xl'>Top English songs</h1>
          <div className='flex overflow-auto'>
            {songsData.map((item,index)=>(<SongItem key={index} name={item.name} desc={item.desc} image={item.image} id={item.id} />))}
          </div>
        </div>

        

      </div>

      </div>
  )
}

export default DisplayHome