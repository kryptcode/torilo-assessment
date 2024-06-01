import { ChevronDown } from 'lucide-react'
import React from 'react'

export const SearchBox = () => {
  return (
    <div className='flex justify-between items-center'>
        <div>
            <input type="text" placeholder='John' className='w-[15rem] outline-none placeholder:text-[#a8a8a8]  text-black lg:w-[32rem] border bg-[#f2f2f2] rounded-lg p-1.5 px-3 ' />
        </div>

        <div className='flex items-center h-[40px] text-white text-sm font-medium cursor-pointer hover:opacity-75 transition-opacity duration-300 ease-in-out '>
            <div className='h-full flex justify-center items-center px-8 rounded-l-lg bg-[#2898a4]'>
                <span>Add New</span>
            </div>
            <div className='h-full w-[2.5px] bg-white ' />
            <div className='bg-[#2898a4] flex justify-center items-center h-full pl-2 pr-4 rounded-r-lg'>
            <ChevronDown />
            </div>
        </div>
    </div>
  )
}
