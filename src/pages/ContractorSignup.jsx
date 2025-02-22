import React from "react";

const ContractorSignup = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Contractor Signup</h1>
      <form className="bg-white p-8 rounded-lg shadow-md w-96">
        <label className="block mb-2 font-semibold">Contractor ID:</label>
        <input
          type="text"
          className="w-full border border-gray-300 p-2 rounded-md mb-4"
          placeholder="Enter your Contractor ID"
        />
        <label className="block mb-2 font-semibold">Email:</label>
        <input
          type="email"
          className="w-full border border-gray-300 p-2 rounded-md mb-4"
          placeholder="Enter your Email"
        />
        <label className="block mb-2 font-semibold">Password:</label>
        <input
          type="password"
          className="w-full border border-gray-300 p-2 rounded-md mb-4"
          placeholder="Create a Password"
        />
        <button className="bg-green-600 text-white px-4 py-2 rounded-md w-full hover:bg-green-700">
          Signup
        </button>
      </form>
    </div>
  );
};

export default ContractorSignup;
