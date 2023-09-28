import React from 'react'
import {AiFillSetting} from 'react-icons/ai'
import {RiNotificationBadgeFill} from 'react-icons/ri'
import {CgProfile} from 'react-icons/cg'

type Props = {}

const Right = (props: Props) => {
  return (
    <div className='flex gap-3 place-items-center cursor-pointer w-full px-14 '>
        <div className='bg-[#898989] shadow-lg rounded-full p-2'>
            <AiFillSetting className=' text-2xl'/>
        </div>
        <div className='bg-[#898989] shadow-lg rounded-full p-2'>
        <RiNotificationBadgeFill className='text-2xl'/>
        </div>
        <div className='bg-[#898989] shadow-lg rounded-full p-2'>
        <CgProfile className=' text-2xl'/>
        </div>

    </div>
  )
}

export default Right