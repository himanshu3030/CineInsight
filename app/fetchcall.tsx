export async function FetchMovies(movieId: string){
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=07fc748f8aa61daab6fded2763fbd01f&language=en-US`)
    const movies = await data.json()
    console.log("movies data : ", data)
    return movies.results
}



// Key API Endpoints:

// Search Movies: GET /search/movie?api_key=YOUR_KEY&query=Avengers
// Get Movie Details: GET /movie/{movie_id}?api_key=YOUR_KEY
// Get Cast & Crew: GET /movie/{movie_id}/credits?api_key=YOUR_KEY
// Get Popular Movies: GET /movie/popular?api_key=YOUR_KEY
// Get Images (Posters, Backdrops): GET /movie/{movie_id}/images?api_key=YOUR_KEY 
// Get the reviews https://api.themoviedb.org/3/movie/tt0266543/reviews?api_key=07fc748f8aa61daab6fded2763fbd01f