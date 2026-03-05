import { Clock4Icon, FilmIcon, SearchIcon, StarIcon, StarsIcon, TrendingUpIcon } from "lucide-react"

export function Hero() {
    return (
        <div className="w-full px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12 mb-6">
            <div className="text-white flex flex-col items-center gap-4 sm:gap-5">
                <div className="flex items-center gap-2 sm:gap-4">
                    <FilmIcon className="text-amber-400" size={40} />
                    <h1 className="text-amber-400 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">CineInsight</h1>
                </div>

                <div className="flex flex-col justify-center items-center text-center max-w-xs sm:max-w-sm md:max-w-2xl">
                    <p className="text-gray-400 text-sm sm:text-base">
                        Enter an IMDb movie ID to discover details, cast information, and </p>
                    <div className="inline-flex items-center gap-1 text-amber-400 ml-1">
                        <StarsIcon size={18} />
                        AI-powered sentiment analysis
                    </div>

                </div>
            </div>
        </div>
    )
}