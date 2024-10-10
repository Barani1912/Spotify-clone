// import React from 'react'
// import {assets} from '../assets/assets'
// import { useNavigate } from 'react-router-dom'
// import { FaSpotify } from "react-icons/fa6";

// const Sidebar = () => {
//     const navigate = useNavigate()
//   return (
//     <div className='w-[24%] h-full p-2 flex-col gap-2 text-white hidden lg:flex'>
//         <div className='bg-[#121212] h-[10%] rounded flex flex-col justify-around'>
//             <div className='flex items-center gap-3 pl-8 cursor-pointer'>
//                 {/* <img className='w-6' src={assets.search_icon} alt='' /> */}
//                 <FaSpotify size={24} />
//                 <p className='font-bold'>Spotify</p>
//             </div>
//             {/* <div onClick={()=>navigate("/")} className='flex items-center gap-3 pl-8 cursor-pointer'>
//                 <img className='w-6' src={assets.home_icon} alt='' />
//                 <p className='font-bold'>Home</p>
//             </div> */}
           
//         </div>

//         <div className='bg-[#121212] h-[90%] rounded'>
//             <div className='p-4 flex items-center justify-between'>
//                 <div className='flex items-center gap-3'>
//                     <img className='w-8' src={assets.stack_icon} alt=''/>
//                     <p className='font-serif'>Your library</p>
//                 </div>
//                 <div className='flex items-center gap-3'>
//                     <img className='w-5' src={assets.arrow_icon} alt=''/>
//                     <img className='w-5' src={assets.plus_icon} alt=''/>
//                 </div>
//             </div>

//             <div className='p-4 bg-[#222222] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
//                 <p>Create your first playlist</p>
//                 <p className='font-light text-sm'>It's easy we will help you</p>
//                 <button className='px-4 py-1.5 bg-white text-[12px] text-black rounded-full mt-2'>Create Playlist</button>
//             </div>
//             <div className='p-4 bg-[#222222] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4'>
//                 <p>Let's find some podcasts to follow</p>
//                 <p className='font-light text-sm'>We'll keep you updated on new episode</p>
//                 <button className='px-4 py-1.5 bg-white text-[12px] text-black rounded-full mt-2'>Browse Podcast</button>
//             </div>
//         </div>

//     </div>
//   )
// }

// export default Sidebar



import React from 'react'
import {assets} from '../assets/assets'



const Sidebar = () => {
    
  return (
   
        // <div className='w-[22%]  flex-col gap-2 text-white hidden lg:flex ml-2'>
        <div className='w-[22%]  flex-col gap-2 text-white hidden 1150:flex ml-2'>
            

            <div className='bg-[#121212] h-[100%] rounded-lg'>
                <div className='p-4 flex items-center justify-between opacity-60'>
                    <div className='flex items-center gap-3'>
                        <img className='w-6' src={assets.stack_icon} alt=''/>
                        <p className='font-serif'>Your library</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <img className='w-5' src={assets.plus_icon} alt=''/>
                        <img className='w-5' src={assets.arrow_icon} alt=''/>
                    </div>
                </div>

                <div className='p-4 bg-[#222222] m-2 mt-5 rounded-lg font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
                    <p>Create your first playlist</p>
                    <p className='font-light text-sm'>It's easy we will help you</p>
                    <button className='px-4 py-1.5 bg-white text-[12px] text-black rounded-full mt-2'>Create Playlist</button>
                </div>
                <div className='p-4 bg-[#222222] m-2 rounded-lg font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4'>
                    <p>Let's find some podcasts to follow</p>
                    <p className='font-light text-sm'>We'll keep you updated on new episode</p>
                    <button className='px-4 py-1.5 bg-white text-[12px] text-black rounded-full mt-2'>Browse Podcast</button>
                </div>
            </div>

        </div>


   
  )
}

export default Sidebar