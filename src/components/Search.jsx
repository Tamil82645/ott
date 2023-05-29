import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import MoviesList from "./MovieList";

const Search = () => {
    
    let{searchkey}=useParams();

    let[movies,setmovies]=useState(null);
    

    useEffect(()=>{
             setmovies(null);
            setTimeout(()=>{
            fetch("http://localhost:4000/movies")
            .then((res)=>{return res.json()})
            .then((data)=>{
                let d=data.filter((m)=>{
                        return (m.moviename.toLowerCase().includes(searchkey.toLowerCase())) || 
                        (m.genre.toLowerCase().includes(searchkey.toLowerCase())) ||
                        (m.languages.includes(searchkey)) ||
                        (m.hero.toLowerCase().includes(searchkey.toLowerCase()))
                })
                setmovies(d);
            })
        },2000)
      
    },[searchkey])
    return ( <div className="ser">
        {movies==null && <div className="loader"></div> }
        {movies && <MoviesList movies={movies} title={"search result"}/>}
        </div> );
}
 
export default Search;