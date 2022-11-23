import PropTypes from 'prop-types';
import { useEffect, useState, useMemo } from 'react';
import StarWarsContext from './starWarsContext';
import starWarsAPI from '../services/starWarsAPI';

/* O arquivo de Provider é responsável por conter
todos os dados e lógica referente ao tema da nossa aplicação */

function StarWarsProvider({ children }) {
  const [planets, setPlanets] = useState([]); // armazena retorno da api
  const [searchByName, setSearchByName] = useState(''); // armazena os values do input
  const [filtersByName, setFiltersByName] = useState([]); // ainda sem utilidade

  useEffect(() => {
    starWarsAPI().then((response) => setPlanets(response));
  }, []);

  const value = useMemo(() => ({
    planets,
    searchByName,
    setSearchByName,
    filtersByName,
    setFiltersByName,

  }), [planets, searchByName, setSearchByName, filtersByName, setFiltersByName]);

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
