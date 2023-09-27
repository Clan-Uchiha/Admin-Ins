"use client";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

interface RequestData {
  Caption: String; 
  DOB: String;
  Gender: String;
  PhNo: String;
  State: String;
  createdAt: String;
  email: String;
  fullName: String;
  issueDate: String;
  updatedAt: String;
  _id: String;

  // add other properties here
}

const page = () => {
  const [data, setData] = useState<RequestData[]>([]);
  useEffect(() => {
    try {
      axios.get("http://localhost:8000/api/requests").then((res) => {
        console.log(res);
        setData(res.data);
      });
    } catch (err) {
      console.log(err);
    }
    // console.log('hello')
  }, []);

  return (
    <>
      {
        // code here
        data.map((item) => {
          return (
            <div>
              <h1>{item.fullName}</h1>
            </div>
          );
        })
      }
    </>
  );
};

// export default page;

//         const page = () => {
//           const [data, setData] = useState<RequestData[]>([]);

//           useEffect(() => {
//             try {
//               axios.get('http://localhost:8000/api/requests').then((res) => {
//                 console.log(res);
//                 setData(res.data);
//               });
//             } catch (err) {
//               console.log(err);
//             }
//           }, []);

//           return (
//             <>

//             </>
//           );
//         };

//         export default page;

//     </>
//   );

export default page;
