import React, { useState } from "react";
const Time = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("All-time");
  
    const toggleDropdown = () => setIsOpen(!isOpen);
  
    const handleOptionClick = (option: string) => {
      setSelectedOption(option);
      setIsOpen(false);
    };
  
    return (
      <div className="relative inline-block">
        <button
          onClick={toggleDropdown}
          className="w-84 px-4 py-2 bg-white text-gray-700 font-medium border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          <span >Timeframe: {selectedOption}</span>
          <svg
            className="w-5 h-5 ml-2 text-gray-400 inline-block"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        {isOpen && (
          <div className="absolute z-10 mt-2 bg-white border border-gray-300 rounded-md shadow-lg w-60">
            <ul className="py-1">
              {["Last 7 Days", "This Month", "This Year", "All-time"].map(
                (option) => (
                  <li
                    key={option}
                    className={`px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer ${
                      selectedOption === option ? "bg-blue-100" : ""
                    }`}
                    onClick={() => handleOptionClick(option)}
                  >
                    {option}
                  </li>
                )
              )}
            </ul>
          </div>
        )}
      </div>
    );
  };
  export default Time;
