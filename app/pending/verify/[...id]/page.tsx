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

      <div className='flex items-center justify-center'>
        <div className="verification-form ">
          <h2 className='text-white font-bold text-2xl'>User Verification :</h2>
          <div className="user-details p-12 text-lg m-2 flex flex-col gap-4 text-white border rounded-xl ">
            <p className='border-b'>
              <span>Name:</span> {user.name}
              <button onClick={() => setNameVerified(!isNameVerified)}>
                {isNameVerified ? '✅' : '❌'}
              </button>
            </p>
            <p>
              <span>DOB:</span> {user.dob}
              <button onClick={() => setDobVerified(!isDobVerified)}>
                {isDobVerified ? '✅' : '❌'}
              </button>
            </p>
            <p>
              <span>Mobile:</span> {user.mobile}
              <button onClick={() => setMobileVerified(!isMobileVerified)}>
                {isMobileVerified ? '✅' : '❌'}
              </button>
            </p>
            <p>
              <span>Email:</span> {user.email}
              <button onClick={() => setEmailVerified(!isEmailVerified)}>
                {isEmailVerified ? '✅' : '❌'}
              </button>
            </p>
            <p>
              <span>Year:</span> {user.year}
              <button onClick={() => setYearVerified(!isYearVerified)}>
                {isYearVerified ? '✅' : '❌'}
              </button>
            </p>
            <p>
              <span>Certificate Type:</span> {user.certificateType}
              <button onClick={() => setCertificateTypeVerified(!isCertificateTypeVerified)}>
                {isCertificateTypeVerified ? '✅' : '❌'}
              </button>
            </p>
          </div>

          {isAllVerified ? (
            <div className="verification-success">
              <p className='text-green-400'>User verified successfully!</p>
              <Link href={`/certificateGen`}>
                <button className="bg-white text-black px-2 py-4 rounded-lg shadow-lg font-bold">Generate & Send Certificate</button>
              </Link>
            </div>
          ) : (
            <div className="verification-error">
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