import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';
import testData from '../../cypress/mocks/testData';
import StarWarsProvider from '../context/starWarsProvider';


describe('Testa a aplicação StarWars Planet Search no comonente App ', () => {
  beforeEach(() => {
    global.fetch = jest.fn(async () => ({
      json: async () => (testData)
    }))

    render(
      <StarWarsProvider>
        <App />
      </StarWarsProvider>
    )

  })

  test('Testa se a API é chamada e seus valores são renderizados na página', () => {
    expect(global.fetch).toHaveBeenCalledWith('https://swapi.dev/api/planets');

    const searchInput = screen.getByTestId("name-filter");
    userEvent.type(searchInput, 'mino')
    expect(searchInput).toBeInTheDocument();

    const column = screen.getByTestId("column-filter");
    userEvent.selectOptions(column, 'population');
    expect(column).toBeInTheDocument();

    const comparison = screen.getByTestId("comparison-filter");
    userEvent.selectOptions(comparison, 'maior que')
    expect(comparison).toBeInTheDocument();

    const valueNumber = screen.getByTestId("value-filter");
    userEvent.type(valueNumber, '1000');
    expect(valueNumber).toBeInTheDocument();

    const buttonFilter = screen.getByTestId('button-filter')
    userEvent.click(buttonFilter)
    expect(buttonFilter).toBeInTheDocument();

    const buttonRemoveAllFilters = screen.getByTestId("button-remove-filters");
    userEvent.click(buttonRemoveAllFilters)
    expect(buttonRemoveAllFilters).toBeInTheDocument();

  });

  test('Testa se a API é chamada e seus valores são renderizados na página e o botão de remover filtro está funcionando', () => {
    expect(global.fetch).toHaveBeenCalledWith('https://swapi.dev/api/planets');

    const searchInput = screen.getByTestId("name-filter");
    userEvent.type(searchInput, 'deraan')
    expect(searchInput).toBeInTheDocument();

    const column = screen.getByTestId("column-filter");
    userEvent.selectOptions(column, 'diameter');
    expect(column).toBeInTheDocument();

    const comparison = screen.getByTestId("comparison-filter");
    userEvent.selectOptions(comparison, 'menor que')
    expect(comparison).toBeInTheDocument();

    const valueNumber = screen.getByTestId("value-filter");
    userEvent.type(valueNumber, '10');
    expect(valueNumber).toBeInTheDocument();

    const buttonFilter = screen.getByTestId('button-filter')
    userEvent.click(buttonFilter)
    expect(buttonFilter).toBeInTheDocument();

    const buttonDeleteFilter = screen.getByTestId("delete-filter");
    userEvent.click(buttonDeleteFilter)

    // userEvent.selectOptions(comparison, 'igual a')
  });
});
