'use client';
import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import { ConnectWallet } from "@thirdweb-dev/react";

export default function LogoBranding() {
  return (
    <Sidebar >
      <Sidebar.Logo>
        <p className='text-white'>
          Dvalidate
        </p>
      </Sidebar.Logo>
      <Sidebar.Items className='mt-10'>
        <Sidebar.ItemGroup
          className='text-[#898989] border-none  '>
          <Sidebar.Item href="/" icon={HiChartPie} className="hover:bg-red-200 mb-5 
        transition-all px-5 py-3 flex  text-xl bg-[#6f6f6f] gap-2 text-white ">
            Home
          </Sidebar.Item>
          <Sidebar.Item href="/pending" icon={HiViewBoards} className="hover:bg-[#898989]
          hover:text-white
           px-5 py-3 flex  mb-5 gap-2  text-xl">
            Pending
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiInbox} className="hover:bg-[#898989] gap-2  hover:text-white px-5 py-3 flex  mb-5  text-xl">
            Generate New
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser} className="hover:bg-[#898989] gap-2  hover:text-white px-5 py-3 flex  mb-5  text-xl">
            Inbox
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiShoppingBag} className="hover:bg-[#898989] gap-2  hover:text-white px-5 py-3 mb-5  flex  text-xl">
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
      <div>

        <ConnectWallet
          dropdownPosition={{
            side: "bottom",
            align: "center",
          }}
        />
      </div>
    </Sidebar>
  );
}
