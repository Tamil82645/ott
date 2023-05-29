import { useEffect, useState } from "react";
import MoviesList from "./MovieList";

const Favorites = () => {
    let[favoritemovies,setFav]=useState(null);
    useEffect(()=>{
        setFav(JSON.parse(localStorage.getItem("fav")));
    },[favoritemovies])
    return ( <div className="fav">
      {favoritemovies && 
      <MoviesList movies={favoritemovies} title={"Favorite Movies"} />
      }
    </div> );
}
 
export default Favorites;