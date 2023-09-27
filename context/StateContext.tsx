
import React, { createContext, useContext, ReactNode } from 'react';
import { useAddress, useContract, useContractWrite, ConnectWallet, useContractRead } from '@thirdweb-dev/react';

type StateContextType = {
  contract: any;
  address: string | null;
//   connect: () => void;
  generateCertificate: (form: CertificateForm) => Promise<void>;
  getAllCertificates: () => Promise<void>;
};

type CertificateForm = {
  _title: any;
  _studentName: any;
  _description: any;
  _image: any;
  _instituteName?: any;
};

interface GetAllCertificatesResponse {
  certificates: Certificate[];
  isLoading: boolean;
  // Add other properties if they exist in the response
}

interface Certificate {
  owner: string;
  title: string;
  description: string;
  image: string;
}

const StateContext = createContext<StateContextType | undefined>(undefined);

export const StateContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const {contract} = useContract('0xf2197dBa16644789719368d0c9f95c7179C36d73');
  const { mutateAsync: generateCertificate, isLoading } = useContractWrite(contract, "generateCertificate")

  const address = useAddress() || null;
//   const connect = () => {
//     ConnectWallet();
//   };


  const call  = async (form: CertificateForm) => {
    try {
      console.log("Calling contract with form:", form);
      const data = await generateCertificate({ args: [form._instituteName || "", form._title, form._description, form._studentName, form._image] });
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  }

  const getAllCertificates = async () => {
    const { data, isLoading } = useContractRead(contract, "getAllCertificates", [/* args */]);
    console.log(data);
  };

  return (
    <StateContext.Provider
      value={{
        address,
        contract,
        generateCertificate: call,
        getAllCertificates
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = (): StateContextType => {
  const context = useContext(StateContext);
  if (context === undefined) {
    throw new Error('useStateContext must be used within a StateContextProvider');
  }
  return context;
};
