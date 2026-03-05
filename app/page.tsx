import { SummaryCard } from "@/components/AiSummaryCard";
import { CastCard } from "@/components/CastCard";
import { Hero } from "@/components/hero";
import { MovieCard } from "@/components/MovieCard";
import { SearchBar } from "@/components/SearchBar";
import { FetchMovies } from "@/lib/tmdbApiCall";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ id?: string }>;
}) {
  const resolvedParams = await searchParams;
  const movieId = resolvedParams.id; // Don't set a default yet

  let moviedata = null;
  let reviews = [];
  let error = false;

  // 1. Only fetch if the user actually typed something
  if (movieId) {
    try {
      moviedata = await FetchMovies(movieId);
      reviews = moviedata.reviews.results.slice(0, 5).map((r: any) => r.content);
    } catch (err) {
      console.error("Fetch Error:", err);
      error = true;
    }
  }

  return (
    <main className="min-h-screen bg-[#0a0a0b] text-white">
      <div className="flex flex-col items-center">
        
        {/* ALWAYS VISIBLE */}
        <Hero />
        
        <div className="w-full max-w-2xl mt-10 z-10">
          <SearchBar />
        </div>

        <div className="w-full max-w-6xl px-4 py-10">
          {/* 2. State: User hasn't searched yet */}
          {!movieId && !error && (
            <div className="text-center py-20 animate-in fade-in duration-700">
               <p className="text-gray-500 text-lg">
                Enter an IMDb ID above to see the magic happen.
               </p>
            </div>
          )}

          {/* 3. State: Search resulted in an error */}
          {movieId && error && (
            <div className="text-center py-20">
              <p className="text-red-400 text-lg font-medium">
                We couldn't find that movie. Please double-check the ID (e.g., tt0111161).
              </p>
            </div>
          )}

          {/* 4. State: Success! Show the movie cards */}
          {movieId && moviedata && !error && (
            <div className="flex flex-col items-center gap-12 animate-in slide-in-from-bottom-5 duration-500">
              <MovieCard movie={moviedata} />
              <CastCard movie={moviedata} />
              <SummaryCard 
                movietitle={moviedata.title} 
                combinedReviews={reviews}
              />
            </div>
          )}
        </div>
      </div>
    </main>
  );
}