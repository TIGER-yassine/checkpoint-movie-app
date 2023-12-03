import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieCard from "./components/movieCard/MovieCard";
import { useState } from "react";
import { moviesList } from "./Data";
import NavBar from "./components/navBar/NavBar";
import AddMovie from "./components/addMovie/AddMovie";

function App() {
  //--------------------------------------state-----------------------------------
  const [movies, setMovies] = useState(moviesList);
  const [search, setSearch] = useState("");
  const [starrate, setStarrate] = useState(1);
  //-----------------------------------functions-----------------------------------
  const handelesearch = (e) => {
    setSearch(e.target.value);
  };

  const handeldelete = (id) => {
    setMovies(movies.filter((el) => el.id !== id));
  };
  const handeladdmovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };
  const handlerating = (x) => setStarrate(x);
  return (
    <div className="App">
      <NavBar
        search={search}
        handelesearch={handelesearch}
        sR={starrate}
        hR={handlerating}
      />
      <MovieCard
        Data={movies}
        del={handeldelete}
        search={search}
        starrate={starrate}
      />
      <AddMovie handeladdmovie={handeladdmovie} />
    </div>
  );
}

export default App;
