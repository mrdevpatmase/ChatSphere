import React from "react";
import ChatUser from "./ChatUser";
import Messages from "./Messages";
import TypeSend from "./TypeSend";
import useConversation from "../../zustand/useConversation";
import { useAuth } from "../../context/AuthProvider.jsx";

const Right = () => {
  const { selectedConversation } = useConversation();

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-950">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <div
          key={selectedConversation?._id} // 🔹 Helps React optimize re-renders
          className="h-full w-[95%] max-w-[1400px] bg-gray-900 text-gray-200 flex flex-col border-l border-gray-800 transition-all duration-300 ease-in-out"
        >
          {/* 🔹 Chat User Header */}
          <div className="p-4 border-b border-gray-800 bg-gray-800">
            <ChatUser />
          </div>

          {/* 🔹 Messages Section (Expands Fully) */}
          <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
            <Messages />
          </div>

          {/* 🔹 Input Section */}
          <div className="p-4 border-t border-gray-800 bg-gray-800">
            <TypeSend />
          </div>
        </div>
      )}
    </div>
  );
};

export default Right;

// ✅ NoChatSelected Component (Fills Entire Screen)
const NoChatSelected = () => {
  const [authUser] = useAuth();

  return (
    <div className="flex flex-col items-center justify-center h-full w-full text-center bg-gray-900 text-gray-200">
      <h1 className="text-3xl font-bold">
        Welcome,{" "}
        <span className="text-blue-500">{authUser?.user.fullName}</span> 👋
      </h1>
      <p className="text-gray-400 text-lg mt-2">No chat selected</p>
    </div>
  );
};
