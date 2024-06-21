import React from 'react'

export default function college() {
  return (
      <div className="flex flex-col md:flex-row">
        {/* Video Section (65-70%) */}
        <div className="w-full md:w-2/3">
          {/* Embed your video here */}
          <div className="relative overflow-hidden" style={{ paddingBottom: '56.25%' }}>
            {/* Replace the iframe with your actual video embed */}
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/watch?v=sYwZJI1933A"
              title="Embedded Video"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </div>
  
        {/* Information Section */}
        <div className="w-full md:w-1/3 p-4">
          <div className="bg-white rounded-lg p-6 h-full">
            <h2 className="text-2xl font-bold mb-4">College Information</h2>
            <p className="text-lg mb-4">Details about your college...</p>
            {/* Additional details */}
            <ul className="list-disc ml-6">
              <li>Location: Your college location</li>
              <li>Program: Your program</li>
              <li>Year: Your current year</li>
            </ul>
          </div>
        </div>
      </div>
    );
};



