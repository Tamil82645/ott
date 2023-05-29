import { useEffect } from "react";
import { useState } from "react";
import MoviesList from "./MovieList";

const Home = () => {
    let[movies,setmovies]=useState(null)
    useEffect(()=>{


        if(localStorage.getItem("fav")==null)
        {
            localStorage.setItem("fav","[]")
        }

        setTimeout(()=>{
            fetch("http://localhost:4000/movies")
            .then((res)=>{return res.json()})
            .then((data)=>{
                console.log(data);
                setmovies(data);
            })
        },2000)
    },[])
    

    return ( 
        <div className="home">
            {movies==null && <div className="loader"></div> }
            {movies && <MoviesList movies={movies} title="All movies"/>}
            
            {movies && <MoviesList movies={movies.filter((v)=>{return v.genre.includes("Action")})} title="Action movies"/>}
            {movies && <MoviesList movies={movies.filter((v)=>{return v.rating>=8})} title="Top Rated movies"/>}
            {movies && <MoviesList movies={movies.filter((v)=>{return v.genre.includes("drama")})} title="Drama movies"/>}
            
        </div>
     );
}
 
export default Home;