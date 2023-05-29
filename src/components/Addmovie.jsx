import { useRef } from "react";
import {useNavigate} from 'react-router-dom'


const Addmovie = () => {

    let navigate=useNavigate()

    let moviename=useRef();
    let hero=useRef();
    let director=useRef();
    let genre=useRef();
    let poster=useRef();
    let trailer=useRef();
    let release=useRef();
    let rating=useRef();
    let synopsis=useRef();

    let handleAddNewMovie =(e)=>{
        e.preventDefault()
        //create new movie object
        let newMovie={
            moviename:moviename.current.value,
            hero:hero.current.value,
            director:director.current.value,
            languages:[],
            genre:genre.current.vale,
            poster:poster.current.value,
            trailer:trailer.current.value,
            release:release.current.value,
            rating:rating.current.value,
            synopsis:synopsis.current.value
        }
        let options =document.getElementsByName("lang")
        for(let i=0;i<options.length;i++){
            if(options[i].checked==true){
                newMovie.languages.push(options[i].value)
            }
        }
        //send the movie obj to the database
        fetch("http://localhost:4000/movies",
        {
            method:"POST",
            headers : {"Content-Type": "application/json"},
            body : JSON.stringify(newMovie)
        })
        .then(()=>{
            alert("new Movie Added Sucessfully");
            navigate("/");
        })
    }
    return ( 
    <section className="sec">
    <div className="Add-movie">
        <h1 id="h24">Add Movie</h1>
        <hr/>
        <form onSubmit={handleAddNewMovie}>
            <input id="inupt1" type="name"  placeholder="Movie name" ref={moviename}/>
            <input id="inupt1" type="name"  placeholder="Hero name" ref={hero} />
            <input id="inupt1"  type="name"  placeholder="Director name" ref={director}/>
            <input id="inupt1" type="name"  placeholder="genre" ref={genre} />
            <input id="inupt1" type="number"  placeholder="release date" min="1960" max="2023" ref={release} />
            <input id="inupt1" type="url"  placeholder="Upload poster Link" ref={poster}/>
            <input id="inupt1" type="url"  placeholder="Upload trailer Link" ref={trailer} />
            <input id="inupt1" type="number"  min="1" max="10" ref={rating} />
            {/* <label htmlFor="Languages">Languages:</label>
            <select id="int" name="Languages" multiple class="choosen-select">
                <option >Tamil</option>
                <option >Telugu</option>
                <option >Kannada</option>
                <option >Malayalam</option>
                <option >Hindi</option>
                <option >English</option>
                <option >Japanese</option>
            </select> */}
            <fieldset id="pca">
                <legend>Languages</legend>
                <div>
                    <input type="checkbox" id="tamil" name="source" value="tamil"/>
                    <label htmlFor="tamil">Tamil</label>
                </div>
                <div>
                    <input type="checkbox" id="telugu" name="source" value="telugu"/>
                    <label htmlFor="telugu">Telugu</label>
                </div>
                <div>
                    <input type="checkbox" id="kannada" name="source" value="kannada"/>
                    <label htmlFor="kannda">Kannada</label>
                </div>
                <div>
                    <input type="checkbox" id="malayalam" name="source" value="malayalam"/>
                    <label htmlFor="malayanam">Malayalam</label>
                </div>
                <div>
                    <input type="checkbox" id="hindi" name="source" value="hindi"/>
                    <label htmlFor="hindi">Hindi</label>
                </div>
                <div>
                    <input type="checkbox" id="english" name="source" value="english"/>
                    <label htmlFor="english">English</label>
                </div>
                <div>
                    <input type="checkbox" id="japanese" name="source" value="japanese"/>
                    <label htmlFor="malayanam">Japanese</label>
                </div>
            </fieldset>
            <label htmlFor="synipsis" id="pkp">Synopsys:</label>
            <textarea  name="synopsis" id="txt" cols="30" rows="10" ref={synopsis}  ></textarea>
            
            
            <button id="btn">Submit</button>
        </form>
    </div>
    </section> 
   
    );
}
 
export default Addmovie;