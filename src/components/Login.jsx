import React from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = React.useState(true);
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
      <form className="absolute w-3/12 mx-auto left-0 right-0 top-32 p-12 bg-black/80 rounded-md text-white">
        <h1 className="text-3xl font-bold mb-6">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            className="p-4 my-2 w-full rounded-md bg-gray-800"
            type="text"
            placeholder="Full name"
          />
        )}
        <input
          className="p-4 my-2 w-full rounded-md bg-gray-800"
          type="email"
          placeholder="Email address"
        />
        <input
          className="p-4 my-2 w-full  rounded-md bg-gray-800"
          type="password"
          placeholder="Password"
        />
        <button
          className="p-4 my-4 w-full bg-red-700 rounded-md font-bold"
          type="submit"
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
