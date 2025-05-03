import React from "react";
import Header from "./Header";
import { useState, useEffect } from "react";

function Login() {
  const [isExistingUser, setIsExistingUser] = useState(true);
  useEffect(() => {
    setIsExistingUser(true); // Initialize the state to its default value
  }, []);
  const toggleSignUp = () => {
    setIsExistingUser((prev) => !prev); 
  };
  return (
    <>
      <div className="relative">
        <Header />
      </div>

      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fa7be975-efc3-48c6-8188-f07fdd1aa476/web/IN-en-20250428-TRIFECTA-perspective_e045264e-b4d4-4a6f-b2cc-f95e3344a332_small.jpg"
          alt="background_image"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex justify-center relative bg-black/80 w-1/4 h-1/2 p-10 rounded-lg text-amber-50 mx-auto mt-20">
        <form action="">
          <h1 className="text-2xl text-bold p-2 m-2 ml-20">
            {isExistingUser ? "Sign In" : "Sign Up"}
          </h1>
          {!isExistingUser ? (
            <input
              type="name"
              placeholder="Enter your name"
              className="p-2 m-2 w-full"
            />) : null
          }
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 m-2 w-full"
          />
          <input
            type="password"
            placeholder="Enter your password"
            className="p-2 m-2 w-full"
          />
          <button type="submit" className="bg-red-700 p-2 m-2 w-full rounded">
            {isExistingUser ? "Sign In" : "Sign Up"}
          </button>
          <div className="">
          {isExistingUser ? "New to netflix?" : "Already registered?" }&nbsp;{" "}
            <span
              className="text-red-700 underline cursor-pointer"
              onClick={() => toggleSignUp()}
            >
               {isExistingUser ? "Sign up Now." : "Sign In."}
            </span>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
