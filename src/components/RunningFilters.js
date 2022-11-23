import React, { useState, useContext } from 'react';
import StarWarsContext from '../context/starWarsContext';

function RunningFilters() {
  const [compareFilters, setCompareFilters] = useState([]);

  const { planets, filters } = useContext(StarWarsContext);
  const { column, comparison, valueFilter } = filters;

  console.log(comparison);

  // const filterComparison = (planets) => {
  //   const filterByComparison = [];

  //   // switch(comparison) {
  //   //   case "maior que":
  //   //     filterByComparison = planets.filter((planet) =>  )
  //   // }
  // };

  return (
    <div className="Running">
      <p>Filtros em execução</p>
    </div>
  );
}

export default RunningFilters;
