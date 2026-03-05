"use client";

import { useState } from "react";
import { SummaryCard } from "@/components/AiSummaryCard";
import { CastCard } from "@/components/CastCard";
import { MovieCard } from "@/components/MovieCard";
import { FetchMovies } from "@/lib/tmdbApiCall";
import { SearchIcon, Loader2 } from "lucide-react";

export function SearchManager({ initialData }: { initialData: any }) {
  const [movieData, setMovieData] = useState(initialData);
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    setLoading(true);
    try {
      const data = await FetchMovies(inputValue);
      if (data) setMovieData(data);
    } catch (error) {
      console.error("Search failed", error);
    } finally {
      setLoading(false);
    }
  };

  const reviews = movieData?.reviews?.results?.slice(0, 5).map((r: any) => r.content) || [];

  return (
    <>
      {/* Search Bar Container */}
      <div className="w-full flex justify-center px-4 -mt-8 relative z-10">
        <form onSubmit={handleSearch} className="bg-[#1e1f25] flex items-center p-3 gap-3 rounded-xl w-full max-w-2xl border border-gray-700 focus-within:border-amber-500 transition-all shadow-2xl">
          <SearchIcon className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Search IMDb ID (e.g. tt0111161)"
            className="w-full bg-transparent outline-none text-white"
          />
          <button type="submit" className="bg-amber-500 hover:bg-amber-600 text-black px-6 py-2 rounded-lg font-bold">
            {loading ? <Loader2 className="animate-spin w-5 h-5" /> : "Search"}
          </button>
        </form>
      </div>

      {/* Results Section */}
      <div className="max-w-6xl mx-auto px-4 mt-12 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <MovieCard movie={movieData} />
          </div>
          <div className="lg:col-span-1">
            <SummaryCard movietitle={movieData.title} combinedReviews={reviews} />
          </div>
        </div>

        <hr className="border-gray-800" />

        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1 h-6 bg-amber-500 rounded-full"></span>
            Top Cast
          </h2>
          <CastCard movie={movieData} />
        </section>
      </div>
    </>
  );
}