import React from 'react'
import {CiSearch} from 'react-icons/ci'
import Right from '../rightmenu/Right'

type Props = {}

const Search = (props: Props) => {
  return (
    <div className='p-6 mx-4 mt-2 flex w-full items-center text-white justify-between'>
      <h2 className='text-black font-bold text-3xl'>Welcome Back!</h2>
        <div className='bg-black/80 text-[#898989] flex rounded-full gap-2 p-2 pr-32 px-6 place-items-center'>
            <CiSearch className='text-slate-300 text-xl'/>
           <input placeholder='Search Through DB!' className='bg-transparent text-lg outline-none text-[#898989] placeholder-[#898989] ' type="text"/>
        </div>
        <div>
        <Right />
        </div>
    </div>
  )
}

export default Search