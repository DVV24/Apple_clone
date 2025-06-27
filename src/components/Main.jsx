import React from 'react';

function Main() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 w-full">
    
      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center text-center px-6 py-12"
        style={{
          backgroundImage:
            "url('https://th.bing.com/th/id/OIP.26BTLmqIr5wvgVH2n6QWhAHaHa?r=0&pid=ImgDet&w=474&h=474&rs=1&cb=idpwebpc2')",
        }}
      >
        <h2 className="text-4xl md:text-5xl font-semibold text-black">iOS 18</h2>
        <p className="mt-2 text-lg md:text-xl text-gray-800 bg-white bg-opacity-60 px-4 rounded">
          Personalise your iPhone with 10 new Indian languages.
        </p>
        <a href="#" className="text-blue-600 mt-4 hover:underline font-medium">
          Learn more &gt;
        </a>
      </div>

     
      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center text-center px-6 py-12"
        style={{
          backgroundImage:
            "url('https://www.macworld.com/wp-content/uploads/2023/01/Apple-iPad-10-inch-2022-review_1-1.jpg?quality=50&strip=all')",
        }}
      >
        <h2 className="text-4xl md:text-5xl font-semibold text-white drop-shadow-lg">
          iPad <span className="text-blue-200 font-light">air</span>
        </h2>
        <p className="mt-2 text-lg md:text-xl text-white bg-black bg-opacity-40 px-4 rounded">
          Now supercharged by the M3 chip.
        </p>
        <div className="mt-4 flex gap-4">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">
            Learn more
          </button>
          <button className="border border-blue-600 text-blue-600 bg-white bg-opacity-80 px-6 py-2 rounded-full hover:bg-blue-100">
            Buy
          </button>
        </div>
        
      </div>
    </section>
  );
}

export default Main;
