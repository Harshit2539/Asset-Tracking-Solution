import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [isFocused, setIsFocused] = useState({ userId: false, password: false });

  const navigate = useNavigate();
  const add = () => {
    navigate("/dashboard");
  };

  const handleFocus = (field) => {
    setIsFocused((prev) => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field) => {
    setIsFocused((prev) => ({ ...prev, [field]: false }));
  };

  return (
    <div className="min-h-screen bg-gray-400" style={{ backgroundColor: "#f0f2f5" }}>
      {/* Header */}
      <div className="bg-grey shadow-lg">
        <div className="flex items-center justify-between px-4 md:px-6 py-4">
          <div className="flex items-center">
            <img src="/1.png" alt="BSES Logo" className="h-12 md:h-15" />
          </div>
          <div className="flex items-center space-x-2 md:space-x-4">
            <div className="flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 md:px-4 py-2 rounded-lg">
              <span className="text-xs md:text-sm font-medium">Sign Up</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex items-center justify-center pt-6">
        <div className="w-full max-w-6xl shadow-lg">
          <div className="bg-grey rounded-3xl shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* Left Side - Asset Tracking Section */}
              <div className="w-full md:w-2/3 p-8 md:p-12 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 relative">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5 hidden md:block">
                  <div className="absolute top-10 left-10 w-32 h-32 bg-blue-600 rounded-full"></div>
                  <div className="absolute bottom-20 right-20 w-24 h-24 bg-indigo-600 rounded-full"></div>
                  <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-600 rounded-full"></div>
                  <div className="absolute bottom-1/3 left-1/2 w-20 h-20 bg-blue-400 rounded-full"></div>
                </div>

                <div className="text-center relative z-10">
                  <div className="mb-8 md:mb-12">
                    <div className="w-28 h-28 md:w-40 md:h-40 mx-auto mb-6 md:mb-8 bg-white rounded-full flex items-center justify-center shadow-2xl border-4 border-blue-100">
                      <img src="/asst.jpg" alt="BSES Logo" className="h-20 md:h-25" />
                    </div>
                    <div className="text-center">
                      <div className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 tracking-tight">
                        Asset Tracking Solution
                      </div>
                      <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-6"></div>
                    </div>
                  </div>

                  <div className="space-y-4 md:space-y-6">
                    <h2 className="text-xl md:text-3xl font-bold text-blue-900 leading-tight">
                      BSES Rajdhani Power Ltd.
                    </h2>
                    <h3 className="text-lg md:text-xl text-blue-600 font-semibold">
                      BSES Yamuna Power Ltd.
                    </h3>
                  </div>
                </div>
              </div>

              {/* Right Side - Login Form */}
              <div className="w-full md:w-1/3 p-8 md:p-12 bg-white relative">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5 hidden md:block">
                  <div className="absolute top-5 right-5 w-20 h-20 bg-blue-600 rounded-full"></div>
                  <div className="absolute bottom-10 left-5 w-16 h-16 bg-indigo-600 rounded-full"></div>
                </div>

                <div className="h-full flex flex-col justify-center relative z-10">
                  <div className="mb-8 md:mb-10">
                    <div className="text-center mb-6 md:mb-8">
                      <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl flex items-center justify-center shadow-lg mx-auto mb-4">
                        <svg
                          className="w-6 h-6 md:w-8 md:h-8 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                          />
                        </svg>
                      </div>
                      <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                        Welcome
                      </h2>
                      <p className="text-gray-500 text-xs md:text-sm font-medium">
                        Please sign in to your account
                      </p>
                    </div>

                    <div className="space-y-4 md:space-y-6">
                      {/* User ID Field */}
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-gray-700">
                          User ID
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            value={userId}
                            onChange={(e) => setUserId(e.target.value)}
                            onFocus={() => handleFocus("userId")}
                            onBlur={() => handleBlur("userId")}
                            placeholder="Enter Your User ID"
                            className={`w-full px-4 py-3 border-2 rounded-xl bg-gray-50 text-gray-800 transition-all duration-300 focus:outline-none focus:bg-white ${isFocused.userId
                              ? "border-blue-500 shadow-lg shadow-blue-100"
                              : "border-gray-200 hover:border-gray-300"
                              }`}
                          />
                          <div className="absolute inset-y-0 right-4 flex items-center">
                            <svg
                              className="w-5 h-5 text-gray-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>

                      {/* Password Field */}
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-gray-700">
                          Password
                        </label>
                        <div className="relative">
                          <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onFocus={() => handleFocus("password")}
                            onBlur={() => handleBlur("password")}
                            placeholder="Enter Your Password"
                            className={`w-full px-4 py-3 border-2 rounded-xl bg-gray-50 text-gray-800 transition-all duration-300 focus:outline-none focus:bg-white ${isFocused.password
                              ? "border-blue-500 shadow-lg shadow-blue-100"
                              : "border-gray-200 hover:border-gray-300"
                              }`}
                          />
                          <div className="absolute inset-y-0 right-4 flex items-center">
                            <svg
                              className="w-5 h-5 text-gray-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>

                      {/* Login Button */}
                      <button
                        onClick={add}
                        className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-bold py-3 md:py-4 rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 focus:ring-4 focus:ring-blue-400 focus:ring-opacity-50"
                      >
                        Sign In
                      </button>

                      {/* Forgot Password */}
                      <div className="text-center pt-2 sm:pt-4">
                        <a
                          href="/forgot-password"
                          className="text-xs sm:text-sm text-slate-600 hover:text-blue-600 transition-colors duration-200 font-medium"
                        >
                          Forgot password?
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Right */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
