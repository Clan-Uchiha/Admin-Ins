"use client";
import React from 'react'
import { MdPendingActions } from 'react-icons/md'
import Link from 'next/link';


type Props = {
    name: string
}
const Card = (props: Props) => {

  return (
    <div>
     <Link href={props.pa}>
     <div 
     
     className='flex border shadow'>
         <h1 className='p-4 m-2 '>{props.name}</h1>
         <div className='flex-grow'></div>
         <div className='flex-grow-0'>
             {props.icon}
             </div>
     </div>
     </Link>
    </div>
  )
}

export default Card