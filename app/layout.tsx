"use client"
import './globals.css'
import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google';
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { StateContextProvider } from "../context/StateContext";
import Nav from './components/SideBar/Nav';

const inter = Urbanist({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'D-Validate',
//   description: 'D-Validate is a Block Chain based Digital Certificate Validation System',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <ThirdwebProvider
        clientId={"a7b3cea3ff3ab3e24d18f3033ffdd27c"}
        activeChain="goerli"
      >
        <StateContextProvider>
          <body className={`${inter.className} flex`}>
            <div className='border-r-[.7px] bg-gray-200 border-slate-300/20 h-[100vh] p-6 w-[20%]'>
              <Nav />
            </div>
            <div className='w-full'>
            {children}
            </div>
          </body>
        </StateContextProvider>
      </ThirdwebProvider>
    </html>
  )
}
