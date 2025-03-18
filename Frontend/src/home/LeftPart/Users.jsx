import React from "react";
import User from "./User";
import useGetAllUsers from "../../context/useGetAllUsers";
const Users = () => {
  const [allUsers, loading] = useGetAllUsers();
  console.log(allUsers);
  return (
    <div>
      <h1 className="px-8 py-2 text-white font-semibold bg-slate-800 ">
        Messages
      </h1>
      <div
        className="overflow-y-auto flex-1 "
        style={{ maxHeight: "calc(84vh - 10vh)" }}
      ></div>
      {allUsers.map((user, index) => (
        <User key={index} user={user} />
      ))}
    </div>
  );
};

export default Users;
