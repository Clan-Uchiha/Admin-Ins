// components/UserVerificationForm.js
"use client"
import React, { useState } from 'react';
import Link from 'next/link'
import LogoBranding from '@/app/components/SideBar/Nav';
import CreateCertificate from '@/app/components/CreateCertificate';


const UserVerificationForm = ({ }) => {
  const user = {
    name: "John Doe",
    dob: "01/01/2000",
    mobile: "123-456-7890",
    email: "hon@mail.com",
    year: "2021",
    certificateType: "Participation"

  }
  const [isNameVerified, setNameVerified] = useState(false);
  const [isDobVerified, setDobVerified] = useState(false);
  const [isMobileVerified, setMobileVerified] = useState(false);
  const [isEmailVerified, setEmailVerified] = useState(false);
  const [isYearVerified, setYearVerified] = useState(false);
  const [isCertificateTypeVerified, setCertificateTypeVerified] = useState(false);

  const isAllVerified =
    isNameVerified &&
    isDobVerified &&
    isMobileVerified &&
    isEmailVerified &&
    isYearVerified &&
    isCertificateTypeVerified;

  return (

      <div className='flex items-center justify-center w-'>
        <div className="verification-form w-[60%]">
          <h2 className='text-white font-bold text-2xl flex justify-center py-5'>User Verification :</h2>
          <div className="user-details p-12 text-lg m-2 flex flex-col gap-4 text-white rounded-xl">
            <p className='py-2 px-6 bg-[#898989]/70 rounded-full shadow-lg flex justify-between items-center '>
              <span>Name: {user.name}</span> 
              <button className=' p-1 rounded-full' onClick={() => setNameVerified(!isNameVerified)}>
                {isNameVerified ? '✅' : '❌'}
              </button>
            </p>
            <p className='py-2 px-6 bg-[#898989]/70 rounded-full shadow-lg flex justify-between items-center'>
              <span>DOB: {user.dob}</span> 
              <button className=' p-1 rounded-full' onClick={() => setDobVerified(!isDobVerified)}>
                {isDobVerified ? '✅' : '❌'}
              </button>
            </p>
            <p className='py-2 px-6 bg-[#898989]/70 rounded-full shadow-lg flex justify-between items-center'>
              <span>Mobile: {user.mobile}</span> 
              <button className=' p-1 rounded-full' onClick={() => setMobileVerified(!isMobileVerified)}>
                {isMobileVerified ? '✅' : '❌'}
              </button>
            </p>
            <p className='py-2 px-6 bg-[#898989]/70 rounded-full shadow-lg flex justify-between items-center'>
              <span>Email: {user.email}</span> 
              <button className=' p-1 rounded-full' onClick={() => setEmailVerified(!isEmailVerified)}>
                {isEmailVerified ? '✅' : '❌'}
              </button>
            </p>
            <p className='py-2 px-6 bg-[#898989]/70 rounded-full shadow-lg flex justify-between items-center'>
              <span>Year: {user.year}</span> 
              <button className=' p-1 rounded-full' onClick={() => setYearVerified(!isYearVerified)}>
                {isYearVerified ? '✅' : '❌'}
              </button>
            </p>
            <p className='py-2 px-6 bg-[#898989]/70 rounded-full shadow-lg flex justify-between items-center'>
              <span>Certificate Type: {user.certificateType}</span> 
              <button className=' p-1 rounded-full' onClick={() => setCertificateTypeVerified(!isCertificateTypeVerified)}>
                {isCertificateTypeVerified ? '✅' : '❌'}
              </button>
            </p>
            <div className='flex flex-row justify-between pt-6'>
              <label className='flex items-center'>Title:</label>
              <input className='rounded-full py-2 focus:border-none focus:ring-2' type="text"/>
              <label className='flex items-center'>Description:</label>
              <input className='rounded-full py-2 focus:border-none focus:ring-2' type="text"/>
            </div>
          </div>

          {isAllVerified ? (
            <div className="verification-success flex flex-col items-center">
              <p className='text-green-400'>User verified successfully!</p>
              <Link href={`/certificateGen`}>
                <button className="bg-white text-black px-2 py-4 rounded-lg shadow-lg font-bold my-2 hover:scale-105 hover:bg-white/50 transition-all hover:text-white">Generate & Send Certificate</button>
              </Link>
            </div>
          ) : (
            <div className="verification-error flex flex-col items-center">
              <p className='text-red-400'>Please verify all fields.</p>
            </div>
          )}
        </div>
        <div>
          <CreateCertificate />
        </div>
      </div>

  );
};

export default UserVerificationForm;