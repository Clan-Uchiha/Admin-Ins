'use client';
import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import { ConnectWallet } from "@thirdweb-dev/react";

export default function LogoBranding() {
  return (
    <Sidebar className='w-[22rem]'>
      <div className='bg-black h-full rounded-3xl shadow-lg '>
      <div className=''>
        <h2 className='text-white text-4xl py-12 font-bold flex justify-center items-center'>
          Dvalidate
        </h2>
      </div>
      
      <div className='w-full flex justify-center items-center'>

        <ConnectWallet
        className='w-[80%]'
          dropdownPosition={{
            side: "bottom",
            align: "center",
          }}
        />
      </div>
      <Sidebar.Items className='mt-8 flex items-center justify-center'>
        <Sidebar.ItemGroup
          className='border-none text-white '>
          <Sidebar.Item href="/" icon={HiChartPie} className="hover:bg-red-200 mb-5  px-5 py-3 flex justify-start text-xl bg-[#6f6f6f] scale-120 gap-2 text-white active:scale-105 hover:scale-110 transition-all">
            Home
          </Sidebar.Item>
          <Sidebar.Item href="/pending" icon={HiViewBoards} className="hover:bg-[#898989] text-white
          hover:text-white
           px-5 py-3 flex justify-start mb-5 gap-2  text-xl hover:scale-110 transition-all">
            Pending
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiInbox} className="hover:bg-[#898989] text-white gap-2 justify-start hover:text-white px-5 py-3 flex  mb-5  text-xl hover:scale-110 transition-all">
            Generate New
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser} className="hover:bg-[#898989] text-white gap-2 justify-start hover:text-white px-5 py-3 flex  mb-5  text-xl hover:scale-110 transition-all">
            Inbox
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiShoppingBag} className="hover:bg-[#898989] text-white gap-2 justify-start hover:text-white px-5 py-3 mb-5  flex  text-xl hover:scale-110 transition-all">
            Settings
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        {/* <Sidebar.ItemGroup className='border-none text-[#898989]'>
          <Sidebar.Item href="#" icon={HiArrowSmRight} >
            Sign In
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiTable}>
            Sign Up
          </Sidebar.Item>
        </Sidebar.ItemGroup> */}
      </Sidebar.Items>
      </div>

    </Sidebar>
  );
}
