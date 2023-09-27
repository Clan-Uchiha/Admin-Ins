"use client"
import React, { useEffect } from 'react';
import Nav from './components/SideBar/Nav';
import Search from './components/topbar/Search/Search';
import GlassmorphismCard from './components/cards/Glass';
import { useStateContext } from '@/context/StateContext';

type Props = {};

const Page: React.FC<Props> = (props: Props) => {
  const { address, contract, getAllCertificates } = useStateContext();

  useEffect(() => {
    if (contract) getAllCertificates();
  }, [address, contract]);

  return (
    <div className='flex  '>
      <div className='w-full'>
        <Search />
        <div className='flex gap-10 p-2 mx-10'>
          <GlassmorphismCard />
          <GlassmorphismCard />
          <GlassmorphismCard />
        </div>
        <div className='flex gap-10 p-2 mx-10 '>
          <h1 className='text-white font-bold text-2xl'>Recent Updates</h1>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Page;
