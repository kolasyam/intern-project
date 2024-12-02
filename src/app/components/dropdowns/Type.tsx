import React from 'react'

const Type = () => {
  return (
<div className="flex items-center">
      <select className="w-48 px-4 py-2 bg-white text-gray-700 font-medium border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-300">
        <option value="All">Topic: All</option>
        <option value="Topic A">Topic A</option>
        <option value="Topic B">Topic B</option>
      </select>
    </div>
  )
}

export default Type
