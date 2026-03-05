import Image from "next/image"
import { CalendarIcon, Clock12Icon, StarIcon } from "lucide-react"

interface MovieCard {
    imdb_id: string
    title: string
    original_language: string
    overview: string
    tagline: string
    status: string
    vote_average: number
    runtime: number
    genres: Geners[]
    poster_path: string
    release_date: string
    origin_country: []
    reviews: []
    credits: MovieCredits
}
interface MovieCredits {
    crew: Crew[]
}

interface Geners {
    id: number
    name: string
}
interface Crew {
    id: number
    job: string
    name: string
}

export async function MovieCard({ movie }: { movie: MovieCard }) {

    const imgurl = process.env.imgUrl

    return (
        <div className="bg-[#14151a] text-white p-5 rounded-2xl max-w-4xl hover:ring-4 hover:ring-amber-400 hover:shadow-2xl hover:shadow-amber-500/50 m-10">
            <div className="flex flex-col sm:flex-row gap-6">
                {/* Poster image - fixed size on left */}
                <div className="shrink-0">
                    {movie.poster_path && (
                        <div className="relative w-48 h-72 md:w-56 md:h-80 rounded-2xl overflow-hidden shadow-lg">
                            <Image
                                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                alt={movie.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                    )}
                </div>
                {/* Content area - takes remaining space */}
                <div className="flex-1">
                    <div className="flex flex-col gap-3">
                        {/* movie title */}
                        <div>
                            <h1 className="text-2xl text-amber-400 font-semibold">{movie.title}</h1>
                        </div>

                        <div className="flex gap-3 text-xs text-gray-400 flex-wrap">
                            <span className="flex justify-center items-center gap-1">
                                <CalendarIcon size={12} /> {movie.release_date}
                            </span>
                            <span className="flex justify-center items-center gap-1">
                                <Clock12Icon size={12} /> {movie.runtime} min
                            </span>
                            <span className="flex justify-center items-center gap-1 text-white font-semibold text-sm">
                                <StarIcon size={15} className="text-amber-300" fill="yellow" />
                                {movie.vote_average}<span className="text-gray-400">/10</span>
                            </span>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {movie.genres.map((g) => (
                                <span
                                    className="text-xs px-3 py-1 text-gray-300 bg-[#23272f] rounded-full"
                                    key={g.id}
                                >
                                    {g.name}
                                </span>
                            ))}
                        </div>

                        {movie.tagline && (
                            <div className="text-gray-400 italic">
                                <span className="text-white font-medium">Tagline:</span> "{movie.tagline}"
                            </div>
                        )}

                        <div className="flex flex-wrap items-center gap-2">
                            <span className="text-white font-medium">Directed By:</span>
                            <div className="flex flex-wrap gap-2">
                                {movie.credits.crew
                                    .filter((c) => c.job === "Director")
                                    .map((c) => (
                                        <span
                                            key={c.id}
                                            className="text-xs px-3 py-1 text-gray-300 bg-[#23272f] rounded-full"
                                        >
                                            {c.name}
                                        </span>
                                    ))
                                }
                            </div>
                        </div>

                        <div className="text-gray-400">
                            <span className="text-white font-medium">Overview:</span>
                            <p className="mt-1 leading-relaxed">{movie.overview}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}