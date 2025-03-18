import React from "react";
import useConversation from "../../zustand/useConversation.js";
import { useSocketContext } from "../../context/SocketContext.jsx";
import userImage from "../../../../images/userimg.png";

const ChatUser = () => {
  const { selectedConversation } = useConversation();
  // console.log(selectedConversation);
  const { onlineUsers } = useSocketContext();
  const getOnlineUsersStatus = (userId) => {
    return onlineUsers.includes(userId) ? "online" : "offline";
  };

  return (
    <div className=" bg-slate-800 flex items-center h-[10vh] gap-3 p-3">
      <div className="avatar online">
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <img
            // src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            // src="../../images/userimg.png"
            src={userImage}
            alt="User Avatar"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div>
        <h1 className="font-semibold">
          {selectedConversation.fullName || "Welcome "}
        </h1>
        <span className="text-sm text-green-500">
          {getOnlineUsersStatus(selectedConversation?._id)}
        </span>
      </div>
    </div>
  );
};

export default ChatUser;
