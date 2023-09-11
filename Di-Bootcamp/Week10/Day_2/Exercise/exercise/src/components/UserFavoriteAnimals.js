const UserFavoriteAnimals = (props) => {
  const { firstName, lastname, favAnimals } = props;
  return (
    <>
      <h1>
        {firstName} {lastname}{" "}
      </h1>
      <ul>
        {favAnimals.map((animal) => {
          return <li>{animal}</li>;
        })}
      </ul>
    </>
  );
};

export default UserFavoriteAnimals;
