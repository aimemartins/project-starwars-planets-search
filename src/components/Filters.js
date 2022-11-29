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
    options,
    setOptions,
  } = useContext(StarWarsContext);

  const handleClick = () => {
    const newFilters = {
      column,
      comparison,
      number,
    };
    /* IMPORTANTE: É preciso do spread do filters
    pq vamos precisar adicionar mais de um filtro */
    setFilters([...filters, newFilters]);

    const renderedOptions = options.filter((option) => option !== column);
    setOptions(renderedOptions);
    // dúvida - pq o índice pode ser qualquer número?!
    // dúvida 2 - pq precisa setar o setColumn com índice 0?

    /* comentário de Sérgio Moreira -  Provavelmente sem o setColumn[0] ele retorna
    todos os filtros pra serem selecionados, e aí o teste quebra porque ele espera
    que não tenha todas as opções lá em cima porque duas opções foram selecionadas
    e só uma clicada pra remover */
    setColumn(renderedOptions[100]);
  };

  const handleRemoveAllFilters = () => {
    setFilters([]);
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
          {' '}
          {
            options
              .map((option, index) => (
                <option
                  key={ index }
                  value={ option }
                >
                  {option}
                </option>
              ))
          }
          ;
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
      <button
        type="button"
        data-testid="button-remove-filters"
        onClick={ handleRemoveAllFilters }
      >
        Remover todos os filtros
      </button>

    </div>
  );
}

export default Filters;
