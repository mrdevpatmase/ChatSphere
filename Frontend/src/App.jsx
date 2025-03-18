import React from "react";
import Left from "./home/LeftPart/Left.jsx";
import Right from "./home/RightPart/Right.jsx";
import Signup from "./components/Signup.jsx";
import Login from "./components/Login.jsx";
import { useAuth } from "./context/AuthProvider.jsx";
import { Navigate, Route, Routes } from "react-router-dom";
// import Loading from "./components/loading.jsx";
import { Toaster } from "react-hot-toast";

const App = () => {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);

  return (
    <div>
      <>
        <Routes>
          <Route
            path="/"
            element={
              authUser ? (
                <div className="flex h-screen ">
                  <Left />
                  <Right />
                </div>
              ) : (
                <Navigate to={"/login"} />
              )
            }
          />

          <Route
            path="/login"
            element={authUser ? <Navigate to={"/"} /> : <Login />}
          />
          <Route
            path="/signup"
            element={authUser ? <Navigate to={"/"} /> : <Signup />}
          />
        </Routes>
        <Toaster />
      </>
    </div>
  );
};

export default App;
