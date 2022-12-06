import React, { useContext } from 'react';
import StarWarsContext from '../context/starWarsContext';

function RunningFilters() {
  const { filters, setFilters } = useContext(StarWarsContext);

  const handleDeleteFilter = (index) => {
    const deleteFilters = filters.filter((item, itemIndex) => itemIndex !== index);
    setFilters(deleteFilters);
  };

  return (
    <div className="Running">
      <p>Filtros em execução</p>
      <div>
        {filters.map((filter, index) => (
          <p
            key={ `${filter.column}-${index}` }
            data-testid="filter"
          >
            {`${filter.column} ${filter.comparison} ${filter.number}`}
            <button
              type="button"
              onClick={ () => handleDeleteFilter(index) }
              data-testid="delete-filter"
            >
              x
            </button>
          </p>
        ))}
      </div>
    </div>
  );
}

export default RunningFilters;
