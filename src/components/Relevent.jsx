
import { useEffect } from "react";
import { useState } from "react";
import MoviesList from "./MovieList";
const Relevent = (genre) => {
    let[movies,setmovies]=useState(null);
   
    
    
    useEffect(()=>{
        setTimeout(()=>{
            fetch("http://localhost:4000/movies")
            .then((res)=>{return res.json()})
            .then((data)=>{
                setmovies(data);
             
            })
            
        },500)
    },[])
    return ( <div className="rel">
       
        {movies &&

        <MoviesList movies={movies.filter((m)=>{return m.genre.split(" ").some((g)=>{return m.genre.includes(g)})})} title="Relevent movies"/>
    }
    </div>
    );
}
 
export default Relevent;