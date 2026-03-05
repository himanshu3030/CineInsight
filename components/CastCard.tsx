import { FetchMoviesCasts } from "@/lib/tmdbApiCall"

interface CastMember {
    id: number;
    name: string;
}

interface MovieCredits {
    cast: CastMember[];
}

interface MovieData {
    credits: MovieCredits;
}

export async function CastCard({movie}:{movie: MovieData}){

    // const castdata = await FetchMoviesCasts("tt0133093")
    // console.log("cast name : " ,movie)

    const castlist = movie.credits.cast || [] 


    // console.log("********* CAST: ",typeof(movie.cast))
    // console.log("********* CAST: ",cast)

    const name = [
        {
            name: "lallan" 
        },
        {
            name: "pintu" 
        },
        {
            name: "shivam" 
        },
        {
            name: "monhan" 
        },
        {
            name: "pawan" 
        },
    ]

    return(
        <div className="bg-[#14151a] text-white p-5 rounded-2xl max-h-2xl max-w-4xl hover:ring-4 hover:ring-amber-400 hover:shadow-2xl hover:shadow-amber-500/50 m-10">
            <div >
             
             <h2 className="text-2xl font-semibold mb-4">Cast</h2>
                <div>
                    <div className="flex flex-wrap gap-2">
                        {castlist.map((c)=>(
                            <span key={c.id} className="hover:text-gray-400 text-gray-600 bg-[#23272f] p-1 px-3 mr-2 rounded-full align-middle">{c.name}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}