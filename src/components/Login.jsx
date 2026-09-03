import React from "react";
import { useRef } from "react";
import Header from "./Header";
import { checkValidateData } from "../Utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { updateProfile } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../Utils/userSlice";
import { getInitialsAvatar } from "../Utils/avatar";

const Login = () => {
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = React.useState(true);
  const [errorMessage, setErrorMessage] = React.useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const handleButtonClick = () => {
    console.log(email.current.value);
    console.log(password.current.value);
    const message = checkValidateData(
      email.current.value,
      password.current.value,
    );
    const isError = typeof message === "string";
    setErrorMessage(isError ? message : null);
    if (isError) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://media.licdn.com/dms/image/v2/C4D03AQFzQpdzB_SYEg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1659955669408?e=1790208000&v=beta&t=7e0cDdgt-0Ubm3VLK5q16wlyaof6vrQbZCJn9Zt599o",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName, photoURL }));
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + ": " + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + ": " + errorMessage);
        });
    }
  };
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute w-full h-screen -z-10">
        <img
          className="w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/6ef286cc-b89b-4da3-bab7-62971d87dbd0/web/IN-en-20260817-TRIFECTA-perspective_dce6e6bc-2bd3-45f2-9086-211bf8b6e8c8_medium.jpg"
          alt="Background"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-3/12 mx-auto left-0 right-0 top-32 p-12 bg-black/80 rounded-md text-white"
      >
        <h1 className="text-3xl font-bold mb-6">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            className="p-4 my-2 w-full rounded-md bg-gray-800"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          ref={email}
          className="p-4 my-2 w-full rounded-md bg-gray-800"
          type="email"
          placeholder="Email address"
        />
        <input
          ref={password}
          className="p-4 my-2 w-full  rounded-md bg-gray-800"
          type="password"
          placeholder="Password"
        />
        <p className="text-red-500 ">{errorMessage}</p>
        <button
          className="p-4 my-4 w-full bg-red-700 rounded-md font-bold"
          type="submit"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="my-6 text-center text-white">
          {isSignInForm ? "New to Netflix?" : "Already have an account?"}{" "}
          <span
            className="text-blue-500 cursor-pointer"
            onClick={toggleSignInForm}
          >
            {isSignInForm ? "Sign up now" : "Sign in now"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
