import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import useGetAllUsers from "../../context/useGetAllUsers";
import useConversation from "../../zustand/useConversation";

const Search = () => {
  const [search, setSearch] = useState("");
  const [allUsers] = useGetAllUsers();
  const { setSelectedConversation } = useConversation();

  // const { allUsers } = useGetAllUsers(); // Update: Use object destructuring
  console.log("All Users:", allUsers);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search.trim()) return;

    const conversation = allUsers.find((user) =>
      user.fullName?.toLowerCase().includes(search.toLowerCase())
    );

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch(""); // ✅ Reset only if user is found
    } else {
      toast.error("User not found");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="h-[10vh]">
        <div className="px-3 py-4">
          <div className="flex space-x-3">
            <label className="border-[1px] border-gray-700 bg-slate-900 rounded-lg p-3 flex items-center gap-2 w-[80%]">
              <input
                type="text"
                className="bg-transparent outline-none w-full" // ✅ Improved styling
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                required // ✅ Prevents empty submissions
              />
            </label>
            <button type="submit">
              <FaSearch className="text-5xl p-2 hover:bg-gray-600 rounded-full duration-300" />
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Search;
