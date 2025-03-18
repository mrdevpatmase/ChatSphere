import React, { createContext, useContext, useState } from "react";
import Cookies from "js-cookie";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const initialUserState =
    Cookies.get("jwt") || localStorage.getItem("ChatApp");

  // parse the user data and storing in state

  const [authUser, setAuthUser] = useState(
    initialUserState ? JSON.parse(initialUserState) : undefined
  );
  return (
    <div>
      <AuthContext.Provider value={[authUser, setAuthUser]}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
export const useAuth = () => {
  return useContext(AuthContext);
};
