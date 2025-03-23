"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";
import { useSearch } from "@/hooks/useSearch";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Search = () => {
  const { isOpen, onClose, onOpen } = useSearch();
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (query.trim()) {
      const formattedQuery = query.trim().split(" ").join("-");
      router.push(`/shop/search?query=${formattedQuery}`);
      onClose();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => (open ? onOpen() : onClose())}
    >
      <DialogContent>
        <DialogTitle className="mb-8">Search</DialogTitle>
        <div className="w-full h-[50px]">
          <Input
            placeholder="Search for Products"
            className="w-full h-full ring-1 ring-gray-800 rounded-lg"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
        <DialogFooter>
          <Button onClick={handleSearch}>Search</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Search;
