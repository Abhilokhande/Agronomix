import React from 'react';
import profile from "./fergusson.jpg"; // Assuming this is your image import

const College = () => {
  return (
    <div className="relative h-screen">
      <img className="absolute inset-0 w-full h-full object-cover" src={"./fergusson.jpg"} alt="Profile" />
      <div className="absolute inset-0 flex justify-center items-center text-white text-4xl font-bold text-center">
        Text Overlay Example
      </div>
    </div>
  );
};

export default College;
