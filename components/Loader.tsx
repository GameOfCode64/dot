import React from "react";
import { Loader2 } from "lucide-react";

const Loader = () => {
  return (
    <div className="w-full absolute top-0 left-0 z-50 h-screen flex items-center justify-center bg-white/15">
      <p className="flex items-center justify-center text-lg">
        <Loader2 className="mr-2 animate-spin" />
        Loading...
      </p>
    </div>
  );
};

export default Loader;
