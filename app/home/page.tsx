//Home page for admin side of the website, will be used to display the dashboard and other information
"use client";
import React from 'react'
import Card from '../components/cards/Card'
import {VscNewFile} from 'react-icons/vsc'
import { MdPendingActions } from 'react-icons/md'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='p-4 mt-1'>
        <div>
            <h1 className='p-4 m-2 text-center'>Home Page</h1>
        </div>
        <div className='flex gap-5'>
            <Card 
                name="Pending Requests" 
                icon={<MdPendingActions className='p-4 m-2' size={50} />} 
                pa = "/pending"
                />
            <Card 
                name="Generate New Certificate" 
                pa = "/generate"
                icon={<VscNewFile className='p-4 m-2' size={50} />}
             />
        </div>
    </div>
  )
}

export default page;