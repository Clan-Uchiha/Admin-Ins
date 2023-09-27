// components/GlassmorphismCard.js
"use client"
import React from 'react';

const GlassmorphismCard = () => {
  return (
    <div className="bg-opacity-40 backdrop-blur-md bg-blue-100 border-l-4   rounded-lg p-6 shadow-lg">
      <div className="flex">
        <div className="w-3/4">
        {/* <img src='https://ibb.co/0y34gc7' alt='logo'/> */}
          <h2 className="text-2xl font-semibold mb-4 text-white">Pending Request</h2>
        </div>
        <div>
            25
        </div>
      </div>
    </div>
  );
};

export default GlassmorphismCard;