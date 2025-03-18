import React, { useEffect, useRef } from "react";
import Message from "./Message";
import useGetMessage from "../../context/useGetMessage";
import Loading from "../../components/Loading.jsx";
import useGetSocketMessages from "../../context/useGetSocketMessages.js";

function Messages() {
  const { loading, messages } = useGetMessage();
  useGetSocketMessages(); //listening incomming messages
  const lastMsgRef = useRef(null);

  // Auto-scroll to the last message when messages update
  useEffect(() => {
    if (lastMsgRef.current) {
      lastMsgRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="h-[80%] flex flex-col gap-4 overflow-y-auto flex-1 p-4">
      {loading ? (
        <Loading />
      ) : messages.length > 0 ? (
        messages.map((message, index) => (
          <div
            key={message._id || `msg-${index}`} // ✅ Unique key fix
            ref={index === messages.length - 1 ? lastMsgRef : null}
          >
            <Message message={message} />
          </div>
        ))
      ) : (
        <div className="flex justify-center items-center h-full">
          <p className="text-gray-400 text-lg font-semibold italic">
            Start your conversation
          </p>
        </div>
      )}
    </div>
  );
}

export default Messages;
