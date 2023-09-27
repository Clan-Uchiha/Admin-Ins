"use client"
import React from 'react';

const Emblem = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-64 h-64 mx-auto mt-10"
      viewBox="0 0 200 200"
    >
      {/* Rounded Rectangle */}
      <rect
        x="10"
        y="10"
        width="180"
        height="140"
        rx="20"
        ry="20"
        fill="#FCD34D"
      />
      
      {/* Small Rectangle */}
      <rect
        x="70"
        y="30"
        width="60"
        height="40"
        rx="10"
        ry="10"
        fill="#E5E7EB"
      />

      {/* Letter "G" */}
      <text
        x="95"
        y="65"
        fontSize="36"
        fontFamily="Arial"
        fill="#000"
        fontWeight="bold"
      >
        G
      </text>

      {/* Text */}
      <text
        x="20"
        y="100"
        fontSize="16"
        fontFamily="Arial"
        fill="#000"
      >
        Verified by Validated
      </text>

      {/* Underline */}
      <line x1="20" y1="116" x2="180" y2="116" stroke="#000" strokeWidth="2" />

      {/* Year */}
      <text
        x="90"
        y="150"
        fontSize="18"
        fontFamily="Arial"
        fill="#000"
      >
        2022
      </text>
    </svg>
  );
};

export default Emblem;
