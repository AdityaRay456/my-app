import React from "react";

const GovernmentLogin = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Government Login</h1>
      <form className="bg-white p-8 rounded-lg shadow-md w-96">
        <label className="block mb-2 font-semibold">Government ID:</label>
        <input
          type="text"
          className="w-full border border-gray-300 p-2 rounded-md mb-4"
          placeholder="Enter your Government ID"
        />
        <label className="block mb-2 font-semibold">Password:</label>
        <input
          type="password"
          className="w-full border border-gray-300 p-2 rounded-md mb-4"
          placeholder="Enter your Password"
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md w-full hover:bg-blue-700">
          Login
        </button>
      </form>
    </div>
  );
};

export default GovernmentLogin;
