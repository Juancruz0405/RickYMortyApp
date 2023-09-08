import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import { useState } from "react";
import axios from "axios";
import { Route, useNavigate } from "react-router-dom";
import { Routes } from "react-router-dom";
import About from "./components/About";
import Detail from "./components/Detail/Detail";
import Forms from "./components/Forms/Forms";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Favorites from "./components/Favorites/Favorites";

function App() {
  const [access, setAccess] = useState(false);
  useEffect(() => {
    !access && navigate("/");
  }, [access]);
  const [characters, setCharacters] = useState([]);
  console.log(characters);

  const onClose = (id) => {
    setCharacters(characters.filter((ch) => ch.id !== +id));
  };

  const navigate = useNavigate();

  const EMAIL = "";
  const PASSWORD = "";

  function login(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate("/home");
    }
  }

  const location = useLocation();

  function onSearch(id) {
    console.log("este es el", id);
    //recibe un id, lo busca con axios y lo agrega al estado characters
    //agregar para que no se puedan repetir numeros y tambien un alert para que solo se pueda poner un ID

    axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
        console.log(data);
        if (data.name) {
          setCharacters((characters) => [...characters, data]);
        }
      })
      .catch((error) => window.alert("¡No hay personajes con este ID!"));
  }

  const navegador = () => {
    if (location.pathname !== "/") {
      return <Nav onSearch={onSearch} />;
    }
  };

  return (
    <div className="App">
      {navegador()}
      <Routes>
        <Route path="/" element={<Forms login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />

        <Route path="/about" element={<About />} />

        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
