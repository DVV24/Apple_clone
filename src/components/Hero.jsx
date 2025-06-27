import React from 'react';

function Hero() {
  return (
    <header
      className="relative h-screen w-full bg-cover bg-center bg-no-repeat text-white flex flex-col justify-center items-center p-4"
      style={{
        backgroundImage:
          "url('https://images.frandroid.com/wp-content/uploads/2020/11/vpavic_4291_20201113_0366-0.jpg')",
      }}
    >
         <h1 className="text-7xl  text-yellow-300 font-bold bg-opacity-0 rounded-2xl p-4 mb-8">
       MAC FOR STUDENTS
      </h1>
     
      <div className="absolute bottom-10">
        <button className="bg-white text-gray-500 border border-gray-500 rounded-full px-6 py-2 hover:bg-gray-500 hover:text-white transition">
        Learn more
        </button>
      </div>
    </header>
  );
}

export default Hero;
