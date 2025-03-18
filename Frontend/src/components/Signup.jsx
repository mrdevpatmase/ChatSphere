import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
// import { json } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";

const Signup = () => {
  const [authUser, setAuthUser] = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password", "");

  const onSubmit = async (data) => {
    const userInfo = {
      fullName: data.fullName,
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword, // Fix here
    };
    console.log(userInfo);
    await axios
      .post("/api/user/signup", userInfo)
      .then((response) => {
        console.log(response.data);
        if (response.data) {
          toast.success("Signup Successful");
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 px-4">
      <div className="bg-gray-800 bg-opacity-90 backdrop-blur-lg p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-700">
        {/* Title */}
        <h1 className="text-4xl font-extrabold text-center bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text mb-3">
          ChatSphere
        </h1>

        <h2 className="text-white text-xl font-medium text-center mb-6">
          Create Your Account
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Full Name */}
          <div>
            <input
              type="text"
              className="w-full p-3 rounded-xl bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-600 shadow-sm transition-all duration-200"
              placeholder="Enter Your Name"
              {...register("fullName", { required: "Full Name is required" })}
            />
            {errors.fullName && (
              <div aria-live="polite" className="text-red-400 text-sm mt-1">
                {errors.fullName.message}
              </div>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              className="w-full p-3 rounded-xl bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-600 shadow-sm transition-all duration-200"
              placeholder="Email"
              {...register("email", { required: "Email is required" })}
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
              className="w-full p-3 rounded-xl bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-600 shadow-sm transition-all duration-200"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                // min length of password should be 8
                minLength: {
                  value: 1,
                  message: "Password must be at least 8 characters long",
                },
              })}
            />
            {errors.password && (
              <div aria-live="polite" className="text-red-400 text-sm mt-1">
                {errors.password.message}
              </div>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <input
              type="password"
              className="w-full p-3 rounded-xl bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-600 shadow-sm transition-all duration-200"
              placeholder="Confirm Password"
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
            />
            {errors.confirmPassword && (
              <div aria-live="polite" className="text-red-400 text-sm mt-1">
                {errors.confirmPassword.message}
              </div>
            )}
          </div>

          {/* Signup Button */}
          <button className="w-full p-3 mt-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl shadow-md hover:shadow-lg hover:from-blue-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-200">
            Sign Up
          </button>
        </form>

        {/* Already have an account? */}
        <p className="text-gray-400 text-sm text-center mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-blue-400 hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
