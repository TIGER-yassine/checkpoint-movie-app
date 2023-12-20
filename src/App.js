import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieCard from "./components/movieCard/MovieCard";
import { useState } from "react";
import { moviesList } from "./Data";
import NavBar from "./components/navBar/NavBar";
import AddMovie from "./components/addMovie/AddMovie";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Description from "./components/description/Description";

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
      <BrowserRouter>
        <NavBar
          search={search}
          handelesearch={handelesearch}
          sR={starrate}
          hR={handlerating}
        />
        <Routes>
          <Route
            path="/"
            element={
              <MovieCard
                Data={movies}
                del={handeldelete}
                search={search}
                starrate={starrate}
              />
            }
          />

          <Route
            path="/description/:id"
            element={<Description Data={movies} />}
          />
        </Routes>
        <AddMovie handeladdmovie={handeladdmovie} />
      </BrowserRouter>
    </div>
  );
}

export default App;
