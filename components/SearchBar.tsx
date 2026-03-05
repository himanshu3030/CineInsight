"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { SearchIcon } from "lucide-react";

export function SearchBar() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [query, setQuery] = useState(searchParams.get("id") || "");

  const handleSearch = () => {
    if (!query) return;
    // Updates the URL to ?id=tt12345
    router.push(`/?id=${query}`);
  };

  return (
    <div className="w-full flex justify-center px-4">
      <div className="bg-[#1e1f25] text-gray-300 flex items-center p-3 gap-3 rounded-lg w-full max-w-2xl border border-gray-700 focus-within:border-amber-500 focus-within:ring-1 focus-within:ring-amber-500 transition-all">
        <SearchIcon className="w-5 h-5 text-gray-400 shrink-0" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          placeholder="Enter IMDb ID (e.g. tt0111161)"
          className="w-full bg-transparent outline-none text-white placeholder-gray-500"
        />
        <button 
          onClick={handleSearch}
          className="bg-amber-500 hover:bg-amber-600 text-black px-6 py-1.5 rounded-md font-bold transition-colors shrink-0"
        >
          Search
        </button>
      </div>
    </div>
  );
}