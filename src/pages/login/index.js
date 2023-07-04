import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigator = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();

    const form = e.target;

    const username = form.username.value;
    const password = form.password.value;

    if (username === "admin" && password === "admin") {
      navigator("/dashboard");
    } else {
      alert("Invalid Credentials");
    }
  };
  return (
    <div className="bg-[#252D42] h-screen w-full flex justify-center items-center">
      <div className="bg-white px-10 py-5 rounded w-1/3">
        <h1 className="text-2xl font-bold text-[#252D42]">Login to Access</h1>

        <div className="mt-5">
          <form onSubmit={submitHandler}>
            <div className="mb-5">
              <label className="block mb-2 text-sm font-bold text-gray-700">
                Username
              </label>
              <input
                required
                type="text"
                name="username"
                className="w-full px-3 py-2 border border-gray-400 rounded focus:outline-none"
                placeholder="Username"
              />
            </div>

            <div className="mb-5">
              <label className="block mb-2 text-sm font-bold text-gray-700">
                Password
              </label>
              <input
                required
                type="password"
                name="password"
                className="w-full px-3 py-2 border border-gray-400 rounded focus:outline-none"
                placeholder="Password"
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="px-4 py-2 bg-[#252D42] text-white rounded hover:bg-[#1D2433]"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
