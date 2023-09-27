"use client"
import React, { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
import { SiEthereum } from "react-icons/si";
import QRCode from "react-qr-code";


const CertificateGenerator = ({}) => {
  const user = {
    name: "John Doe",
    dob: "01/01/2000",
    mobile: "123-456-7890",
    email: "hon@mail.com",
    year: "2021",
    mobile: "123-456-7890",
    certificateType: "Participation",
  };
  const [isGenerated, setIsGenerated] = useState(false);

  const handleGenerateCertificate = () => {
    // Implement certificate generation logic here (e.g., generate a PDF certificate)
    // In this example, we simply set a flag to indicate the certificate is generated.
    setIsGenerated(true);
  };

  return (
    <div className="certificate-generator p-4 rounded-lg bg-gray-100 h-[100vh]">
      <h2 className="text-3xl font-semibold text-center mb-4">Certificate Generator</h2>

      {/* Display user information */}
      <div className="mx-auto w-[28rem] h-[28rem]  bg-white rounded-xl drop-shadow-xl hover:shadow-md p-4 my-20">
        <div className="border-b-2  flex items-center justify-between">
          <img
            className="w-16 h-16"
            src="https://www.logopeople.in/wp-content/uploads/2013/01/government-of-india.jpg"
            alt="logo"
          />
          <div>
            <h1 className="text-2xl mx-28 font-semibold">PAN CARD</h1>
          </div>
        </div>
<div className="flex gap-6">

<div className="p-4 flex flex-col gap-2 border-b-2">
          <h1 className="text-md font-semibold">
            NAME : <span>BALA SHIVA</span>
          </h1>
          <h1 className="text-md font-semibold">
            GENDER : <span>MALE</span>
          </h1>
          <h1 className="text-md font-semibold">
            DOB : <span>JUNE 12, 2003</span>
          </h1>
          <h1 className="text-md font-semibold">
            ID : <span>6906-0531-5541</span>
          </h1>
        </div>
        <div  className="h-36 p-6 mt-3 ">
        <QRCode
    size={256}
    style={{ height: "100%", maxWidth: "100%", width: "100%" }}
    value="Madda Gudu"
    viewBox={`0 0 256 256`}
    />
        </div>
</div>
        <div className="mt-auto ">
          <div className="flex items-center relative mt-5">
            <SiEthereum className="w-12 h-12 p-2 z-10 bg-blue-800 border-2 border-white rounded-full text-white" />
            <div className="relative">
              <h1 className="bg-blue-800 text-white text-sm font-semibold py-1 pl-8 pr-4 rounded-full absolute 
              -left-5 -top-3 -z-2">
                D!VALIDATED
              </h1>
              {isGenerated && (
                <div className="absolute left-[89%] top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <IoMdCheckmark className="text-4xl text-green-500" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-4">
        {isGenerated ? (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full"
            onClick={() => setIsGenerated(false)}
          >
            Generate Another Certificate
          </button>
        ) : (
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-full"
            onClick={handleGenerateCertificate}
          >
            Generate Certificate
          </button>
        )}
      </div>
    </div>
  );
};

export default CertificateGenerator;
