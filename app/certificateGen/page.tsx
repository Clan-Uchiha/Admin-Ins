"use client"
import React, { useState, useRef, useCallback } from "react";
import { IoMdCheckmark } from "react-icons/io";
import { useStorageUpload } from "@thirdweb-dev/react";
import { SiEthereum } from "react-icons/si";
import QRCode from "react-qr-code";
import html2canvas from "html2canvas";
import { useDropzone } from "react-dropzone";

const CertificateGenerator = () => {
  const user = {
    name: "BALA SHIVA",
    gender: "MALE",
    dob: "JUNE 12, 2003",
    id: "6906-0531-5541",
  };

  const [isGenerated, setIsGenerated] = useState(false);
  const certificateRef = useRef(null);
  const [uris, setUris] = useState<string[]>([]);

  const { mutateAsync: upload } = useStorageUpload();

  const handleGenerateCertificate = async () => {
    try {
      setIsGenerated(true);

      // Capture the certificate component as an image
      const canvas = await html2canvas(certificateRef.current);

      // Create a data URL from the canvas
      const dataURL = await canvas.toDataURL("image/png");

      // Create a download link
      const link = document.createElement("a");
      link.href = dataURL;
      link.download = "certificate.png";

      // Trigger the download
      link.click();
    } catch (error) {
      console.error("Error generating certificate:", error);
    }
  };

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      const _uris = await upload({ data: acceptedFiles });
      setUris(_uris);
      console.log(_uris);
    },
    [upload]
  );
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
<div className="certificate-generator p-4 rounded-lg bg-gray-100 h-screen">
      <h2 className="text-4xl font-semibold text-center mb-6">
        Certificate Generator
      </h2>

      {/* Display user information */}
      <div
        ref={certificateRef}
        className="w-[75%] h-[500px] bg-white rounded-xl shadow-xl hover:shadow-md my-20 mx-auto"
      >
        <div className="flex">
          <div className="w-7/12 p-12">
            <h1 className="text-4xl mb-6">Google Summer of Code</h1>
            <p className="text-gray-400 mb-6 text-xl">
              This is to certify that
            </p>
            <h2 className="text-5xl text-gray-700 mb-4">{user.name}</h2>
            <p className="text-xl mb-8 w-[75%]">
              has completed Google Summer of Code 2022, contributing to the
              open-source organization.
            </p>
            <p className="text-4xl mb-12">MIND GEEK</p>
            <p className="text-xl">June 12 - August 16, 2022</p>
          </div>
          <div className="w-4/12 overflow-hidden bg-gray-400/20 p-10">
            <div className="mt-10">
              <QRCode value="https://www.google.com" />
            </div>
            <div className="relative mt-10">
              <div className="top-6 border-2 absolute overflow-hidden left-10 bg-black rounded-xl text-white p-[2px] px-8">
                <h1 className="text-2xl font-semibold">Dvalidated</h1>
              </div>
              <div className="h-14 w-14 z-[1]"></div>
              <img
                className="rounded-full w-14 h-14 -mt-10 z-[1000] absolute object-cover"
                src="https://img.freepik.com/free-vector/bitcoin-technology-background-with-circuit-lines_1017-31510.jpg?w=2000&t=st=1695854314~exp=1695854914~hmac=db5f6a0226c02d81c169dc5d3c9ea26d8abf506ddb59e8d58f6a7f32ae40ec06"
                alt="Profile"
              />
            </div>
          </div>
          <div className="w-1/12"></div>
        </div>
      </div>



      <div className="text-center mt-4">
        <button
          className="text-white bg-green-500 font-bold rounded-full shadow-lg hover:shadow-sm px-10 py-4"
          onClick={handleGenerateCertificate}
        >
          Generate Certificate
        </button>
      </div>
      <div {...getRootProps()} className="border p-3 justify-center flex items-center border-dashed mt-3">
        <input {...getInputProps()} />
        <button>add files here to upload into ipfs</button>
      </div>
    </div>
  );
};

export default CertificateGenerator;
