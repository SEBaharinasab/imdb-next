import Link from "next/link";

function MovieCard({ movie }) {
   const { image, title, description, id } = movie;
   return (
      <Link href={"/movies/" + id}>
         <a className="flex bg-white rounded-2xl shadow-md p-3 pb-6 gap-3 lg:flex-col" >
            <div className="image rounded-xl overflow-hidden h-28 aspect-square lg:h-auto lg:w-full lg:aspect-video">
               <img className="w-full h-full object-cover object-center" src={image} />
            </div>
            <div className="content flex-1">
               <h3 className="title font-semibold">{title}</h3>
               <p className="description text-sm mt-2 text-gray-600">{description}</p>
            </div>
         </a>
      </Link>
   );
}

export default MovieCard;
