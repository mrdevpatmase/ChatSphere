import React from "react";

function Loading() {
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-gray-900 text-white">
      <div className="space-y-4 p-4 w-full max-w-md">
        {/* Chat Bubble Loading Skeletons */}
        <div className="flex items-start space-x-2">
          <div className="w-10 h-10 bg-gray-700 rounded-full animate-pulse"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-700 rounded w-40 animate-pulse"></div>
            <div className="h-4 bg-gray-700 rounded w-32 animate-pulse"></div>
          </div>
        </div>

        <div className="flex items-start space-x-2 justify-end">
          <div className="space-y-2 text-right">
            <div className="h-4 bg-gray-700 rounded w-36 animate-pulse"></div>
            <div className="h-4 bg-gray-700 rounded w-28 animate-pulse"></div>
          </div>
          <div className="w-10 h-10 bg-gray-700 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
