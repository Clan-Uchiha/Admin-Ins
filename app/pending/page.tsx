"use client";
import React from 'react'
import { useState } from "react";
import { useEffect } from 'react';
import {IoSearch} from 'react-icons/io5'
import Link from 'next/link'


type Props = {}

const page = (props: Props) => {
    const studentsData = [
        {
          id: 1,
          registrationNumber: "2021001",
          name: "John Doe",
          mobileNumber: "123-456-7890",
          department: "Computer Science",

        },
       
        {
          id: 2,
          registrationNumber: "2021002",
          name: "Jane Smith",
          mobileNumber: "987-654-3210",
          department: "Electrical Engineering",

        },
        {
          id: 3,
          registrationNumber: "2021003",
          name: "Bob Johnson",
          mobileNumber: "555-555-5555",
          department: "Mechanical Engineering",

        },
        {
          id: 4,
          registrationNumber: "2021004",
          name: "Alice Brown",
          mobileNumber: "111-222-3333",
          department: "Physics",

        },
        {
          id: 5,
          registrationNumber: "2021005",
          name: "Ella Wilson",
          mobileNumber: "444-333-2222",
          department: "Mathematics",

        },
        {
          id: 6,
          registrationNumber: "2021006",
          name: "David Lee",
          mobileNumber: "777-888-9999",
          department: "Chemistry",

        },
        {
          id: 7,
          registrationNumber: "2021007",
          name: "Grace Turner",
          mobileNumber: "666-999-8888",
          department: "Biology",

        },
        {
          id: 8,
          registrationNumber: "2021008",
          name: "Michael Clark",
          mobileNumber: "222-333-4444",
          department: "History",

        },
        {
          id: 9,
          registrationNumber: "2021009",
          name: "Sophia Harris",
          mobileNumber: "777-555-6666",
          department: "English",

        },
        {
          id: 10,
          registrationNumber: "2021010",
          name: "Oliver Davis",
          mobileNumber: "999-888-7777",
          department: "Psychology",

        },
      ];
      const [searchText, setSearchText] = useState("");
      const [showSearchInput, setShowSearchInput] = useState(false);
    
      const handleSearchClick = () => {
        setShowSearchInput(!showSearchInput);
      };
    
      const filteredStudents = studentsData.filter((student) =>
        student.name.toLowerCase().includes(searchText.toLowerCase())
      );

      // const router = useRouter();


  return (
    <div className="text-white overflow-hidden">
    <div className="bg-gray-900 flex h-72 py-2 px-6">
      <div className="font-bold w-full text-yellow-400">
        <div className="flex justify-between w-full mt-10">
          <h1 className="text-4xl mx-10 font-bold text-yellow-400">
            Student List
          </h1>
          <div className="mx-16 flex gap-0">
            <div>
              {showSearchInput && (
                <input
                  type="text"
                  placeholder="Search Students ..."
                  className={`text-xl outline-none bg-transparent border-b-[1px] transition-all duration-500 px-6 mt-2 rounded-lg focus:outline-none`}
                  onChange={(e) => setSearchText(e.target.value)}
                />
              )}
            </div>
            <button className="text-white" onClick={handleSearchClick}>
              <IoSearch className="text-3xl" />
            </button>
          </div>
        </div>
      </div>
    </div>

    <div className="border-blue-900 rounded-xl">
      <div className="">
        <table className="mt-10 mx-10 text-black absolute bg-white top-36 -left-2 rounded-md w-[88rem] shadow border pr-10 mr-32">
          <thead className="rounded-md text-align-baseline">
            <tr className="">
              <th className="px-6 py-3 bg-gray-100 text-gray-700 text-left">
                Registration Number
              </th>
              <th className="px-6 py-3 bg-gray-100 text-gray-700 text-left">
                Name
              </th>
              <th className="px-6 py-3 bg-gray-100 text-gray-700 text-left">
                Unique Id with Institution
              </th>
              <th className="px-6 py-3 bg-gray-100 text-gray-700 text-left">
                Certificate Type
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student) => (
              <tr key={student.id} className="border-t border-gray-200">
                <td className="px-6 py-4">{student.registrationNumber}</td>
                <td className="px-6 py-4">{student.name}</td>
                <td className="px-6 py-4">{student.mobileNumber}</td>
                <td className="px-6 py-4">{student.department}</td>
                <td className="px-6 py-4">{student.gpa}</td>
                <td className="px-6 py-4">
                  <button 
                  className="bg-gray-900 hover:bg-gray-400 text-white font-bold py-1 px-4 rounded-full">
                   <Link href={`/pending/verify/${student.registrationNumber}`} >
                   View Details
                   </Link>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
  )
}

export default page



