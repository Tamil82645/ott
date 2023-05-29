import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Relevent from "./Relevent";

const Moviedeatils = () => {
    let{id}=useParams();
    let navigate=useNavigate();
    let[movie,setmovie]=useState(null);
    let[error,seterror]=useState(null);
    let[pending,setpending]=useState(true);
    
    useEffect(()=>{
        setTimeout(()=>{
            fetch("http://localhost:4000/movies/"+id)
            .then((res)=>{return res.json()})
            .then((data)=>{
                console.log(data);
                setmovie(data);
                setpending(false);
            })
            .catch((error)=>{
                seterror("Network Error please try again ");
                setpending(false);
            })
        },500)
    },[id])
    let  deleteMovie=()=>{
        fetch("http://localhost:4000/movies/"+id,{method:"DELETE"})
        .then(()=>{navigate("/")})
    }

        return ( 
        <div className="bnc">
            <h1>Movie detail</h1>
            {pending===true && <div className="loader"></div>}
            {error && <h1>error</h1>}
            {movie && <div className="ide">
                <div className="trial"><iframe width="800" height="400" src={movie.trailer}  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
                            <h2>{movie.moviename}</h2>
                           <h4> Director  :<h6>{movie.director}</h6></h4>
                           <h4> Rating    :<h6>{movie.rating}/10</h6></h4>
                           <h4>Duration  :<h6>{movie.duration}</h6></h4>
                           <h4> Release   :<h6>{movie.release}</h6></h4>
                           <h4>Genre     :<h6>{movie.genre}</h6></h4>
                           <h4>Languages  :<h6>{movie.languages.join(" , ")}</h6></h4>
                           <button id="del" onClick={deleteMovie}>Delete</button>
                           
                </div>} 
                <div style={{display:"flex",flexWrap:"wrap",width:"100vw",marginRight:"-50px"}}>
                {movie && <Relevent genre={movie.genre}  />}
                </div>
              <div>
                
              </div>
    
        </div>
        
     ); 
}
 
export default Moviedeatils;