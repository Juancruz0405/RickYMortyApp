import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import style from "../Detail/detail.module.css";

const Detail = (props) => {
  const { id } = useParams({});

  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return (
    <div className={style.body}>
      <div className={style.letras}>
        <h2>{character.name}</h2>
        <p>STATUS | {character.status}</p>
        <p>GENDER | {character.gender}</p>
        <p>SPECIE |{character.species}</p>
        <p>ORIGIN |{character.origin?.name}</p>
      </div>
      <img
        className={style.imagen}
        src={character.image}
        alt="{character.image}"
      />
    </div>
  );
};

export default Detail;
