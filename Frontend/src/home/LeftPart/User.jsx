import React from "react";
import useConversation from "../../zustand/useConversation";
import { useSocketContext } from "../../context/SocketContext";
import userImage from "../../../../images/userimg.png";

const User = ({ user }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === user._id;

  const { socket, onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(user._id);

  return (
    <div>
      <div
        className={`flex items-center gap-4 p-4 hover:bg-slate-800 duration-300 mt-1 ${
          isSelected ? "bg-slate-500" : ""
        } `}
        onClick={() => setSelectedConversation(user)}
      >
        <div className={`avatar ${isOnline ? "online" : ""}`}>
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <img
              // src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              src={userImage}
              alt="User Avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div>
          <h1 className="text-lg font-bold">{user.fullName}</h1>
          <span className="text-gray-600">{user.email}</span>
        </div>
      </div>
    </div>
  );
};

export default User;
