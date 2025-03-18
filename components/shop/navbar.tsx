"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/Qubit.png";
import { shopNavbar } from "@/utils/AllNavLinks";
import { Menu, Search, ShoppingBag } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useAuth } from "@clerk/nextjs";

const Navbar = () => {
  const auth = useAuth();

  return (
    <div className="w-full h-[70px] px-8 bg-[#f0f1f5] flex items-center justify-between">
      <Link href="/" className="flex items-center justify-normal">
        <div className="w-[40px] p-1">
          <Image src={logo} alt="Qubit" />
        </div>
        <p className=" text-2xl font-bold">Qubit</p>
      </Link>
      <div className="flex items-center justify-normal space-x-3.5">
        {shopNavbar.map((nav, index) => (
          <Link
            key={index}
            href={nav.href}
            className=" hidden md:block font-semibold"
          >
            {nav.name}
          </Link>
        ))}
        <Search />
        <div className="relative">
          <span className="absolute w-[20px] h-[20px] flex items-center justify-center text-white top-[-10px] right-[-8px] rounded-full bg-red-500 fle">
            0
          </span>
          <ShoppingBag />
        </div>
        {/* Mobil Menu */}
        <Sheet>
          <SheetTrigger>
            <Menu className="block md:hidden" />
          </SheetTrigger>
          <SheetContent className="flex items-start">
            <SheetHeader>
              <SheetTitle />
            </SheetHeader>
            <div className="mt-14 w-full">
              <div className="flex flex-col px-8 space-y-4">
                {shopNavbar.map((nav, index) => (
                  <Link
                    key={index}
                    href={`/shop/${nav.href}`}
                    className="font-semibold text-lg text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    {nav.name}
                  </Link>
                ))}
              </div>
              {!auth.isSignedIn && (
                <div className="mt-8 flex justify-center">
                  <Button className="w-full py-2 text-lg">
                    Sign In / Sign Up
                  </Button>
                </div>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;
