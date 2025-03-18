import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";

const useGetAllUsers = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getUsers = async () => {
      setLoading(true);
      try {
        const token = Cookies.get("jwt");
        const response = await axios.get("/api/user/allusers", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true, // ✅ Use `withCredentials` instead of `credentials`
        });

        setAllUsers(response.data);
      } catch (error) {
        console.error("Error in useGetAllUsers:", error);
      } finally {
        setLoading(false); // ✅ Ensures loading state is updated even if there's an error
      }
    };

    getUsers(); // ✅ You forgot to call the function
  }, []);

  return [allUsers, loading];
};

export default useGetAllUsers;
