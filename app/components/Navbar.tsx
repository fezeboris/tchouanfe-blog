import Link from "next/link";
import React from "react";
import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
  return (
    <div className=" w-full relative items-center flex justify-between max-w-7xl mx-auto px-4 py-5">
      <Link href={"/"} className="font-bold text-3xl">
        Tchouanfe<span className="text-primary">Blog</span>
      </Link>
      <ModeToggle />
    </div>
  );
};

export default Navbar;
