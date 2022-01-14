import { useEffect, useState } from "react";
import axios from "../config/searchAxios";

function SearchBox({ SetMovies }) {
   const [value, SetValue] = useState('');
   useEffect(() => {
      value && axios.get("/" + value).
         then(res => {
            SetMovies(res.data.results);
         }).catch(err => {
            console.error(err);
         });
   }, [value]);

   return (
      <div className="lg:sticky lg:top-24 bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl p-4 lg:my-8 ">
         <label>
            <span className='text-gray-300 text-lg'>Search your favorite movie:</span>
            <input className='rounded-lg w-full my-2 py-2 px-4' value={value} onChange={(e) => SetValue(e.target.value)} type="text" placeholder='inception...' />
         </label>
      </div>
   );
}

export default SearchBox;
