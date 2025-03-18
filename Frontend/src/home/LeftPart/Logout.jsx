import axios from "axios";
import React, { useState } from "react";
import { CiLogout } from "react-icons/ci";
import Cookies from "js-cookie";

const Logout = () => {
  const [loading, setLoading] = useState(false);

  const handleLogOut = async () => {
    setLoading(true);
    try {
      const res = await axios.post("/api/user/logout");
      localStorage.removeItem("ChatApp");
      Cookies.remove("jwt");
      alert("Logout Successfully");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="absolute bottom-4 left-4 bg-gray-800 rounded-full">
      <div className="p-2">
        <form action="">
          <button onClick={handleLogOut}>
            <CiLogout className="text-5xl p-2 hover:bg-gray-600 rounded-full duration-300 text-white" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Logout;
