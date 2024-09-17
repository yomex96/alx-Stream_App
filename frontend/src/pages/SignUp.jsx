// import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthStorage } from "../storage/authenticatedUser";
import { useState } from "react";

const SignUp = () => {
  const { searchParams } = new URL(document.location);
  const emailValue = searchParams.get("email");
  
  const [email, setEmail] = useState(emailValue || "");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { signup, isSigningUp } = useAuthStorage();

  const handleSignUp = (e) => {
    e.preventDefault();
    signup({email, username, password});
    // console.log(email, username, password);
  };

  return (
    <div className="h-screen w-full flex flex-col sm:flex-row">
      <div className="w-full sm:w-1/2 h-full sm:h-auto bg-cover bg-center" style={{ backgroundImage: 'url(/bg2.png)' }}>
        <img src="/bg2.png" alt="Sign Up" className="h-full w-full object-cover hidden sm:block" />
      </div>
      <div className="w-full sm:w-1/2 flex flex-col justify-center items-center bg-black/60">
        <header className="w-full max-w-md mx-auto flex items-center justify-between p-4">
          <Link to={"/"}>
            <img src="/myLogo.png" className="w-52" alt="logo" />
          </Link>
        </header>
        <div className="w-full max-w-md p-8 sm:ml-1 space-y-6 bg-gray-800 rounded-lg shadow-md">
          <h1 className="text-center text-white text-2xl font-bold mb-4">
            Sign Up
          </h1>
          <form action="" className="space-y-4" onSubmit={handleSignUp}>
            <div>
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-300 block"
              >
                Email
              </label>
              <input
                type="email"
                className="w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring"
                placeholder="Your Email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="username"
                className="text-sm font-medium text-gray-300 block"
              >
                Username
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring"
                placeholder="Your Username"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-300 block"
              >
                Password
              </label>
              <input
                type="password"
                className="w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring"
                placeholder="Your Password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700" disabled={isSigningUp}>
              {isSigningUp ? "Signing up..." : "Sign Up"}
            </button>
          </form>
          <div className="text-center text-gray-400">
            Already have an account?{" "}
            <Link to={"/login"} className="text-white hover:underline">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

