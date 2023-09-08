import Card from "../Card/Card";

export default function Cards({ characters, onClose }) {
  console.log(characters);
  return (
    <div>
      {characters.map((character) => {
        return (
          <Card
            key={character.id}
            character={character}
            onClose={onClose}
            name={character.name}
            //status={character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin.name}
            image={character.image}
            id={character.id}
          />
        );
      })}
    </div>
  );
}
