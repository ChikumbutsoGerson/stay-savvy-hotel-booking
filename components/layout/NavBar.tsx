"use client";

import { UserButton } from "@clerk/nextjs";

const NavBar = () => {
  return (
    <div className="h-screen flex justify-end">
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default NavBar;
