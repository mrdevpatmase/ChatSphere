import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const [authUser, setAuthUser] = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      // fullName: data.fullName,
      email: data.email,
      password: data.password,
      // confirmPassword: data.confirmPassword, // Fix here
    };
    console.log(userInfo);
    axios
      .post("/api/user/login", userInfo)
      .then((response) => {
        console.log(response.data);
        if (response.data) {
          toast.success("Login Successful");
        }
        localStorage.setItem("ChatApp", JSON.stringify(response.data));
        setAuthUser(response.data);
      })
      .catch((error) => {
        if (error.message) {
          alert("Error: " + error.response.data.error);
        }
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 relative">
      <div className="absolute inset-0 bg-[url('https://source.unsplash.com/1600x900/?technology,chat')] bg-cover bg-center opacity-20"></div>
      <div className="relative bg-gray-800/80 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-full max-w-md border border-gray-700">
        <h1 className="text-4xl font-extrabold text-center bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text mb-3">
          ChatSphere
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Email */}
          <div>
            <input
              type="email"
              className="w-full p-3 rounded-lg bg-gray-700/80 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-600 transition-all duration-200 hover:bg-gray-700"
              placeholder="Enter your email"
              {...register("email", { required: "Email is required" })}
              required
            />
            {errors.email && (
              <div aria-live="polite" className="text-red-400 text-sm mt-1">
                {errors.email.message}
              </div>
            )}
          </div>

          {/* Password */}
          <div>
            <input
              type="password"
              className="w-full p-3 rounded-lg bg-gray-700/80 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-600 transition-all duration-200 hover:bg-gray-700"
              placeholder="Enter your password"
              {...register("password", {
                required: "Password is required",
              })}
              required
            />
            {errors.password && (
              <div aria-live="polite" className="text-red-400 text-sm mt-1">
                {errors.password.message}
              </div>
            )}
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <a href="#" className="text-blue-400 text-sm hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <button className="w-full p-3 mt-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-md hover:shadow-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1">
            Login
          </button>
        </form>

        {/* Signup Redirect */}
        <p className="text-gray-400 text-center mt-4">
          Don't have an account?{" "}
          <a href="/signup" className="text-blue-400 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
