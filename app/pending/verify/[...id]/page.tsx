// components/UserVerificationForm.js
"use client"
import React, { useState } from 'react';
import Link from 'next/link'


const UserVerificationForm = ({  }) => {
  const user = {
    name: "John Doe",
    dob: "01/01/2000",
    mobile: "123-456-7890",
    email: "hon@mail.com",
    year: "2021",
    mobile: "123-456-7890",
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
    <div className="verification-form">
      <h2>User Verification</h2>
      <div className="user-details p-4 m-2 flex flex-col gap-4">
        <p>
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
          <p>User verified successfully!</p>
          <Link href={`/certificateGen`}>
            Generate & Send Certificate
          </Link>
        </div>
      ) : (
        <div className="verification-error">
          <p>Please verify all fields.</p>
        </div>
      )}
    </div>
  );
};

export default UserVerificationForm;