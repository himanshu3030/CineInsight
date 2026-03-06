const baseurl = process.env.BaseUrl!
const api_key = process.env.API_Key!

// one api call to get all movie detail, cast and reviews

export const FetchMovies = async (movieId: string) => {
    const data = await fetch(`${baseurl}/movie/${movieId}?append_to_response=credits,reviews&api_key=${api_key}`)
    const response = await data.json() 
    return response
}

// seprate call for getting credits and casts

// export const FetchMoviesCasts = async (movieId : string) => {
//     const data = await fetch(`${baseurl}/${movieId}/credits?api_key=${api_key}`)
//     const response = await data.json()
//     return response
// }

 
// seprate call for getting reviews

// export const FetchMoviesReviews = async (movieId : string) => {
//     const data = await fetch(`${process.env.BaseUrl}/${movieId}reviews?api_key=${process.env.API_Key}`)
//     const response = await data.json()
//     return response.results
// }


