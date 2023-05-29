import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

const MoviesList = ({movies,title}) => {
    let[favId,setFavId]=useState(null);
    let[alterd,setAlterd]=useState(0);
    useEffect(()=>{
        let fav=JSON.parse(localStorage.getItem("fav"));
        setFavId(fav.map((m)=>{return m.id}));
    },[alterd])
    let handleAddtofav=(movie)=>{
        let fav=JSON.parse(localStorage.getItem('fav'));
        fav.push(movie);
        localStorage.setItem("fav",JSON.stringify(fav));
        alert("movie added to favorites")
        setAlterd(alterd+1);
    }
    let remove=(id)=>{
        let fav=JSON.parse(localStorage.getItem('fav'));
        fav=fav.filter((m)=>{return m.id!==id})
        localStorage.setItem("fav",JSON.stringify(fav));
        alert("movie Removed from favorites");
        setAlterd(alterd+1);
    }

    return ( 
        <div>
            <h1 id="tit">{title}</h1>
            <div className="All-movies">
                {movies.map((movie)=>{
                    return(
                        <div className="Movie-data"> 


                        {favId && favId.includes(movie.id)?
                            <button id="heart1" onClick={()=>{remove(movie.id)}}><i class='bx bxs-heart bx-tada' ></i></button> :
                        <button id="heart" onClick={()=>{handleAddtofav(movie)}}><i class='bx bx-heart bx-tada' ></i></button>}
                            
                            <Link to={`/moviedetails/${movie.id}`} style={{textDecoration:"none",color:"rgb(228, 97, 80)"}}> 
                            <img src={movie.poster} alt="prop" width="300px" height="300px" /><br />
                            <h2>{movie.moviename}</h2>
                            </Link>
                        </div>
                    )})}
            </div>
        </div>
     );
}
 
export default MoviesList;