
import { useState } from "react";
import { Link } from'react-router-dom';

const Navbar = () => {


    let[searchkey,setsearchkey]=useState("")
    let[menu, setmenu]=useState(false)
    
    return ( 
            <nav id='navbar'>
                <div id="logo">
                    <img src="https://t4.ftcdn.net/jpg/05/08/67/37/360_F_508673734_bQYNNzqh1xxrfFueZjDS1FphFYOa0egN.jpg" alt="" />
                  <Link to="/" id="h12"><h1>Movies 📽 </h1></Link> 
                </div>
                <div id="search-bar">
                    <input type="search" value={searchkey} onChange={(e)=>{setsearchkey(e.target.value)}} placeholder="Search for movies"/>
                  <button > <Link to={`/search/${searchkey}`} id="search">Search </Link> </button>
                </div>
                <div id="fav-movie">
                <Link to="/fav" > Favorite movies </Link>
                </div>
                <div id="add-movie">
                    <Link to="/add">Add Movie</Link>
                </div>
                <div id="ham">
                  
                  <span id="sp" onClick={()=>{setmenu(!menu)}}>{menu===false ? <i class='bx bx-menu bx-flip-vertical'></i> : <i class='bx bx-menu-alt-left' ></i>} </span>
                 { menu && <div id="menu" >
                  <div id="fav-movie">
                <Link to="/fav" > Favorite movies </Link>
                </div>
                <div id="add-movie">
                    <Link to="/add">Add Movie</Link>
                </div>
                  </div>}

                </div>
            </nav>
            
     );
}
 
export default Navbar;