import Link from "next/link";

function Nav() {
   return (
      <div className="sticky top-0">
         <nav className="flex place-content-center relative p-4 bg-white/80 bg-gradient-to-r from-transparent via-yellow-400 to-transparent">
            <Link href={"/"}><a className='text-4xl font-extrabold text-black uppercase inline-block lg:text-5xl'>next-imdb</a></Link>
            <div className="absolute w-full top-full py-2 bg-gradient-to-b from-white/70"/>
         </nav>
      </div>
   );
}

export default Nav;
