import React from "react";

const Header = () => {
  return (
    <div className="absolute px-8 py-4 bg-linear-to-b from-black to-transparent">
      <img
        className="w-32 "
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Logo"
      />
    </div>
  );
};

export default Header;
