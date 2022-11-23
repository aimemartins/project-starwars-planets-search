import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/starWarsContext';

function Filters() {
  const [inputs, setInputs] = useState({
    column: 'population',
    comparison: 'maior que',
    valueFilter: 0,
  });

  const { setFilters } = useContext(StarWarsContext);

  const handleChange = ({ target }) => {
    setInputs({
      ...inputs,
      [target.name]: target.value,
    });
  };

  const handleClick = () => {
    setFilters(inputs);
  };

  return (
    <div className="Filters">
      <p>Filtros</p>
      <label htmlFor="column">
        Category
        <select
          id="column"
          data-testid="column-filter"
          name="column"
          onChange={ handleChange }
        >
          <option value="population ">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter ">diameter</option>
          <option value="rotation_period ">rotation_period</option>
          <option value="surface_water ">surface_water</option>
        </select>
      </label>
      <label htmlFor="comparison">
        Operador
        <select
          id="comparison"
          data-testid="comparison-filter"
          name="comparison"
          onChange={ handleChange }
        >
          <option value="maior que ">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a ">igual a</option>
        </select>
      </label>
      <label htmlFor="value-filter">
        Número
        <input
          type="number"
          id="value-filter"
          data-testid="value-filter"
          name="valueFilter"
          onChange={ handleChange }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Filtrar
      </button>

    </div>
  );
}

export default Filters;
