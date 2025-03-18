import React from "react";

function Message({ message }) {
  const authUser = JSON.parse(localStorage.getItem("ChatApp"));
  const itsMe = message.senderId === authUser.user._id;

  const createdAt = new Date(message.createdAt);
  const formattedTime = createdAt.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div
      className={`flex ${itsMe ? "justify-end" : "justify-start"} p-2 w-full`}
    >
      <div
        className={`px-4 py-2 rounded-2xl max-w-sm break-words shadow-lg ${
          itsMe
            ? "bg-gray-500 text-white rounded-br-none"
            : "bg-gray-700 text-white rounded-bl-none"
        }`}
      >
        <p className="text-sm">{message.message}</p>
        <span className="text-xs text-gray-400 block text-right mt-1">
          {formattedTime}
        </span>
      </div>
    </div>
  );
}

export default Message;
