import React from 'react';
import './App.css';
import Filters from './components/Filters';
import RunningFilters from './components/RunningFilters';
import Search from './components/Search';
import Table from './components/Table';
import StarWarsProvider from './context/starWarsProvider';

function App() {
  return (
    <StarWarsProvider>
      <Search />
      <Filters />
      <RunningFilters />
      <Table />
    </StarWarsProvider>
  );
}

export default App;
