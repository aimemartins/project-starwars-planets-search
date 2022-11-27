import { useEffect, useContext } from 'react';
import StarWarsContext from '../context/starWarsContext';

function Table() {
  const {
    planets,
    searchByName,
    planetsFiltered,
    filters,
    setplanetsFiltered,
  } = useContext(StarWarsContext);

  /* UseEffect para quando eu começar a digitar e carregar o seachByName
  ele ao mesmo tempo seta um  estado (planetsFiltered) só para
  o retorno da pesquisa */

  useEffect(() => {
    const filterName = planets
      .filter((planet) => planet.name.toUpperCase().includes(searchByName.toUpperCase()));

    // reduce faz o saldo no acumulador
    const generalFilters = filters.reduce((acc, filter) => acc.filter((planet) => {
      console.log('filter', filters);
      switch (filter.comparison) {
      case 'maior que':
        return (Number(planet[filter.column]) > Number(filter.number));
      case 'menor que':
        return (Number(planet[filter.column]) < Number(filter.number));
      // case 'igual a':
      //   return
      default:
        return (Number(planet[filter.column]) === Number(filter.number));
      }
    }), filterName);

    setplanetsFiltered(generalFilters);
  }, [searchByName, filters, setplanetsFiltered, planets]);

  console.log('planetsFiltered', planetsFiltered);
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        {planetsFiltered.map((planet) => (
          <tr key={ planet.name }>
            <td>{planet.name}</td>
            <td>{planet.rotation_period}</td>
            <td>{planet.orbital_period}</td>
            <td>{planet.diameter}</td>
            <td>{planet.climate}</td>
            <td>{planet.gravity}</td>
            <td>{planet.terrain}</td>
            <td>{planet.surface_water}</td>
            <td>{planet.population}</td>
            <td>{planet.films}</td>
            <td>{planet.created}</td>
            <td>{planet.edited}</td>
            <td>{planet.url}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;

// const filterName = () => {
//   const response = planets
//     .filter((planet) => planet.name.toUpperCase().includes(searchByName.toUpperCase()));
//   return response;
// };
// const generalFilter = () => {
//   filters.forEach((el) => {
//     if (el.comparison === 'maior que') {
//       const response = planetsFiltered
//         .filter((planet) => (Number(planet[el.column]) > Number(el.number)));
//       setplanetsFiltered(response);
//     }
//     if (el.comparison === 'menor que') {
//       const response = planetsFiltered
//         .filter((planet) => (Number(planet[el.column]) < Number(el.number)));
//       setplanetsFiltered(response);
//     }
//     if (el.comparison === 'igual a') {
//       const response = planetsFiltered
//         .filter((planet) => (Number(planet[el.column]) === Number(el.number)));
//       setplanetsFiltered(response);
//     }
//   });
// };

// useEffect(() => {
//   filterName();
//   generalFilter();
// }, [filters, planetsFiltered, searchByName]);
