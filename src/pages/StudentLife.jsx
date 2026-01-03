
import React from 'react';

const StudentLife = () => {
  return (
    <div className="min-h-screen pt-16 px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-[#003366]">
        Student Life
      </h1>
      
      {/* Introductory Video Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-[#003366]">
          Welcome to Our School
        </h2>
        <div className="aspect-video max-w-4xl mx-auto bg-gray-200 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">Video Player Placeholder</p>
          {/* Replace with actual video embed */}
          {/* <iframe src="your-video-url" className="w-full h-full rounded-lg"></iframe> */}
        </div>
      </section>

      {/* Galleries Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-[#003366]">
          School Galleries
        </h2>
        
        {/* Extracurricular Activities Gallery */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold mb-4 text-[#FFD700] bg-[#003366] p-2 rounded">
            Extracurricular Activities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-gray-100 h-48 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Activity Image {item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Clubs Gallery */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold mb-4 text-[#FFD700] bg-[#003366] p-2 rounded">
            Clubs & Societies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-gray-100 h-48 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Club Image {item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Events Gallery */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold mb-4 text-[#FFD700] bg-[#003366] p-2 rounded">
            School Events
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-gray-100 h-48 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Event Image {item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudentLife;