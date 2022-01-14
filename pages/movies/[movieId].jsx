import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from '../../config/movieAxios';

function Movie() {
   const [movie, setMovie] = useState('');
   const router = useRouter();
   const { movieId } = router.query;
   useEffect(() => {
      movieId && axios.get("/" + movieId)
         .then(res => {
            setMovie(res.data);
            console.log(res.data);
         });
   }, []);
   return (
      <div>
         <h1>{movie.fullTitle}</h1>
         <img src={movie.image} width={128} />
         <p>{movie.plot}</p>
      </div>
   );
}

export default Movie;
