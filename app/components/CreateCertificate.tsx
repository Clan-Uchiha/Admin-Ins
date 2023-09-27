import React, { useState } from 'react';
import { ethers } from 'ethers';
import { useStateContext } from '../../context/StateContext';


const CreateCertificate = () => {
  const {generateCertificate} = useStateContext();
  const [studentName, setStudentName] = useState(' ');
  const [title, setTitle] = useState(' ');
  const [description, setdescription] = useState(' ');
  const [dob, setdob] = useState(' ');
  const [image, setImage] = useState(' ');


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await generateCertificate({
      _studentName: studentName,
      _title: title,
      _description: description,
      _image: image
    })
    // console.log(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          {/* <label htmlFor="input1">Input 1</label> */}
          <input
            type="text"
            id="input1"
            name="input1"
            value={studentName}
            onChange={(e)=>{setStudentName(e.target.value)}}
            className="border p-2"
          />
        </div>
        <div>
          <label htmlFor="input2">Input 2</label>
          <input
            type="text"
            id="input2"
            name="input2"
            value={title}
            onChange={(e)=>{setTitle(e.target.value)}}
            className="border p-2"
          />
        </div>
        <div>
          <label htmlFor="input3">Input 3</label>
          <input
            type="text"
            id="input3"
            name="input3"
            value={description}
            onChange={(e)=>{setdescription(e.target.value)}}
            className="border p-2"
          />
        </div>
        <div>
          <label htmlFor="input4">Input 4</label>
          <input
            type="text"
            id="input4"
            name="input4"
            value={dob}
            onChange={(e)=>{setdob(e.target.value)}}
            className="border p-2"
          />
        </div>
        <div>
          <label htmlFor="input5">Input 5</label>
          <input
            type="text"
            id="input5"
            name="input5"
            value={image}
            onChange={(e)=>{setImage(e.target.value)}}
            className="border p-2"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateCertificate;
