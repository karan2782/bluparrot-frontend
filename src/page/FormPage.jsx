import React from "react";

function FormPage() {
  return (
    <div className="bg-[url('/content.jpg')] bg-cover bg-center bg-no-repeat flex flex-col lg:flex-row justify-around items-center py-10 px-5 lg:px-0 min-h-screen">

      {/* Content Section */}
      <div className="lg:w-1/3 text-white text-center mb-10 lg:mb-0 px-4 lg:px-0">
        <h2 className="text-2xl lg:text-4xl font-semibold mb-4">
          We solve digital problems with an outstanding creative flare
        </h2>
        <p className="text-sm lg:text-base leading-relaxed">
          We have created a new product that will help designers, developers, and
          companies create websites for their startups quickly and easily.
        </p>
      </div>

      {/* Form Section */}
      <div className="lg:w-1/3 bg-white border rounded-lg shadow-lg p-6">
        <div className="flex justify-between border-b mb-6">
          <p className="text-center text-primary py-3 border-b-2 border-primary w-1/2">
            Signup
          </p>
          <p className="text-center py-3 border-b-2 border-gray-200 w-1/2 text-primary">
            Login
          </p>
        </div>

        <div className="flex flex-col items-center space-y-6">
          <input
            className="w-full lg:w-3/4 border border-gray-300 rounded-full px-4 py-3 text-lg"
            type="email"
            placeholder="Your email"
          />
          <input
            type="password"
            placeholder="Your password"
            className="w-full lg:w-3/4 border border-gray-300 rounded-full px-4 py-3 text-lg"
          />
          <button className="w-full lg:w-3/4 bg-teal-500 text-white font-semibold py-3 rounded-full hover:bg-teal-600 transition">
            Create an account
          </button>
          <button className="w-full lg:w-3/4 bg-blue-500 text-white font-semibold py-3 rounded-full hover:bg-blue-600 transition">
            Login via Twitter
          </button>
        </div>
      </div>
    </div>
  );
}

export default FormPage;
