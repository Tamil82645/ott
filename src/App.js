import Addmovie from "./components/Addmovie";
import Favorites from "./components/Favorites";
import Home from "./components/Home";
import Moviedeatils from "./components/Moviedatails";
import Navbar from "./components/Navbar";
import Search from"./components/Search";
import{BrowserRouter,Routes,Route} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/add" element={<Addmovie/>}/>
      <Route path="/moviedetails/:id" element={<Moviedeatils/>}/>
      <Route path="/fav" element={<Favorites/>}/>
      <Route path="/search/:searchkey" element={<Search/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
