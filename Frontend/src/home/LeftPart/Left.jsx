import React from "react";
import Search from "./Search";
import Users from "./Users";
import Logout from "./Logout";

const Left = () => {
  return (
    <div className="w-[30%] h-full bg-gray-900 text-gray-200 border-r border-gray-800 shadow-xl flex flex-col">
      {/* Search Bar */}
      <div className="p-4 border-b border-gray-800">
        <Search />
      </div>

      {/* Users List (Scrollable) */}
      <div className="flex-1 overflow-y-auto p-4">
        <Users />
      </div>

      {/* Logout Button */}
      <div className="p-4 border-t border-gray-800">
        <Logout />
      </div>
    </div>
  );
};

export default Left;
