// components/CertificateGenerator.js
"use client"
import React, { useState } from 'react';
import { IoMdCheckmark } from 'react-icons/io';

const CertificateGenerator = ({  }) => {
    const user = {
        name: "John Doe",
        dob: "01/01/2000",
        mobile: "123-456-7890",
        email: "hon@mail.com",
        year: "2021",
        mobile: "123-456-7890",
        certificateType: "Participation"
    
      }
  const [isGenerated, setIsGenerated] = useState(false);

  const handleGenerateCertificate = () => {
    // Implement certificate generation logic here (e.g., generate a PDF certificate)
    // In this example, we simply set a flag to indicate the certificate is generated.
    setIsGenerated(true);
  };

  return (
    <div className="certificate-generator p-4 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Certificate Generator</h2>

      {isGenerated ? (
        <div className="text-center">
          <IoMdCheckmark className="text-4xl text-green-500 mb-2 mx-auto" />
          <p className="text-lg font-semibold">Certificate Generated Successfully!</p>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4"
            onClick={() => setIsGenerated(false)}
          >
            Generate Another Certificate
          </button>
        </div>
      ) : (
        <div className="text-center">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={handleGenerateCertificate}
          >
            Generate Certificate
          </button>
        </div>
      )}

      {/* Display user information */}
    <div className='mx-10 mt-14 w-96 h-96'> 
      <div className='p-2 shadow-md rounded-md'>
        <div className='p-4 flex place-items-center gap-14 font-bold border-b'>
          <img 
          className='w-20 h-20'
          src='https://www.logopeople.in/wp-content/uploads/2013/01/government-of-india.jpg'
     alt='logo' />
      <div>
      <h1>CERTIFICATE NAME </h1>
     </div>
     </div>
    
         <div className='p-4 flex flex-col gap-2 font-bold'>
         <h1>NAME : <span>BALA SHIVA</span></h1>
          <h1>GENDER : <span>MALE</span></h1>
          <h1>DOB : <span> JUNE 12 , 2003</span></h1>
          <h1>ID  : <span> 6906-0531-5541</span></h1>
         </div>
      </div>
    </div>
    </div>
  );
};

export default CertificateGenerator;