import { useState } from "react";
import style from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };

  return (
    <div className={style.contenedor}>
      <input
        className={style.input}
        type="search"
        placeholder="Escribir Id"
        onChange={handleChange}
      />
      <button className={style.boton} onClick={() => onSearch(id)}>
        Agregar
      </button>
    </div>
  );
}
