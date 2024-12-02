import React, { useState } from "react";

const People = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const handleItemClick = (item: string) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((i) => i !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const handleClear = () => {
    setSelectedItems([]);
  };

  return (
    <div className="relative">
      {/* Selected Items */}
      <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
        {selectedItems.map((item, index) => (
          <span
            key={index}
            className="bg-gray-200 text-black rounded-md px-2 py-1 mr-2"
          >
            {item}{" "}
            <span
              className="text-sm cursor-pointer"
              onClick={() => handleItemClick(item)}
            >
              ×
            </span>
          </span>
        ))}
        <button
          className="flex-1 text-left pl-2 text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedItems.length > 0 ? "Multiple Selected" : "Select People"}
        </button>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute z-10 w-full bg-white shadow-md rounded-md mt-2">
          <div className="p-2">
            {/* Groups Section */}
            <h2 className="text-sm font-semibold text-black">Groups</h2>
            <div className="flex items-center">
              <input
                type="radio"
                id="allUsers"
                name="group"
                value="All Users"
              />
              <label htmlFor="allUsers" className="ml-2 text-black">
                All Users (400)
              </label>
            </div>
            <div className="flex items-center">
              <input type="radio" id="managers" name="group" value="Managers" />
              <label htmlFor="managers" className="ml-2 text-black">
                Managers (14)
              </label>
            </div>
            <div className="flex items-center">
              <input type="radio" id="trainers" name="group" value="Trainers" />
              <label htmlFor="trainers" className="ml-2 text-black">
                Trainers (4)
              </label>
            </div>

            {/* Users Section */}
            <h2 className="text-sm font-semibold text-black mt-4">Users</h2>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="adrianLu"
                name="user"
                value="Adrian Lu"
                checked={selectedItems.includes("Adrian Lu")}
                onChange={() => handleItemClick("Adrian Lu")}
              />
              <label htmlFor="adrianLu" className="ml-2 text-black">
                Adrian Lu
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="evelynHamilton"
                name="user"
                value="Evelyn Hamilton"
                checked={selectedItems.includes("Evelyn Hamilton")}
                onChange={() => handleItemClick("Evelyn Hamilton")}
              />
              <label htmlFor="evelynHamilton" className="ml-2 ">
                Evelyn Hamilton
              </label>
            </div>
          </div>

          {/* Clear Button */}
          <div className="p-2 border-t">
            <button
              className="w-full bg-blue-500 text-white py-2 rounded-md"
              onClick={handleClear}
            >
              Clear
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default People;
