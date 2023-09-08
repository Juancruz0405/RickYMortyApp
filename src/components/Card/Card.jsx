import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFav, removeFav } from "../../redux/actions";
import { useState, useEffect } from "react";

function Card(props) {
  const {
    id,
    name,
    status,
    species,
    gender,
    origin,
    image,
    onClose,
    addFav,
    removeFav,
    myFavorites,
  } = props;

  //const id = character.id;

  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav(props);
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <div className={style.tarjeta}>
      <div className={style.carta}>
        {isFav ? (
          <button className={style.botonCorazon} onClick={handleFavorite}>
            ❤️
          </button>
        ) : (
          <button className={style.botonCorazon} onClick={handleFavorite}>
            🤍
          </button>
        )}
        <img className={style.imagen} src={image} alt="" />
        <button className={style.boton} onClick={() => onClose(id)}>
          X
        </button>
        <Link to={`/detail/${id}`}>
          <h2 className={style.nombre}>{name}</h2>
        </Link>
      </div>
      <hr />
      <h2 className={style.titulos}>{species}</h2>
      <h2 className={style.titulos}>{gender}</h2>
      <h2>{status}</h2>
      <h2>{origin.name}</h2>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
