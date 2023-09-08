import { connect } from "react-redux";
import Card from "../Card/Card";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterCards, orderCards } from "../../redux/actions";
const Favorites = ({ myFavorites }) => {
  const [aux, setAux] = useState(false);

  const dispatch = useDispatch();

  const handleOrder = (e) => {
    dispatch(orderCards(e.target.value));
    setAux(!aux);
  };
  const handleFilter = (e) => {
    dispatch(filterCards(e.target.value));
    setAux(!aux);
  };
  return (
    <div>
      <div>
        <select onChange={handleOrder} name="" id="">
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>
        <select onChange={handleFilter} name="" id="">
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
      </div>
      {myFavorites.map((character) => {
        return (
          <Card
            id={character.id}
            name={character.name}
            // status={character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin}
            image={character.image}
            // onClose={onClose}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
