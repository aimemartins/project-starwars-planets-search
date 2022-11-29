import PropTypes from 'prop-types';
import { useEffect, useState, useMemo } from 'react';
import StarWarsContext from './starWarsContext';
import starWarsAPI from '../services/starWarsAPI';

/* O arquivo de Provider é responsável por conter
todos os dados e lógica referente ao tema da nossa aplicação */

function StarWarsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [planetsFiltered, setplanetsFiltered] = useState([]);
  const [searchByName, setSearchByName] = useState('');
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [number, setNumber] = useState(0);
  const [filters, setFilters] = useState([]);
  const [options, setOptions] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  const handleAPI = async () => {
    const response = await starWarsAPI();
    setPlanets(response);
    setplanetsFiltered(response);
  };

  useEffect(() => {
    handleAPI();
  }, []);

  const value = useMemo(() => ({
    planets,
    setPlanets,
    searchByName,
    setSearchByName,
    filters,
    setFilters,
    column,
    setColumn,
    comparison,
    setComparison,
    number,
    setNumber,
    planetsFiltered,
    setplanetsFiltered,
    options,
    setOptions,

  }), [
    planets,
    setPlanets,
    searchByName,
    setSearchByName,
    filters,
    setFilters,
    column,
    setColumn,
    comparison,
    setComparison,
    number,
    setNumber,
    planetsFiltered,
    setplanetsFiltered,
    options,
    setOptions,
  ]);

  return (
    <StarWarsContext.Provider value={ value }>
      <div>
        {children}
      </div>
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;
