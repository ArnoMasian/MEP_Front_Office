import React from "react";

const page = () => {
  return (
    <div className="flex items-center justify-center  px-4 sm:px-0 ">
      <div className="max-w-2xl w-full p-10 bg-white border-4 border-red-500 rounded-lg shadow-2xl">
        <div className="font-satoshi font-extrabold text-8xl text-center text-red-600 mb-20">
          ACCESS DENIED
        </div>
        <div className="bg-red-700 w-30">
          <p className="text-center mb-5 font-bold text-white font-satoshi text-xl">
            403 Forbidden
          </p>
        </div>

        <div className="font-satoshi font-bold text-xl text-center text-red-900">
          Login was unsuccessful due to discrepancies in the information
          provided. Please verify your credentials or details and try again.
        </div>
      </div>
    </div>
  );
};

export default page;
