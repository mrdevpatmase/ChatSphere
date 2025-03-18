import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 px-6">
      {/* Hero Section */}
      <div className="text-center max-w-3xl">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          Welcome to ChatSphere
        </h1>
        <p className="text-gray-300 mt-4 text-lg">
          Connect with your friends, family, and colleagues in real-time with
          our seamless chat experience.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex gap-4 justify-center">
          <a
            href="/signup"
            className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-all duration-200"
          >
            Get Started
          </a>
          <a
            href="/login"
            className="px-6 py-3 bg-gray-700 text-white font-semibold rounded-lg shadow-md hover:bg-gray-600 transition-all duration-200"
          >
            Login
          </a>
        </div>
      </div>

      {/* Feature Section */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Feature 1 */}
        <div className="p-6 bg-gray-800 bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg text-center border border-gray-700">
          <h3 className="text-xl font-semibold text-blue-400">
            Instant Messaging
          </h3>
          <p className="text-gray-300 mt-2 text-sm">
            Chat with friends in real-time with zero delays.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="p-6 bg-gray-800 bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg text-center border border-gray-700">
          <h3 className="text-xl font-semibold text-purple-400">
            Secure & Private
          </h3>
          <p className="text-gray-300 mt-2 text-sm">
            End-to-end encryption ensures your chats stay private.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="p-6 bg-gray-800 bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg text-center border border-gray-700">
          <h3 className="text-xl font-semibold text-green-400">
            Multi-Platform
          </h3>
          <p className="text-gray-300 mt-2 text-sm">
            Access ChatSphere on web, mobile, and desktop.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
