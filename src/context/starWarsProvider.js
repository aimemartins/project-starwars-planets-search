import PropTypes from 'prop-types';
import { useEffect, useState, useMemo } from 'react';
import StarWarsContext from './starWarsContext';
import starWarsAPI from '../services/starWarsAPI';

/* O arquivo de Provider é responsável por conter
todos os dados e lógica referente ao tema da nossa aplicação */

function StarWarsProvider({ children }) {
  const [planets, setPlanets] = useState([]); // armazena retorno da api
  const [searchByName, setSearchByName] = useState(''); // armazena os values do input
  const [filters, setFilters] = useState({
    column: 'population',
    comparison: 'maior que',
    valueFilter: 0,
  }); // ainda sem utilidade

  useEffect(() => {
    starWarsAPI().then((response) => setPlanets(response));
  }, []);

  const value = useMemo(() => ({
    planets,
    searchByName,
    setSearchByName,
    filters,
    setFilters,

  }), [planets, searchByName, setSearchByName, filters, setFilters]);

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
