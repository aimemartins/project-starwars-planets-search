import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import StarWarsContext from './starWarsContext';
import starWarsAPI from '../services/starWarsAPI';

/* O arquivo de Provider é responsável por conter
todos os dados e lógica referente ao tema da nossa aplicação */

function StarWarsProvider({ children }) {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    starWarsAPI().then((response) => setPlanets(response));
  }, []);

  const value = {
    planets,
  };

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
