import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { FaRegArrowAltCircleDown, FaSpotify } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoSearch } from "react-icons/io5";

const NavBar = () => {
  const navigate = useNavigate()

// for 3rd child div...margin right
//   const value1 ="24px";
//   const value2 ="0px"
//   style={{ marginRight: window.innerWidth < 1000 ? value1:value2 }}


  return (
  
        <div className='h-[10%] bg-black w-[98%] flex justify-between items-center text-white  font-semibold fixed mx-4 mr-10'>

{/* nav left */}
          <div className="flex items-center gap-3 cursor-pointer">
            <FaSpotify size={40} />
            <p className="font-bold hidden lg:block">Spotify</p>
          </div>

{/* nav middle */}
          <div className='flex items-center gap-2'>
                             
              <div onClick={()=>navigate("/")} className='bg-[#ffffff2a] w-12 h-12 rounded-full flex items-center justify-center cursor-pointer'>
                <img className='w-6' src={assets.home_icon} alt='' />
              </div>
            
             
              {/* <div className='flex bg-[#ffffff2a] p-1 rounded-full'>
                <img className='w-10  p-2 rounded-2xl cursor-pointer' src={assets.search_icon} alt="" />
                <input  className=' bg-[#3c38382a] mr-4 rounded border-none ' placeholder='What do you want to play?'/>
              </div> */}
              <div className='hidden sm:flex items-center bg-[#ffffff2a] p-3 rounded-full cursor-pointer'>
                <IoSearch size={24} />
                <input
                  type='text'
                  className='bg-[#3c38382a] mr-4 ml-1 border-hidden outline-none cursor-pointer'
                  placeholder='What do you want to play?'
                />
              </div>

              <img onClick={()=>navigate(-1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_left} alt='' />
              <img onClick={()=>navigate(+1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_right} alt='' />
          </div>

         

{/* nav right */}
          <div className=' flex items-center gap-6  mr-10'>
            
            <p className=' bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden lg:block cursor-pointer'>Explore Premium</p>

            <div className='flex items-center '>
              <FaRegArrowAltCircleDown size={22} className='pl-1 hidden lg:block'/>
              <p className='px-1 text-[15px] hidden lg:block cursor-pointer'>Install App</p>
            </div>

            <IoIosNotificationsOutline className='cursor-pointer hover:' size={22}/>

            <div className='bg-[#ffffff2a] w-12 h-12 rounded-full flex items-center justify-center cursor-pointer '>
              <p className='bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center'>B</p>
            </div>
           
          </div>
        </div>

      
  
  )
}

export default NavBar


