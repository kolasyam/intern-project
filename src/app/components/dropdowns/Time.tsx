import React, { useState } from "react";

// const Time = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedOption, setSelectedOption] = useState("This Month");

//   const toggleDropdown = () => setIsOpen(!isOpen);

//   const handleOptionClick = (option: string) => {
//     setSelectedOption(option);
//     setIsOpen(false);
//   };

//   return (
//     <div className="relative inline-block text-left">
//       {/* Selected Option */}
//       <button
//         onClick={toggleDropdown}
//         className="inline-flex justify-between items-center w-48 px-4 py-2 bg-white text-gray-700 font-medium border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//       >
//         <span>Timeframe: {selectedOption}</span>
//         <svg
//           className="w-5 h-5 ml-2 -mr-1 text-gray-400"
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M19 9l-7 7-7-7"
//           />
//         </svg>
//       </button>

//       {/* Dropdown Options */}
//       {isOpen && (
//         <div className="absolute z-10 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg">
//           <ul className="py-1">
//             {["Last 7 Days", "This Month", "This Year", "Custom"].map(
//               (option) => (
//                 <li
//                   key={option}
//                   className={`px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer ${
//                     selectedOption === option ? "bg-blue-100" : ""
//                   }`}
//                   onClick={() => handleOptionClick(option)}
//                 >
//                   {option}
//                 </li>
//               )
//             )}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Time;
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
        {/* Selected Option */}
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
  
        {/* Dropdown Options */}
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
//   const handleDownload = async () => {
//     try {
//       const apiSecret = "123abc"; // Replace with dynamic retrieval logic if needed.

//       const response = await axios.post(
//         "https://testd5-img.azurewebsites.net/api/imgdownload",
//         { api: apiSecret },
//         { headers: { "Content-Type": "application/json" } }
//       );

//       const base64Image = response.data; // Assuming the response is a Base64 string.
//       const link = document.createElement("a");
//       link.href = `data:image/png;base64,${base64Image}`;
//       link.download = "downloaded-image.png";
//       link.click();
//     } catch (error) {
//       console.error("Error downloading image:", error);
//       alert("Failed to download the image.");
//     }
//   };