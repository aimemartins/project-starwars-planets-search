import React, { useContext } from 'react';
import StarWarsContext from '../context/starWarsContext';

function Search() {
  const { searchByName, setSearchByName } = useContext(StarWarsContext);

  const handleChange = ({ target }) => {
    setSearchByName(target.value);
  };

  return (
    <div className="Search">
      <h3>Planets of the StarWars universe</h3>
      <label htmlFor="search">
        <input
          id="search"
          type="text"
          name="search"
          data-testid="name-filter"
          placeholder="Search the planets here..."
          onChange={ handleChange }
          value={ searchByName }
        />
      </label>
    </div>
  );
}

export default Search;
