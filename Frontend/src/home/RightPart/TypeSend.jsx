import React, { useState } from "react";
import { IoSend } from "react-icons/io5";
import useSendMessage from "../../context/useSendMessage.js";
import axios from "axios";

function TypeSend() {
  const [message, setMessage] = useState("");
  const { loading, sendMessages } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(e.target.value);
    await sendMessages(message);
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center h-[8vh] gap-2 p-2 bg-gray-800 rounded-lg w-full">
        <input
          type="text"
          placeholder="Type here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-1 p-2 text-white bg-gray-700 rounded-lg outline-none"
        />
        <button className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition">
          <IoSend size={20} />
        </button>
      </div>
    </form>
  );
}

export default TypeSend;
