import React, { useContext } from 'react';
import StarWarsContext from '../context/starWarsContext';

function Filters() {
  const {
    column,
    setColumn,
    comparison,
    setComparison,
    number,
    setNumber,
    filters,
    setFilters,
  } = useContext(StarWarsContext);

  /* IMPORTANTE: É preciso do spread do filters
pq vamos precisar adicionar mais de um filtro */

  const handleClick = () => {
    const newFilters = {
      column,
      comparison,
      number,
    };
    setFilters([...filters, newFilters]);
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
          value={ column }
          onChange={ ({ target }) => setColumn(target.value) }
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
      </label>
      <label htmlFor="comparison">
        Operador
        <select
          id="comparison"
          data-testid="comparison-filter"
          name="comparison"
          value={ comparison }
          onChange={ ({ target }) => setComparison(target.value) }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <label htmlFor="value-filter">
        Número
        <input
          type="number"
          id="number"
          data-testid="value-filter"
          name="number"
          value={ number }
          onChange={ ({ target }) => setNumber(target.value) }
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

// if (comparison === 'maior que') {
//   const response = planets.filter(
//     (el) => (Number(el[column]) > Number(number)),
//   );
//   setPlanets(response);
// }

// if (comparison === 'menor que') {
//   const response = planets.filter(
//     (el) => (Number(el[column]) < Number(number)),
//   );
//   setPlanets(response);
// }
// if (comparison === 'igual a') {
//   const response = planets.filter(
//     (el) => (Number(el[column]) === Number(number)),
//   );
//   setPlanets(response);
// }
