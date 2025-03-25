"use client";
import SelectPlatform from "@/components/SelectPlatform";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    redirect("/shop");
  }, []);
  return (
    <div className="w-full h-screen">
      <SelectPlatform />
    </div>
  );
}
