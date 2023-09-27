import React from 'react'
import Nav from './components/SideBar/Nav'
import Search from './components/topbar/Search/Search'
import GlassmorphismCard from './components/cards/Glass'


type Props = {}

const page = (props: Props) => {
  return (
    <div className='flex  '>
     <div className='border-r-[.7px] border-slate-300/20 h-[100vh] p-6 w-[20%]'>
     <Nav/>
     </div>
     <div className='w-full'>
      <Search/>
    <div className='flex gap-10 p-2 mx-10'>
      <GlassmorphismCard />
      <GlassmorphismCard/>
      <GlassmorphismCard/>
    </div>
    <div className='flex gap-10 p-2 mx-10 '>
<h1 className='text-white font-bold text-2xl'>Recent Updates</h1>
<div>

</div>
      </div>
     </div>

    </div>
  )
}

export default page