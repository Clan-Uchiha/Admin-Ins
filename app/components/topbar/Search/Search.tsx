import React from 'react'
import {CiSearch} from 'react-icons/ci'
import Right from '../rightmenu/Right'

type Props = {}

const Search = (props: Props) => {
  return (
    <div className='p-6 mx-4 mt-2 flex w-full text-white justify-between'>
        <div className='bg-[#303030] text-[#898989] flex rounded-full gap-2 p-2 pr-32 px-4  place-items-center'>
            <CiSearch className='text-slate-300 text-xl'/>
           <input placeholder='Search Through DB!' className='bg-transparent text-sm outline-none text-[#898989] placeholder-[#898989] ' type="text"/>
        </div>
        <div>
        <Right />
        </div>
    </div>
  )
}

export default Search