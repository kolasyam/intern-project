
import axios from "axios";
import Time from "./dropdowns/Time";
import Type from "./dropdowns/Type";
import taskData from "../dashboard/task-data.json";
import People from "./dropdowns/People";
export default function Header() {
    const handleDownload = async () => {
        try {
          const apiSecret = taskData.api_secret;
    
          if (!apiSecret) {
            throw new Error("API secret not found in the JSON file.");
          }

        const postResponse =await axios.post('https://testd5-img.azurewebsites.net/api/imgdownload', apiSecret, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
    
          // Handle success
          console.log("Response from API:", postResponse.data);
          console.log('Secret sent successfully');
          alert("Download successful!");
        } catch (error) {
          // Handle errors
          console.error("Error during download:", error);
          alert("Failed to download. Check the console for details.");
        }
      };
  return (
    <div className="p-6 bg-gray-50">
      {/* Header Section */}
      <div className="flex justify-between items-center pb-4 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-gray-800">Reports</h1>
        <button
        onClick={handleDownload}
          className="flex items-center px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4v16m8-8H4"
            />
          </svg>
          Download
        </button>
      </div>

      <div className="flex flex-row items-center justify-between mt-6">
        <div className="flex items-center w-64">
          <Time />
        </div>

        <div className="flex items-center">
          <People />
        </div>

        <Type />
      </div>
    </div>
  );
}
