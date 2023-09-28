"use client"
import React, { useEffect, useState } from 'react';
import Nav from './components/SideBar/Nav';
import Search from './components/topbar/Search/Search';
import GlassmorphismCard from './components/cards/Glass';
import { useStateContext } from '@/context/StateContext';

type Props = {};

const Page: React.FC<Props> = (props: Props) => {



  return (
    <div className='flex  '>
      <div className='w-full'>
        <Search />
        <div className='bg-gradient-to-l from-amber-200 to-yellow-500 w-60% h-[10rem] rounded-xl w-[10rem]'>
          <h1>asdvcasdv</h1>
          <img src="https://www.pngall.com/wp-content/uploads/10/Ethereum-Logo-PNG-File.png"/>
        </div>
        <div className='flex gap-10 p-2 mx-10'>
          <GlassmorphismCard />
          <GlassmorphismCard />
          <GlassmorphismCard />
        </div>
        <div className='flex gap-10 p-2 mx-10 '>
          <h1 className='text-black font-bold text-2xl'>Recent Updates</h1>
          <div>
            <button className='bg-'>test</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
