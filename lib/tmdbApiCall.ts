const baseurl = process.env.BaseUrl!
const api_key = process.env.API_Key!

export const FetchMovies = async (movieId: string) => {
    // console.log("baseurl : ", baseurl)
    // console.log("apikey : ", api_key)
    // console.log("*******************", movieId, typeof(movieId))
    // const data = await fetch(`${baseurl}/find/${movieId}?api_key=${api_key}&external_source=imdb_id`)
    const data = await fetch(`${baseurl}/movie/${movieId}?append_to_response=credits,reviews&api_key=${api_key}`)
    const response = await data.json() 
    return response
}

export const FetchMoviesCasts = async (movieId : string) => {
    const data = await fetch(`${baseurl}/${movieId}/credits?api_key=${api_key}`)
    const response = await data.json()
    return response
}

export const FetchMoviesReviews = async (movieId : string) => {
    const data = await fetch(`${process.env.BaseUrl}/${movieId}reviews?api_key=${process.env.API_Key}`)
    const response = await data.json()
    return response.results
}


