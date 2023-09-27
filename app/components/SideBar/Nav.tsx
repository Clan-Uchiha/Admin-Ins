import React from 'react'
import {GrAppsRounded} from 'react-icons/gr'
import {CiSearch} from 'react-icons/ci'
import { MdPendingActions } from 'react-icons/md'
import {VscNewFile} from 'react-icons/vsc'
import {BiSolidMessageRoundedDots} from 'react-icons/bi'
import {FiSettings} from 'react-icons/fi'

 
type Props = {}

const Nav = (props: Props) => {
    const navlist = [
        {
            name : 'Home',
            logo : <GrAppsRounded/>
        },
        {
            name : 'Discover',
            logo : <CiSearch/>
        },
        {
            name : 'Pending Requests',
            logo : <MdPendingActions/>
        },
        {
            name : 'Generate New Certificate',
            logo : <VscNewFile/>
        },
        {
            name : 'Messages',
            logo : <BiSolidMessageRoundedDots/>
        },
        {
            name : 'Settings',
            logo : <FiSettings/>
        }
    ]
  return (
    <div className='border-r-2 w-[20vw] h-[100vh] flex flex-col justify-between'>
        <div>
            <h1 className='text-gray-900 p-8 font-bold text-xl'>D!Validate</h1>
        </div>
        <div className='p-8'>
            <div className='border rounded-xl p-6 bg-slate-200/10 shadow '>
            {
                navlist.map((item, index) => {
                    return (
                        <div className='flex gap-2'>
                            <div className='flex gap-3 place-items-center'>
                                <div className=' '>
                                    {item.logo}
                                </div>
                                <div className=''>
                                    {item.name}
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </div>
  <div className='p-8'>
  <div className='border bg-slate-200/50 rounded-xl  flex place-items-center'>
            <div className=''>
                <img 
                className='w-20 h-20 object-cover p-3'
                src="https://e1.pxfuel.com/desktop-wallpaper/502/361/desktop-wallpaper-rengoku-smile-rengoku-death.jpg" alt='profile' />
            </div>
            <div>
                <h1>Rengoku Kyojirou</h1>
                <h2>@Admin</h2>
            </div>
        </div>
  </div>
    </div>
  )
}

export default Nav