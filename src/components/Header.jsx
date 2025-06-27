import React from 'react';

function Header() {
  return (
    <header
      className="relative h-screen w-full bg-cover bg-center bg-no-repeat text-white flex flex-col justify-center items-center p-4"
      style={{
        backgroundImage:
          "url('https://akm-img-a-in.tosshub.com/indiatoday/images/story/202505/apple-devices-021857361-16x9_0.jpg?VersionId=yyXy4ZH6Icb5PriRqA2O9ZVSlBkz3sau')",
      }}
    >
      <h1 className="text-4xl  font-medium  bg-blue-500 bg-opacity-100 rounded-2xl p-4 mb-8">
        Choose <br/>  Your
        <br/> Apple <br/> Products
      </h1>

      <div className="absolute bottom-10">
        <button className="bg-white text-blue-500 border border-blue-500 rounded-full px-6 py-2 hover:bg-blue-500 hover:text-white transition">
          Shop
        </button>
      </div>
    </header>
  );
}

export default Header;
