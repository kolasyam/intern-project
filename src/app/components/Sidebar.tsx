import { FaBolt, FaUsers, FaChartLine, FaRegFileAlt } from "react-icons/fa";
import { FiSettings, FiHelpCircle } from "react-icons/fi";
import tesla from '/images/tesla.png'
import sidenav from '/images/sidenavimage.jpeg'
// import logo from '/images/logo.png'

import Image from "next/image";

export default function Sidebar() {
  return (
    <div className="md:block w-64 h-screen bg-white border-r border-gray-200 flex flex-col justify-between p-4">
      {/* Logo */}
      <div>
        <div className="mb-8">
          <Image src={tesla} alt="Tesla Logo" className="h-8 mx-auto" width={138} height={17}/>
        </div>

        {/* Navigation */}
        <nav className="space-y-2">
          <a
            href="#"
            className="flex items-center px-4 py-2 text-sm font-medium text-blue-600 bg-blue-100 rounded-lg"
          >
            <FaChartLine className="mr-3" />
            Reports
          </a>
          <a
            href="#"
            className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg"
          >
            <FaBolt className="mr-3" />
            Library
          </a>
          <a
            href="#"
            className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg"
          >
            <FaUsers className="mr-3" />
            People
          </a>
          <a
            href="#"
            className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg"
          >
            <FaRegFileAlt className="mr-3" />
            Activities
          </a>
        </nav>

        {/* Support */}
        <div className="mt-8">
          <p className="px-4 text-xs text-gray-500 uppercase">Support</p>
          <a
            href="#"
            className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg"
          >
            <FiHelpCircle className="mr-3" />
            Get Started
          </a>
          <a
            href="#"
            className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg"
          >
            <FiSettings className="mr-3" />
            Settings
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t pt-60">
        <div className="flex items-center">
          <Image
            src={sidenav}
            alt="User Avatar"
            className="w-10 h-10 rounded-full"
          />

          <div className="ml-3">
            <p className="text-sm font-medium text-gray-700">Sam Wheeler</p>
            <p className="text-xs text-gray-500">samwheeler@example.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}