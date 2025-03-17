import { shopNavbar } from "@/utils/AllNavLinks";
import { Search } from "lucide-react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[70px] px-8 bg-[#f0f1f5] flex items-center justify-between">
      <div>
        <Link href="/">
          <p>Logo</p>
        </Link>
      </div>
      <div className="flex items-center justify-normal space-x-3.5">
        {shopNavbar.map((nav, index) => (
          <Link key={index} href={nav.href} className="font-semibold">
            {nav.name}
          </Link>
        ))}
        <Search />
      </div>
    </div>
  );
};

export default Navbar;
