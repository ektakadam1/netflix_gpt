import React from "react";
import Header from "./Header";
import { useState, useEffect, useRef } from "react";
import {
  validateEmail,
  validatePassword,
  validateName,
} from "../utils/validate"; //
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
function Login() {
  const [isExistingUser, setIsExistingUser] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState("");
  const [isNameValid, setIsNameValid] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  useEffect(() => {
    setIsExistingUser(true); // Initialize the state to its default value
  }, []);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const toggleSignUp = () => {
    setIsExistingUser((prev) => !prev);
  };
  const navigate = useNavigate();
  const handleSubmit = () => {
    const EmailValid = validateEmail(email.current.value);
    const PasswordValid = validatePassword(password.current.value);
    if (!isExistingUser) {
      const nameValid = validateName(name.current.value);
      setIsNameValid(nameValid);
    }
    setIsEmailValid(EmailValid);
    setIsPasswordValid(PasswordValid);
    const valid =
      EmailValid === null &&
      PasswordValid === null &&
      (isExistingUser || isNameValid === null);
    if (valid) {
      if (!isExistingUser) {
        console.log("Sign Up");
        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            console.log(user);
            navigate("/browse");
          })
          .catch((error) => {
            console.log(error);
            setErrorMsg(error?.message);
            // ..
          });
      } else {
        signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/browse");
          })
          .catch((error) => {
            console.log(error);
            setErrorMsg(error?.message);
          });
      }
    }
  };
  return (
    <>
      <div className="relative z-10">
        <Header />
      </div>

      <div className="absolute top-0 left-0 w-full h-screen">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fa7be975-efc3-48c6-8188-f07fdd1aa476/web/IN-en-20250428-TRIFECTA-perspective_e045264e-b4d4-4a6f-b2cc-f95e3344a332_small.jpg"
          alt="background_image"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex justify-center relative bg-black/80 w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 h-auto p-6 sm:p-10 rounded-lg text-amber-50 mx-auto mt-10 sm:mt-20">
        <form action="" onSubmit={(e) => e.preventDefault()}>
          <h1 className="text-2xl text-bold p-2 m-2 ml-20">
            {isExistingUser ? "Sign In" : "Sign Up"}
          </h1>
          {!isExistingUser ? (
            <input
              type="name"
              ref={name}
              placeholder="Enter your name"
              className="p-2 m-2 w-full"
            />
          ) : null}
          <p className="text-red-700 font-normal ml-2">{isNameValid}</p>
          <input
            type="email"
            ref={email}
            placeholder="Enter your email"
            className="p-2 m-2 w-full"
          />
          <p className="text-red-700 font-normal ml-2">{isEmailValid}</p>
          <input
            type="password"
            ref={password}
            placeholder="Enter your password"
            className="p-2 m-2 w-full"
          />
          <p className="text-red-700 font-normal ml-2">{isPasswordValid}</p>
          <p className="text-red-700 font-normal ml-2">{errorMsg}</p>
          <button
            type="submit"
            className="bg-red-700 p-2 m-2 w-full rounded"
            onClick={handleSubmit}
          >
            {isExistingUser ? "Sign In" : "Sign Up"}
          </button>
          <div className="p-2 m-2 w-full">
            {isExistingUser ? "New to netflix?" : "Already registered?"}&nbsp;{" "}
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
