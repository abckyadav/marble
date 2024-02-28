import React from "react";

const Skeleton: React.FC = () => {
  return (
    <div className=" px-8 py-4 shadow-xl bg-[#FFFFFF] rounded-lg ed-700 animate-pulse">
      <div className="w-full py-4 flex gap-2 flex-col sm:flex-row reen-500">
        <div className="rounded-lg px-2 py-4 bg-[#F8F8F8] sm:w-1/4 lack flex flex-col">
          <div className="rounded-lg bg-gray-300 h-10 w-3/5 mb-4"></div>
          <div className="rounded-lg bg-gray-300 h-10 w-4/5 mb-4"></div>
        </div>
        <div className="rounded-lg px-2 py-4 bg-[#F8F8F8] sm:w-1/4 lack flex flex-col">
          <div className="rounded-lg bg-gray-300 h-10 w-3/5 mb-4"></div>
          <div className="rounded-lg bg-gray-300 h-10 w-4/5 mb-4"></div>
        </div>
        <div className="rounded-lg px-2 py-4 bg-[#F8F8F8] sm:w-1/4 lack flex flex-col">
          <div className="rounded-lg bg-gray-300 h-10 w-3/5 mb-4"></div>
          <div className="rounded-lg bg-gray-300 h-10 w-4/5 mb-4"></div>
        </div>
        <div className="rounded-lg px-2 py-4 bg-[#F8F8F8] sm:w-1/4 lack flex flex-col">
          <div className="rounded-lg bg-gray-300 h-10 w-3/5 mb-4"></div>
          <div className="rounded-lg bg-gray-300 h-10 w-4/5 mb-4"></div>
        </div>

        <div className="icon px-1 sm:w-4/4 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>

      <div className="rounded-lg py-4 bg-gray-300 h-[40vh] w-full mb-4"></div>
    </div>
  );
};

export default Skeleton;
