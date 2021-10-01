import React, { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Carousel } from "./components/Carousel";
import { Pagination } from "./components/Pagination";
import { Showcase } from "./components/Showcase";
import "./App.css";

function App() {
  const [characters, setCharacters] = useState([]);
  const [info, setinfo] = useState({});
  const urlApi = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (urlApi) => {
    fetch(urlApi) // request a la API
      .then((response) => response.json()) //convertimos a JSON
      .then((data) => {
        setCharacters(data.results);
        setinfo(data.info);
      })
      .catch((error) => console.log(error));
  };

  const handleNextPage = () => {
    fetchCharacters(info.next);
  };

  const handlePreviousPage = () => {
    fetchCharacters(info.prev);
  };

  useEffect(() => {
    fetchCharacters(urlApi);
  }, []); // ejecuta una vez cuando el componente se renderiza por primera vez

  return (
    <>
      <Navbar brand="Rick And Morty Carousel" />
      <Showcase />
      <div className="container mt-5">
        <Pagination
          prev={info.prev}
          next={info.next}
          onPrevious={handlePreviousPage}
          onNext={handleNextPage}
        />
        <Carousel characters={characters} />
        <Pagination
          prev={info.prev}
          next={info.next}
          onPrevious={handlePreviousPage}
          onNext={handleNextPage}
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
