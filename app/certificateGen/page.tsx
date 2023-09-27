"use client"
import React, { useState, useRef } from "react";
import { IoMdCheckmark } from "react-icons/io";
import { SiEthereum } from "react-icons/si";
import QRCode from "react-qr-code";
import html2canvas from "html2canvas";

const CertificateGenerator = ({}) => {
  const user = {
    name: "BALA SHIVA",
    gender: "MALE",
    dob: "JUNE 12, 2003",
    id: "6906-0531-5541",
  };
  
  const [isGenerated, setIsGenerated] = useState(false);
  const certificateRef = useRef(null);

  const handleGenerateCertificate = () => {
    // Implement certificate generation logic here (e.g., generate a PDF certificate)
    // In this example, we simply set a flag to indicate the certificate is generated.
    setIsGenerated(true);
  };

  const handleDownloadCertificate = () => {
    html2canvas(certificateRef.current).then((canvas) => {
      const link = document.createElement("a");
      link.download = "certificate.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    });
  };

  return (
    <div className="certificate-generator p-4 rounded-lg bg-gray-100 h-screen">
      <h2 className="text-3xl font-semibold text-center mb-4">Certificate Generation</h2>

      {/* Display user information */}
      <div className="mx-auto max-w-xl bg-white rounded-xl shadow-xl hover:shadow-md p-4 my-20" ref={certificateRef}>
        <div className="border-b-2  flex items-center justify-between pb-2">
          <img
            className="w-16 h-16"
            src="https://www.logopeople.in/wp-content/uploads/2013/01/government-of-india.jpg"
            alt="logo"
          />
          <div>
            <h1 className="text-2xl font-semibold">PAN CARD</h1>
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <div className="border-b-2 pb-2">
            <h1 className="text-md font-semibold">
              NAME : <span>{user.name}</span>
            </h1>
          </div>
          <div className="border-b-2 pb-2">
            <h1 className="text-md font-semibold">
              GENDER : <span>{user.gender}</span>
            </h1>
          </div>
          <div className="border-b-2 pb-2">
            <h1 className="text-md font-semibold">
              DOB : <span>{user.dob}</span>
            </h1>
          </div>
          <div className="border-b-2 pb-2">
            <h1 className="text-md font-semibold">
              ID : <span>{user.id}</span>
            </h1>
          </div>
        </div>
        <div className="flex flex-items-start gap-10">
          <div className="mt-4">
            <QRCode size={128} value={user.id} viewBox={`0 0 256 256`} />
          </div>
          <div className="mt-4 flex items-center">
            <SiEthereum className="w-12 h-12 p-2 bg-blue-800 border-2 border-white rounded-full text-white" />
            <div className="ml-2">
              <h1 className="bg-blue-800 text-white text-sm font-semibold py-1 px-2 rounded-full">
                D!VALIDATED
              </h1>
              {isGenerated && (
                <div className="mt-2">
                  <IoMdCheckmark className="text-4xl text-green-500" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-4">
        <button
          className="text-white bg-green-500 font-bold rounded-full shadow-lg hover:shadow-sm px-10 py-4"
          onClick={() => {
            handleGenerateCertificate();
            handleDownloadCertificate();
          }}
        >
          Generate Certificate
        </button>
      </div>
    </div>
  );
};

export default CertificateGenerator;