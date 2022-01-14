import MovieCard from "./MovieCard";

function MoviesList({ movies }) {
   return (
      <div className="grid grid-cols-1 gap-4 py-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-3">
         {
            movies ? movies.map((movie, index) => (
               <MovieCard key={index} movie={movie} />
            )) : (<div className="md:col-span-2 lg:col-span-3 aspect-video bg-yellow-400 text-gray-800 rounded-3xl shadow-lg font-extrabold text-3xl flex items-center justify-center">search for movies, actors, directors, ...</div>)
         }
      </div>
   );
}

export default MoviesList;
