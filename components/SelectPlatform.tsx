"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { Platform } from "@/utils/AllNavLinks";

const SelectPlatform = () => {
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const router = useRouter();

  const handleSelectPlatform = (platform: string) => {
    setSelectedPlatform(platform);
  };

  const handleContinue = () => {
    if (selectedPlatform) {
      router.push(`/${selectedPlatform}`);
    }
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="h-full flex flex-col items-center justify-between w-full md:px-20 px-8 md:py-12 py-8">
        <div className="grid w-full grid-cols-1 md:grid-cols-3 gap-4">
          {Platform.map((platform, index) => (
            <Card
              key={index}
              onClick={() => handleSelectPlatform(platform.href)}
              className={`cursor-pointer md:w-[450px] w-full ${
                selectedPlatform === platform.href ? "border-red-500" : ""
              }`}
            >
              <CardHeader>
                <CardTitle>{platform.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Description for {platform.name}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="md:flex items-center justify-between w-full mt-8">
          <div />
          <Button
            disabled={selectedPlatform === ""}
            className="bg-red-500 cursor-pointer w-full md:w-28 hover:bg-red-600"
            onClick={handleContinue}
          >
            Continue <ArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SelectPlatform;
