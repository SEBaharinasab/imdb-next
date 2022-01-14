import SearchBox from "../../components/SearchBox";
import MoviesList from "../../components/MoviesList";
import { useState } from "react";

function index() {
   const [movies, setMovies] = useState({});
   return (
      <div className='flex flex-col gap-2 lg:flex-row lg:p-8 lg:gap-8'>
         <div className='w-full lg:w-1/3'>
            <SearchBox setMovies={setMovies} />
         </div>
         <div className='w-full lg:w-2/3'>
            <MoviesList movies={movies} />
         </div>
      </div>
   );
}

export default index;
