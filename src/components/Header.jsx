import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getInitialsAvatar } from "../Utils/avatar";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  console.log("user in header", user);
  return (
    <div className="absolute z-10 w-full flex items-center justify-between px-8 py-4 bg-linear-to-b from-black to-transparent">
      <img
        className="w-32"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Logo"
      />
      {user && (
        <div className="flex items-center gap-4">
          <img
            className="w-10 h-10 rounded-md object-cover"
            src={user.photoURL}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = getInitialsAvatar(user.displayName);
            }}
            alt="Profile"
          />
          <button
            className="px-4 py-2 bg-red-600 rounded-md text-white"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
