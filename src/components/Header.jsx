import React from "react";
import { useUser } from "../contexts/UserDetails";

const Header = () => {
  const { name } = useUser();
  return (
    <div className="text-black p-2 mb-2">
      <div>
        <h1 className="text-2xl font-bold">Hello, {name}!</h1>
        <p className="text-lg mt-2">It's always a good time</p>
      </div>
    </div>
  );
};

export default Header;
