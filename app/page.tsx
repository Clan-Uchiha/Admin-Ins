"use client"
import React, { useEffect, useState } from 'react';
import Nav from './components/SideBar/Nav';
import Search from './components/topbar/Search/Search';
import GlassmorphismCard from './components/cards/Glass';
import { useStateContext } from '@/context/StateContext';
import banner from "../app/asset/banner.jpg";

type Props = {};

const Page: React.FC<Props> = (props: Props) => {



  return (
    <div className='flex  '>
      <div className='w-full '>
        <Search />
        {/* <div className=' flex bg-gradient-to-l from-amber-200 to-yellow-500 w-[70%] px-12 py-3 h-[20rem] mx-12 rounded-xl '>
          <h1 className='text-black text-bold text-3xl'>asdvcasdv</h1>
          <img src="https://www.pngall.com/wp-content/uploads/10/Ethereum-Logo-PNG-File.png" className='w-[10rem]'/>
        // </div> */}
        <div className="flex items-center mx-10 w-full">
          <img className="rounded-3xl shadow-lg my-6 w-[86%] " src="https://ik.imagekit.io/cwq19b8fi/Colorful%20Gradient%203D%20Artist%20Twitter%20Header.png?updatedAt=1695890722041" />
        </div>
        <div className='flex gap-10 p-2 mx-10'>


          <div className="p-4 shadow-lg rounded-2xl w-52 bg-gray-800">
            <div className="flex items-center">
              <span className="relative w-4 h-4 p-2 bg-green-500 rounded-full">
                <svg width="20" fill="currentColor" height="20" className="absolute h-2 text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1362 1185q0 153-99.5 263.5t-258.5 136.5v175q0 14-9 23t-23 9h-135q-13 0-22.5-9.5t-9.5-22.5v-175q-66-9-127.5-31t-101.5-44.5-74-48-46.5-37.5-17.5-18q-17-21-2-41l103-135q7-10 23-12 15-2 24 9l2 2q113 99 243 125 37 8 74 8 81 0 142.5-43t61.5-122q0-28-15-53t-33.5-42-58.5-37.5-66-32-80-32.5q-39-16-61.5-25t-61.5-26.5-62.5-31-56.5-35.5-53.5-42.5-43.5-49-35.5-58-21-66.5-8.5-78q0-138 98-242t255-134v-180q0-13 9.5-22.5t22.5-9.5h135q14 0 23 9t9 23v176q57 6 110.5 23t87 33.5 63.5 37.5 39 29 15 14q17 18 5 38l-81 146q-8 15-23 16-14 3-27-7-3-3-14.5-12t-39-26.5-58.5-32-74.5-26-85.5-11.5q-95 0-155 43t-60 111q0 26 8.5 48t29.5 41.5 39.5 33 56 31 60.5 27 70 27.5q53 20 81 31.5t76 35 75.5 42.5 62 50 53 63.5 31.5 76.5 13 94z">
                  </path>
                </svg>
              </span>
              <p className="ml-2 text-gray-700 text-md dark:text-gray-50">
                Sales
              </p>
            </div>
            <div className="flex flex-col justify-start">
              <p className="my-4 text-4xl font-bold text-left text-gray-800 dark:text-white">
                36K
              </p>
              <div className="relative h-2 bg-gray-200 rounded w-28">
                <div className="absolute top-0 left-0 w-2/3 h-2 bg-green-500 rounded">
                </div>
              </div>
            </div>
          </div>
          <GlassmorphismCard />
          <GlassmorphismCard />

          <div className="relative w-full p-4 overflow-hidden bg-white shadow-lg rounded-xl md:w-72 dark:bg-gray-900">
            <a href="#" className="block w-full h-full">
              <div className="flex items-center w-full">
                <a href="#" className="relative block">
                  <img alt="profil" src="https://www.pngall.com/wp-content/uploads/10/Ethereum-Logo-PNG-File.png" className="mx-auto object-cover rounded-full h-10 w-10 " />
                </a>
                <div className="flex flex-col items-center ml-2">
                  <span className="dark:text-white">
                    Requests
                  </span>
                  <span className="text-sm text-gray-400 dark:text-gray-300">
                    Completed validations
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between my-2">
                <p className="text-sm text-gray-300">
                  4/6 task completed
                </p>
              </div>
              <div className="w-full h-2 bg-blue-200 rounded-full">
                <div className="w-2/3 h-full text-xs text-center text-white bg-blue-600 rounded-full">
                </div>
              </div>
            </a>
          </div>



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
